<template>
  <div>
    <div>
      <binning ref="bins"
        :Images="this.Images"
        :rows="8"
        :cols="72/8"
      ></binning>
   
    </div>
    <!-- <div class="submitDiv">
      <button id="terms" class="submitButton"  v-on:click="submit">
        Submit
      </button>
    </div> -->

    <br>
    <br>

<div class="d-flex justify-content-center">
<button type="button" class="btn btn-outline-danger" v-on:click="submit">Submit</button>
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
      size: 4,
      Image: "",
      disableButton:true,
    };
  },
  // computed:
  // {
    
  //   size: function(){
      
  //     return this.topics*this.pictures},
    
  // },
  methods: {
    
    async checkFull()
    {
      let sizeFull = this.$refs;
      
      
      if(sizeFull == undefined || sizeFull == {})
        return this.disableButton;
      
      // console.log(sizeFull.bins.sizeFull);
      return sizeFull.bins.sizeFull != this.size;
    },
    async submit() {
      let rates = this.$refs.bins.ratingAll();
      let user_id = this.$root.store.u_id;
      

      await this.axios.post(
        `http://localhost:443/images/submitRatings`,
        {
          data_ratings:rates,
          id:user_id,
          
        }
      );
      this.$router.push('/SecondGamePage');
    },
    async uploadImages() {
      try{

      this.size = 72;

      const response = await this.axios.get(`http://localhost:443/images/getImages`,);
    
      let arr = [];
      
      response.data.urls.map((img) => {
        let str = "data:image/jpg;base64, " + img.src;
        arr.push({id:img.id, src:str});
        
      });
      this.Images = arr;

      } catch(err){
        console.log(err.response);
      }
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

/* .submitDiv{
    margin-left: 45%;
} */
</style>
