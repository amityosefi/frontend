<template>
  <div id="app">
    <div class="app" v-if="!$root.store.username" >
      <b-navbar toggleable="lg" type="dark"  class="navn">
        <b-navbar-brand :to="{ name: 'HomePage' }">Home page</b-navbar-brand>
        <!-- left side -->
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'About' }">About</b-nav-item>
            <b-nav-item :to="{ name: 'Leaderboard' }">Leaderboard</b-nav-item>
            <b-nav-item v-if="!$root.store.email" :to="{ name: 'login' }">Login</b-nav-item>
            <b-nav-item v-if="!$root.store.email" :to="{ name: 'InstructionsPage' }">Register</b-nav-item>           
            <b-nav-item v-if="$root.store.email" :to="{ name: 'RatePage' }">Rate</b-nav-item>
            <!-- <b-nav-item v-if="$root.store.email" :to="{ name: 'FirstGamePage' }">Game-1</b-nav-item> -->
            <!-- <b-nav-item v-if="$root.store.email" :to="{ name: 'SecondGamePage' }">Game-2</b-nav-item> -->
            <b-nav-item v-if="$root.store.email" :to="{ name: 'ReviewPage' }">Contact us</b-nav-item>
            <b-nav-item v-if="$root.store.email && $root.store.isAdmin" :to="{ name: 'AdminPage' }">Admin</b-nav-item>
          </b-navbar-nav>

          <!-- right side -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="name" v-if="$root.store.fullname"> Hello {{$root.store.fullname}} </b-nav-item>
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
        let Ranked = this.$root.store.RankedImages;
        
        let UnRanked = this.$root.store.unRankedImages;

        let Extras = this.$root.store.extra_pics;
        // if(Extras)
        //   Extras = JSON.parse(Extras);
        // if(Ranked)
        //   Ranked = JSON.parse(Ranked);
        // if(UnRanked)
        //   UnRanked = JSON.parse(Ranked);
        await this.axios.post(this.$root.store.address + `images/save_pics`,{
            user_id:this.$root.store.u_id,
            ranked:Ranked,
            unranked:UnRanked,
            extras:Extras,
        });

        const response = await this.axios.post(
            this.$root.store.address+"logout",
        );
        console.log(response.data)

        
      } catch (error) {
        console.log(error);
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
   /* background-attachment: fixed; */
   /* height: 50%; */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
    overflow: hidden;
  background-size: cover;
  width: 100%;
  min-height: 100vh;

   font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

.navn {
  font-weight: 550;
  background-color: #e2c9af;
  color: #ffffff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: 500;
  /* color: black; */
}


#nav a.router-link-exact-active {
  color: #42b983;
}

.name {
  pointer-events: none;
}

</style>