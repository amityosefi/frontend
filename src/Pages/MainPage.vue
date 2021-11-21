<template>
  <div>
    <h1 class="header">Welcome to our image app!</h1>
<!--    <LoginPage v-if="!$root.store.username"></LoginPage>-->
    <binning :Images=this.Images :rows = this.topics :cols = this.pictures></binning>
    <!-- <img :src="Image" width="150px" height="100px"> -->
      <!-- <img src=this.Image alt="Red dot" /> -->
  </div>
</template>


<script>
import Binning from '../Components/binning.vue';
// import LoginPage from "../Pages/LoginPage";

export default {
  name: 'Main',
  components:
  {
    Binning,
    // LoginPage
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

#wrapper
{
  display:flex;
  justify-content: center;
  
  
  
}
.header
{
  display: flex;
  justify-content: center;
  color: rgb(29, 175, 180);
  text-shadow: 1px 2px black;
  font-weight: bold;
}
/*#app*/
/*{*/
/*  text-align: center;*/
/*}*/
.pics
{
  display: flex;
  justify-content: center;
}

/*.card*/
/*{*/
/*  width: 5%;*/
/*  height: 5%;*/
/*  text-align: center;*/
/*  padding: 5px 15px;*/
/*  background-color: #D4F5FD;*/
/*  cursor: pointer;*/
/*  margin-bottom: 5px;*/
/*}*/
</style>