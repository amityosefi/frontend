<template>
  <div>
    <br /><br />
    <div v-if="this.flag" id="instructor" style="margin-bottom: 25px">
      <div>
        <Instructions
          :Text="
            `Welcome to Rate images! \n In front of you are ${$root.store.rankImages} images you need to rate.\n Every image supposed to be dragging with the mouse to every specific bin`
          "
        />
      </div>
      <div
        class="d-flex justify-content-center"
        style="margin-bottom: 15px; margin-top: 20px"
      >
        <button
          type="button"
          class="btn btn-outline-danger"
          v-on:click="changeDivs"
        >
          {{ this.text }}
        </button>
      </div>
    </div>

    <div v-else>
      <div v-if="this.isLoading">
        <b-spinner
          variant="info"
          style="width: 5rem; height: 5rem; margin-left: 50%;"
          label="Large Spinner"
        ></b-spinner>
      </div>
      <div v-else>
        <binning
          ref="bins"
          :Images="this.Images"
          :Bins="this.Bins"
          :rows="8"
          :cols="72 / 8"
        ></binning>
        <div
          class="d-flex justify-content-center"
          style="margin-bottom: 15px; margin-top: 30px"
        >
          <button
            type="button"
            class="btn btn-outline-danger"
            v-on:click="submit"
          >
            Submit ratings
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import binning from "../Components/binning.vue";
import Instructions from "../Components/Instructions.vue";

export default {
  name: "RatePage",
  components: {
    binning,
    Instructions,
  },
  data() {
    return {
      Images: [],
      Image: "",
      Bins: [],
      disableButton: true,
      flag: true,
      isLoading: true,
      text: "Start rate",
    };
  },
  // computed:
  // {

  //   size: function(){

  //     return this.topics*this.pictures},

  // },
  methods: {
    changeDivs() {
      this.flag = !this.flag;
      // if (this.flag) this.text = "Back to rate";
      // else this.text = "Back to instructions";
    },

    async checkFull() {
      let sizeFull = this.$refs;

      if (sizeFull == undefined || sizeFull == {}) return this.disableButton;

      // console.log(sizeFull.bins.sizeFull);
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
<style scoped>
.instructor {
  margin-bottom: 0px;
}
.submitButton {
  margin-top: 3%;
  margin-left: 40%;
  width: 200px;
  /* width: 50vh; */
}

/* .submitDiv{
    margin-left: 45%;
} */
</style>
