<template>
  <div>

    <Modal ref="modal" :Text="this.text"> </Modal>
    <br /><br />
    <div>
      <div v-if="this.isLoading">
        <b-spinner
          variant="danger"
          style="width: 4rem; height: 4rem; margin-left: 50%;"
          label="Large Spinner"
        ></b-spinner>
      </div>
      <div v-else>
            <!-- <b-button variant="outline-secondary" class="but" @click="show=true">Instructions</b-button> -->
        <div class="secondery">
        <binning ref="bins" :Images="this.Images" :rows="8" :cols="72 / 8"></binning>
        <div class="d-flex justify-content-center" style="margin-bottom: 15px; margin-top: 30px;">
        <a href="#" class="btn btn-white btn-animate" @click.prevent="showModal">Instructions</a>
        <a href="#" class="btn btn-white btn-animate" id="butt2" @click="submit">Submit</a> 
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import binning from "../Components/binning.vue";
import Modal from "../Components/Modal.vue";

export default {
  name: "RatePage",
  components: {
    binning,
    Modal,
  },
  data() {
    return {
      Images: [],
      Image: "",
      disableButton: true,
      flag: true,
      isLoading: true,
      text: `Welcome to images rating page! In front of you there are ${this.$root.store.rankImages}  images you need to rate. Each image supposed to be dragging with the mouse to a specific bin;`
    };
  },
  methods: {
    showModal() {
      this.$refs.modal.setShow();
    },
    async checkFull() {
      let sizeFull = this.$refs;

      if (sizeFull == undefined || sizeFull == {}) return this.disableButton;

      return sizeFull.bins.sizeFull != this.size;
    },
    async submit() {
      let rates = this.$refs.bins.ratingAll();
      let user_id = this.$root.store.u_id;

      await this.axios.post(`http://localhost:443/images/submitRatings`, {
        data_ratings: rates,
        id: user_id,
      });
      this.$router.push("/FirstGamePage");
    },
    async uploadImages() {
      try {
        const response = await this.axios.get(
          `http://localhost:443/images/getImages`
        );

        let arr = [];

        response.data.urls.map((img) => {
          let str = "data:image/jpg;base64, " + img.src;
          arr.push({ id: img.id, src: str });
        });
        this.Images = arr;
        this.isLoading = false;
        this.showModal();
 
      } catch (err) {
        console.log(err.response);
      }
    },
  },

  created() {
    this.uploadImages();

  },
};
</script>
<style>
@import "../assets/style.css";
/* .main {
  overflow: auto;
  float: right;
} */

/* .moda {
margin-left: 10px;
} */

/* .but {
  outline: none !important;
} */
.instructor {
  margin-bottom: 0px;
}
/* .submitButton {
  margin-top: 3%;
  margin-left: 40%;
  width: 200px;
} */

/* #button1{
margin-right: 50px;
} */

/* .text-box {
    margin-left: 10px;

} */

/* .submitDiv{
    margin-left: 45%;
} */
</style>
