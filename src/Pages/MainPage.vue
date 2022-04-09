<template>
  <div>
    <div v-if="this.$root.store.last_time && this.now != this.$root.store.last_time">
      <p class="par">
        hello {{ this.$root.store.fullname }}
        <br />
        Your last time you played was in {{ this.$root.store.last_time }}
        <br />
        Until now you earned: {{ this.$root.store.user_score }} points
      </p>
      <br />
      <p class="par">For starting the game please choose: Take me to the game</p>
      <a href="FirstGamePage" class="btn btn-white btn-animate" id="butt2"
        >Take me to the game!</a
      >
      <p class="par">For rating more images please choose: Image Ratings</p>
      <a href="RatePage" class="btn btn-white btn-animate">Image Ratings</a>
    </div>

    <div v-if="!this.$root.store.last_time">
      <p class="par">
        hello {{ this.$root.store.fullname }}
        <br />
        Until now you earned: {{ this.$root.store.user_score }} points
      </p>
      <br />
      <p class="par">For starting the game please choose: Take me to the game</p>
      <a href="FirstGamePage" class="btn btn-white btn-animate" id="butt2"
        >Take me to the game!</a
      >
      <p class="par">For rating more images please choose: Image Ratings</p>
      <a href="RatePage" class="btn btn-white btn-animate">Image Ratings</a>
    </div>

    <div v-if="this.$root.store.last_time && this.now == this.$root.store.last_time">
      <p class="par">
        hello {{ this.$root.store.fullname }}
        <br />
        Your last time you played was today!
        <br />
        Until now you earned: {{ this.$root.store.user_score }} points
      </p>
      <br />
      <p class="par">If you want to play again, Come back tommorw</p>
      <br />
      <p class="par">For rating more images please choose: Image Ratings</p>
      <a href="RatePage" class="btn btn-white btn-animate" id="butt2"
        >Image Ratings</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",

  data() {
    return {
      now:
        new Date().getDate() +
        "-" +
        String(Number(new Date().getMonth()) + 1) +
        "-" +
        new Date().getFullYear(),
    };
  },
  methods: {
    rate() {
      this.$router.push("/RatePage");
    },
    firstGame() {
      this.$router.push("/FirstGamePage");
    },
  },
  created() {
    console.log(this.$root.store.isAdmin)
    console.log(this.$root.store.email && this.$root.store.isAdmin)
  },
};
</script>
<style>
@import "../assets/style.css";

h4 {
  font-size: 4ch;
}
.card-title {
  text-align: center;
}
.par{
  padding-top: 1%;
  color: black;
  font-size: 2.5ch;
  text-align: center;
}
</style>
