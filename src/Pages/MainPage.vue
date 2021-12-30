<template>
  <div>
    <h1>Main page</h1>
    <LoginPage v-if="!$root.store.username"></LoginPage>
    <FirstGamePage v-else></FirstGamePage>
  </div>
</template>

<script>
import FirstGamePage from "../Pages/FirstGamePage.vue";
import LoginPage from "../Pages/LoginPage";

export default {
  name: "Main",
  components: {
    FirstGamePage,
    LoginPage,
  },
  
  }
</script>
<style scoped></style>
