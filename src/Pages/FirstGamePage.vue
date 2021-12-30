<template>
  <div>
    <div>
      <h1>First game</h1>
      <binning ref="bins"
        :Images="this.Images"
        :rows="this.topics"
        :cols="this.pictures"
      ></binning>
   
    </div>
    <div class="submitDiv">
      <button id="terms" class="submitButton"  v-on:click="submit">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import binning from "../Components/binning.vue";

export default {
  name: "FirstGame",
  components: {
    binning,
  },
  data() {
    return {
      Images: [],
      topics: 5,
      pictures: 5,
      Image: "",
      disableButton:true,
    };
  },
  computed:
  {
    size: function(){return this.topics*this.pictures},
    
  },
  methods: {
    
    async submit() {
      let rates = this.$refs.bins.ratingAll();
      // let user_id = 1;
      console.log(rates);
      await this.axios.post(
        `http://localhost:443/images/submitRatings`,
        {
          data_ratings:rates,

        }
      );
      this.$router.push('/SecondGamePage');
    },
    async uploadImages() {
      

      const response = await this.axios.get(
        `http://localhost:443/images/getImages/${this.topics}/${this.pictures}`,
        {}
      );
      let arr = [];
      
      response.data.urls.map((img) => {
        let str = "data:image/jpg;base64, " + img.src;
        arr.push({id:img.Id, src:str});
        
      });
      this.Images = arr;
    },
  },

  created() {
    this.uploadImages();
  },
};
</script>
<style scoped>
.submitButton {
  margin-top: 3%;
  margin-left: 40%;
  width: 200px;
  /* width: 50vh; */
}
</style>
