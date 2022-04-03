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
        <binning ref="bins" :Bins="this.Bins" :Images="this.Images" :rows="8" :cols="72 / 8"></binning>
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
      Bins: [],
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
      localStorage.setItem("numRanked", JSON.stringify(this.$refs.bins.sizeFull));
      this.$root.store.numRanked = JSON.parse(localStorage.numRanked);
      console.log("numRanked",this.$root.store.numRanked)
      if(this.$root.store.numRanked < 64)
      {
        localStorage.setItem("RankedImages", JSON.stringify(this.$refs.bins.ratingAll()));
        localStorage.setItem("unRankedImages", JSON.stringify(this.$refs.bins.unrated()));
        
        this.$root.store.RankedImages = JSON.parse(localStorage.RankedImages);
        this.$root.store.unRankedImages = JSON.parse(localStorage.unRankedImages);
 
        this.$router.push("/");
        return;
      }
      else
      {
        localStorage.setItem("RankedImages", undefined);
        localStorage.setItem("unRankedImages", undefined);
        
        this.$root.store.RankedImages = undefined;
        this.$root.store.unRankedImages = undefined;
      }
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
    async uploadAlt()
    {
      try {
        console.log("pics" , this.$root.store.RankedImages)
        const res = await this.axios.post(
          `http://localhost:443/images/fetchSpecificImages`,
          {
            pics:this.$root.store.unRankedImages,
            bins:this.$root.store.RankedImages
          }
        );
        
        let response = res.data[0]
        let response2 = res.data[1]
        
        let arr = [];
        let arr2 = [];
        response.map((img) => {
          let str = "data:image/jpg;base64, " + img.src;
          arr.push({ id: img.id, src: str });
        });
        response2.map((img) => {
          let str = "data:image/jpg;base64, " + img.src;
          arr2.push({ id: img.id, src: str, rating:img.rating });
        });
        
        this.Images = arr;
        this.Bins = arr2;
        
        this.isLoading = false;
      } catch (err) {
        console.log(err.response);
      }
    },
  },

  created() {
    console.log(this.$root.store);
    if(this.$root.store.RankedImages!=undefined)
      this.uploadAlt();
    else
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
