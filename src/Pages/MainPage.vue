<template>
  <div>
    <h1>Main page</h1>
      <LoginPage v-if="!$root.store.username"></LoginPage>
      <!-- <FavoriteGames v-else></FavoriteGames> -->
  </div>
</template>


<script>
// import FirstGamePage from '../Pages/FirstGamePage.vue';
import LoginPage from "../Pages/LoginPage";

export default {
  name: 'Main',
  components:
  {
    // FirstGamePage
    LoginPage
  },
  data() {
      return {
        Images: [],
        topics: 6,
        pictures: 7,
        Image: "",
      }
    },
    methods: {
        async uploadImages() {

              // const response2 = await this.axios.get(`http://localhost:443/images/checkCompress`, {});
              // console.log(response2.data);
              // const buffer = Buffer.from(response2.data, "base64");
              // this.Image = "data:image/png;base64, " + response2.data;
              
              // console.log(this.Image);

              // fs.writeFileSync("new-path.jpg", buffer);

            const response = await this.axios.get(`http://localhost:443/images/getImages/${this.topics}/${this.pictures}`, {});
            let arr = [];
            response.data.urls.map((img)=>
            {
              let str = "data:image/jpg;base64, " + img;
              arr.push(str);
            })
            this.Images = arr;
     }
      
    },
    created() {
      this.uploadImages();
    }
  }
</script>
<style scoped>

</style>