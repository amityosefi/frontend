<template>
  <div>
    <h1 class="header">Welcome to our image app!</h1>
<!--    <LoginPage v-if="!$root.store.username"></LoginPage>-->
    <binning :Images=this.Images></binning>
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
        Images: []
      }
    },
    methods: {
        async uploadImages() {

            const response = await this.axios.get(`http://localhost:443/images/getImages/7/6`, {});
            this.Images = response.data.urls;
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