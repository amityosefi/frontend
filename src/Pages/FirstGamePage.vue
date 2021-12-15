<template>
  <div>
    <div>
      <h1>First game</h1>
      <!-- <h1 class="header">Welcome to our image app!</h1> -->
      <!--    <LoginPage v-if="!$root.store.username"></LoginPage>-->
      <binning
        :Images="this.Images"
        :rows="this.topics"
        :cols="this.pictures"
      ></binning>
      <!-- <img :src="Image" width="150px" height="100px"> -->
      <!-- <img src=this.Image alt="Red dot" /> -->
    </div>
    <div class="submitDiv">
      <button class="submitButton" v-on:click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
import binning from "../Components/binning.vue";
// import secondGame from '../Components/secondGame';
// import LoginPage from "../Pages/LoginPage";

export default {
  name: "FirstGame",
  components: {
    binning,
    // secondGame,
    // LoginPage
  },
  data() {
    return {
      binningImages: binning.data,
        // x: 0,
      Images: [],
      topics: 2,
      pictures: 2,
      Image: "",
    };
  },
  methods: {
      isDisabled(){
          console.log(this.binningImages.imagesCounter());
          if(this.binningImages.imagesCounter() == 0){
              return false;
          }
          return true;
      },
      async submit(){

          const response = await this.axios.post(
        `http://localhost:443/submitRatings`,
        {
            data_ratings: "d"
        }
      );
      console.log(response);
      },
    async uploadImages() {
      // const response2 = await this.axios.get(`http://localhost:443/images/checkCompress`, {});
      // console.log(response2.data);
      // const buffer = Buffer.from(response2.data, "base64");
      // this.Image = "data:image/png;base64, " + response2.data;

      // console.log(this.Image);

      // fs.writeFileSync("new-path.jpg", buffer);

      const response = await this.axios.get(
        `http://localhost:443/images/getImages/${this.topics}/${this.pictures}`,
        {}
      );
      let arr = [];
      response.data.urls.map((img) => {
        let str = "data:image/jpg;base64, " + img;
        arr.push(str);
      });
      this.Images = arr;
    },
  },
  created() {
    //   console.log(this.$emit('imagesCounter', binning));
    console.log(this.binningImages);
    this.uploadImages();
  },
};
</script>
<style scoped>
.submitButton{
    margin-top: 57vh;
    margin-left:45%;
    width:200px;
    /* width: 50vh; */
}
</style>
