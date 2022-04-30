<template>
 <div>
  <!-- 5 possible cases:
  1. didnt finish rating
  2. didnt played today and can rate
  3. didnt played today and can not rate because already rate 124 images
  4. played today and can rate
  5. played today and can not rate because already rate 124 images

  rankImages = 72
  numRanked = user ranks
   -->
  
  <!-- case 1 -->
 
    <div v-if="this.$root.store.numRanked < this.$root.store.rankImages">
      <p class="parr">
        hello {{ this.$root.store.fullname }}
      <br />
      <p class="parr">For rating more images please choose: Image Ratings</p>
      <a href="RatePage" class="btn btn-white btn-animate" id="butt5">Continue Ratings</a>
    </div>

  <!-- case 2 -->
    <div v-if="this.$root.store.numRanked >= this.$root.store.rankImages &&
               this.$root.store.numRanked < 124 &&
               this.$root.store.last_time &&
               this.now != this.$root.store.last_time">
      <p class="parr">
        hello {{ this.$root.store.fullname }}
        <br />
        Your last time you played was in {{ this.$root.store.last_time }}
        <br />
        Until now you earned: {{ this.$root.store.user_score }} points
      </p>
      <br />
      <p class="parr">For starting the game please choose: Take me to the game</p>
      <a href="FirstGamePage" class="btn btn-white btn-animate" id="butt5"
        >Take me to the game!</a
      >
      <p class="parr">For rating more images please choose: Image Ratings</p>
      <a href="RatePage" class="btn btn-white btn-animate" id="butt5">Continue Ratings</a>
    </div>

    <!-- case 3 -->
    <div v-if="this.$root.store.numRanked == 124 &&
               this.$root.store.last_time &&
               this.now != this.$root.store.last_time">
      <p class="parr">
        hello {{ this.$root.store.fullname }}
        <br />
        Your last time you played was in {{ this.$root.store.last_time }}
        <br />
        Until now you earned: {{ this.$root.store.user_score }} points
      </p>
      <br />
      <p class="parr">For starting the game please choose: Take me to the game</p>
      <a href="FirstGamePage" class="btn btn-white btn-animate" id="butt5"
        >Take me to the game!</a
      >
    </div>

    <!-- case 4 -->
    <div v-if="this.$root.store.numRanked >= this.$root.store.rankImages &&
               this.$root.store.numRanked < 124 &&
               this.$root.store.last_time &&
               this.now == this.$root.store.last_time">
      <p class="parr">
        hello {{ this.$root.store.fullname }}
        <br />
        Your last time you played was today, you can play again tommorw!
        <br />
        Until now you earned: {{ this.$root.store.user_score }} points
      </p>
      <br />
      <p class="parr">For rating more images please choose: Image Ratings</p>
      <a href="RatePage" class="btn btn-white btn-animate" id="butt5">Continue Ratings</a>
    </div>

    <!-- case 5 -->
    <div v-if="this.$root.store.numRanked == 124 &&
               this.$root.store.last_time &&
               this.now == this.$root.store.last_time">
      <p class="parr">
        hello {{ this.$root.store.fullname }}
        <br />
        Your last time you played was today, you can play again tommorw!
        <br />
        Until now you earned: {{ this.$root.store.user_score }} points
      </p>
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
.parr{
  padding-top: 1%;
  color: black;
  font-size: 2.5ch;
  text-align: center;
}
</style>
