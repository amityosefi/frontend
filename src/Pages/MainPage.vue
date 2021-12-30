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
  
  }
</script>
<style scoped>

</style>