<template>
  <div id="app">
    <div class="app" v-if="!$root.store.username" >
      <b-navbar toggleable="lg" type="dark"  class="navn">
        <b-navbar-brand :to="{ name: 'Main' }">Home page</b-navbar-brand>
        <!-- left side -->
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'About' }">About</b-nav-item>
            <b-nav-item v-if="!$root.store.email" :to="{ name: 'login' }">Login</b-nav-item>
            <b-nav-item v-if="!$root.store.email" :to="{ name: 'register' }">Register</b-nav-item>           
            <b-nav-item v-if="$root.store.email" :to="{ name: 'FirstGame' }">Rate</b-nav-item>
            <b-nav-item v-if="$root.store.email" :to="{ name: 'SecondGamePage' }">Play</b-nav-item>
            <!-- <b-nav-item v-on:click="Logout">Log Out</b-nav-item> -->
          </b-navbar-nav>
          <!-- right side -->
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-item :to="{ name: 'login' }">Login</b-nav-item>
            <b-nav-item :to="{ name: 'register' }">Register</b-nav-item>
            <b-nav-item :to="{ name: 'About' }">About</b-nav-item> -->
            <b-nav-item v-if="$root.store.email" v-on:click="Logout">Log Out</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {

    };
  },
  methods: {
    
    async Logout() {
      try {
        console.log("good")
        const response = await this.axios.post(
            "http://localhost:443/logout",
        );
        console.log(response.data)
      } catch (error) {
        console.log("there was a problem in the logout from server");
      }
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");
      this.axios.defaults.withCredentials = false;
      this.$router.push("/").catch(() => {
        // this.$forceUpdate();
      });
    }
  },
}

</script>

<!--<style lang="scss">-->
<!--@import "./scss/form-style.scss";-->

<style>
.app {
     background-image: url("view5.jpg");
   background-attachment: fixed;
   height: 50%;
  background-repeat: no-repeat;
  background-size: cover;

   font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

.navn {
  font-weight: 550;
  background-color: #e4c8b1;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: 500;
}


#nav a.router-link-exact-active {
  color: #42b983;
}

</style>