<template>
  <div>
    <LoginPage v-if="!$root.store.email"></LoginPage>
    <RatePage v-else></RatePage>
  </div>
</template>

<script>
import RatePage from "../Pages/RatePage.vue";
import LoginPage from "../Pages/LoginPage";

export default {
  name: "Main",
  components: {
    RatePage,
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
