<template>
 <div>
  <!-- 5 possible cases:
  1. didnt finish rating
  2. didnt played today and can rate
  3. didnt played today and can not rate because already rate 126 images
  4. played today and can rate
  5. played today and can not rate because already rate 126 images

  rankImages = 72
  numRanked = user ranks
   -->
  
  <!-- case 1 -->
 
    <div v-if="localStorage.is_submitted">
      <p class="parr">
        hello {{ this.$root.store.fullname }}
      <br />
      <p class="parr">To participate in the game you must first complete the grading of the pictures.
        <br> Please choose "Continue Ratings"
      </p>
      <a href="#" class="btn btn-white btn-animate" id="butt5" @click="rate">Continue Ratings</a>
    </div>

  <!-- case 2 -->
    <div v-if="this.$root.store.numRanked >= this.$root.store.rankImages &&
               this.$root.store.numRanked < 126 &&
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
      <p class="parr">For starting the game please choose Take me to the game</p>
      <a href="#" class="btn btn-white btn-animate" id="butt5" @click="firstGame"
        >Take me to the game!</a
      >
      <p class="parr">For rating more images please choose Continue Ratings</p>
      <a href="#" class="btn btn-white btn-animate" id="butt5" @click="rate">Continue Ratings</a>
    </div>

    <!-- case 3 -->
    <div v-if="this.$root.store.is_done &&
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
      <a href="#" class="btn btn-white btn-animate" id="butt5" @click="firstGame"
        >Take me to the game!</a
      >
    </div>

    <!-- case 4 -->
    <div v-if="this.$root.store.numRanked >= this.$root.store.rankImages &&
               this.$root.store.numRanked < 126 &&
               this.$root.store.last_time &&
               this.now == this.$root.store.last_time">
      <p class="parr">
        hello {{ this.$root.store.fullname }}
        <br />
        According to our records you have already played today, and according to the rules of the game you can only play again tomorrow.
        <br />
        However, you can continue to rate photos. To do this, please select Continue Ratings.
      </p>
      <br />
      <a href="#" class="btn btn-white btn-animate" id="butt5" @click="rate">Continue Ratings</a>
    </div>

    <!-- case 5 -->
    <div v-if="this.$root.store.is_done &&
               this.$root.store.last_time &&
               this.now == this.$root.store.last_time">
      <p class="parr">
        hello {{ this.$root.store.fullname }}
        <br />
        Until now you earned: {{ this.$root.store.user_score }} points
        <br />
        According to our records you have already played today, and according to the rules of the game you can only play again tomorrow. See you!

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
      this.$router.push("RatePage");
    },
    firstGame() {
      this.$router.push("FirstGamePage");
    },
  },
  created() {
    console.log("numRanked ", this.$root.store.numRanked)
    console.log("numRanked ", this.$root.store.rankImages)
    console.log("now ", this.now)
    console.log("last time ", this.$root.store.last_time)
    console.log("typeof last time ", typeof (this.$root.store.last_time))

  },
};
</script>
<style>
@import "../assets/style.css";

.parr{
  padding-top: 1%;
  color: black;
  font-size: 2.5ch;
  text-align: center;
  /* padding-right: 25%; */
}
#butt5 {
    margin-left: 40%;
}
</style>
