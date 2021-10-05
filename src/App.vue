<template>
  <div id="app">
    <div class="app" v-if="!$root.store.username" >
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand :to="{ name: 'main' }">Home page</b-navbar-brand>
        <!-- left side -->
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'login' }">login</b-nav-item>
            <b-nav-item :to="{ name: 'register' }">register</b-nav-item>
            <b-nav-item :to="{ name: 'About' }">About</b-nav-item>
            <b-nav-item v-on:click="Logout">Log Out</b-nav-item>
          </b-navbar-nav>
          <!-- right side -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item :to="{ name: 'login' }">Login</b-nav-item>
            <b-nav-item :to="{ name: 'register' }">Register</b-nav-item>
            <b-nav-item :to="{ name: 'About' }">About</b-nav-item>
            <b-nav-item v-on:click="Logout">Log Out</b-nav-item>
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
  methods: {
    async Logout() {
      try {
        const response = await this.axios.post(
            "http://localhost:3001/Logout",
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
  }
}

</script>

<!--<style lang="scss">-->
<!--@import "./scss/form-style.scss";-->

<style>
.app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>