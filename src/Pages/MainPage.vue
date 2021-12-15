<template>
  <div>
    <h1>Second game</h1>
    <!-- <h1 class="header">Welcome to our image app!</h1> -->
<!--    <LoginPage v-if="!$root.store.username"></LoginPage>-->
<!--    <binning v-else></binning>-->
    <!-- <binning></binning> -->
    <secondGame :Images="Images" />
  </div>
</template>


<script>
import secondGame from '../Components/secondGame';
// import LoginPage from "../Pages/LoginPage";

export default {
  name: 'Main',
  components:
  {
    secondGame,
    // LoginPage
  },
  data() {
      return {
        Images: [],
      }
    },
    methods: {
      viewPictures() {
      this.Images[0] = {
        id: 0,
        src:
          "https://booking.pvtravels.com/public/files/PERUANOS/Huaraz/HUA_3.jpg",
      };
      this.Images[1] = {
        id: 1,
        src:
          "https://booking.pvtravels.com/public/files/PERUANOS/Huaraz/HUA_3.jpg",
      };
      this.Images[2] = {
        id: 2,
        src:
          "https://booking.pvtravels.com/public/files/PERUANOS/Huaraz/HUA_3.jpg",
      };
      this.Images[3] = {
        id: 3,
        src:
          "https://booking.pvtravels.com/public/files/PERUANOS/Huaraz/HUA_3.jpg",
      };
      this.Images[4] = {
        id: 4,
        src:
          "https://booking.pvtravels.com/public/files/PERUANOS/Huaraz/HUA_3.jpg",
      };
      this.Images[5] = {
        id: 5,
        src:
          "https://booking.pvtravels.com/public/files/PERUANOS/Huaraz/HUA_3.jpg",
      };
      this.Images[6] = {
        id: 6,
        src:
          "https://booking.pvtravels.com/public/files/PERUANOS/Huaraz/HUA_3.jpg",
      };
      this.Images[7] = {
        id: 7,
        src:
          "https://booking.pvtravels.com/public/files/PERUANOS/Huaraz/HUA_3.jpg",
      };
      
    },

  },
  created(){
    this.viewPictures();
  },
}

</script>
<style>

</style>