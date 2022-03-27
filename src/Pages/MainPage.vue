<template>
  <div>
    <b-card
      overlay
      img-src="https://picsum.photos/id/1015/6000/4000"
      img-alt="Card Image"
      text-variant="white"
    >
      <b-card-text v-if="!this.$root.store.user_score">
        <p>
          hello {{this.$root.store.fullname}}
          <br>
          Lets rate some images
        </p>
        <b-button href="RatePage">Start rate pictures</b-button>
      </b-card-text>

      <b-card-text v-if="this.$root.store.user_score && this.now != this.$root.store.last_time">
        <p>
          hello {{this.$root.store.fullname}}
          <br>
          Your last time you played was in {{this.$root.store.last_time }}
          <br>
          Until now you earn: {{ this.$root.store.user_score }} points</p>
        <br />
        <p>For starting the game please chhose: Take me to the game</p>
        <b-button href="FirstGamePage">Take me to the game!</b-button>
        <p>For rating more images please chhose: Image Ratings</p>
        <b-button href="RatePage">Image Ratings</b-button>
      </b-card-text>
      <b-card-text v-if="this.$root.store.user_score && this.now == this.$root.store.last_time">
        <p>
          hello {{this.$root.store.fullname}}
          <br>
          Your last time you played was today!
          <br>
          Until now you earn: {{ this.$root.store.user_score }} points</p>
        <br />
        <p>If you want to play again, Come back tommorw</p>
        <br>
        <p>For rating more images please chhose: Image Ratings</p>
        <b-button href="RatePage">Image Ratings</b-button>
      </b-card-text>
    </b-card>
    <!-- <RatePage v-if="!$root.store.process"></RatePage> -->
    <!-- <FirstGamePage v-else></FirstGamePage> -->
  </div>
</template>

<script>
// import RatePage from "../Pages/RatePage.vue";
// import FirstGamePage from "../Pages/FirstGamePage";
// import SecondGamePage from "../Pages/SecondGamePage";

export default {
  name: "MainPage",
  components: {
    // RatePage,
    // FirstGamePage,
    // SecondGamePage,
  },
  data() {
    return {
      now: new Date().getDate()+'-'+String(Number(new Date().getMonth())+1)+'-'+new Date().getFullYear(),
    };
  },
  methods: {
    rate() {
      this.$router.push("/RatePage");
    },
    firstGame() {
      this.$router.push("/FirstGamePage");
    },
    // secondGame() {
    //   this.$router.push("/SecondGamePage");
    // },
  },
  created(){
    console.log(new Date().getDate()+'-'+String(Number(new Date().getMonth())+1)+'-'+new Date().getFullYear())
  }
};
</script>
<style scoped>
h4 {
  font-size: 4ch;
}
.card-title {
  text-align: center;
}
p{
  padding-top: 1%;
  color: white;
  font-size: 2.5ch;
  text-align: center;
}
</style>
