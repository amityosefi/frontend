<template>
  <div>
    <LoginPage v-if="!$root.store.email"></LoginPage>
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
  methods:
  {
    
    
  },
  created()
  {
    
  
  }
}
</script>
<style scoped></style>
