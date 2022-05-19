<template>
  <div>
    <!-- 5 possible cases:
  1. didnt finish rating
  2. didnt played today and can rate - good
  3. didnt played today and can not rate because already rate 126 images
  4. played today and can rate - good
  5. played today and can not rate because already rate 126 images

  rankImages = 72
  numRanked = user ranks
   -->

    <!-- case 1 -->

    <div v-if="!this.submitted">
      <p class="parr">Hello {{ this.$root.store.fullname }}
        <br />
        To participate in the game you must first complete the grading of the
        pictures.
        <br />
        Please choose "Continue Ratings"
      <br><br>
      <a href="#" class="btn btn-white btn-animate" @click="rate"
        >Continue Ratings</a
      >
      </p>
    </div>

    <!-- case 2 -->
    <div
      v-if="
        !this.is_done &&
          this.$root.store.last_time &&
          this.now != this.$root.store.last_time
      "
    >
      <div class="parr">
        Hello {{ this.$root.store.fullname }}
        <br />
        <div v-if="this.last_date == 'never'">You didnt play yet</div>
        <div v-else>Your last time you played was in {{ this.last_date }}</div>
        Until now you earned: {{ this.$root.store.user_score }} points
             <br />
      <br />
        For starting the game please choose Take me to the game
      <br /><br>
      <a
        href="#"
        class="btn btn-white btn-animate"
        @click="firstGame"
        >Take me to the game!</a
      >
      </div>
      <br>
      <p class="parr">For rating more images please choose Continue Ratings
        <br /><br>
      <a href="#" class="btn btn-white btn-animate" @click="rate"
        >Continue Ratings</a
      >
      </p>
    </div>

    <!-- case 3 -->
    <div
      v-if="
        this.is_done &&
          this.$root.store.is_done &&
          this.now != this.$root.store.last_time
      "
    >
      <div class="parr">
        Hello {{ this.$root.store.fullname }}
        <br />
        <div v-if="this.last_date == 'never'">You didnt play yet</div>
        <div v-else>Your last time you played was in {{ this.last_date }}</div>
        <br />
        Until now you earned: {{ this.$root.store.user_score }} points
      <br />
        For starting the game please choose: Take me to the game
        <br><br>
      <a
        href="#"
        class="btn btn-white btn-animate"
        @click="firstGame"
        >Take me to the game!</a
      >
      </div>
    </div>

    <!-- case 4 -->
    <div
      v-if="
        !this.is_done &&
          this.$root.store.last_time &&
          this.now == this.$root.store.last_time
      "
    >
      <p class="parr">
        Hello {{ this.$root.store.fullname }}
        <br />
        According to our records you have already played today, and according to
        the rules of the game you can only play again tomorrow.
        <br />
        However, you can continue to rate photos. To do this, please select
        Continue Ratings.
      
      <br /><br />
      <a href="#" class="btn btn-white btn-animate" @click="rate"
        >Continue Ratings</a
      >
      </p>
    </div>

    <!-- case 5 -->
    <div
      v-if="
        this.is_done &&
          this.$root.store.is_done &&
          this.$root.store.last_time &&
          this.now == this.$root.store.last_time
      "
    >
      <p class="parr">
        Hello {{ this.$root.store.fullname }}
        <br />
        Until now you earned: {{ this.$root.store.user_score }} points
        <br />
        According to our records you have already played today, 
        <br>and according to
        the rules of the game you can only play again tomorrow. 
        <br>
        See you!
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
      submitted: true,
      is_done: true,
      last_date: "never"
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
    if (localStorage.is_submitted == undefined || !localStorage.is_submitted) {
      this.submitted = false;
    }
    console.log(this.submitted);

    if (localStorage.is_done == undefined || !localStorage.is_done) {
      this.is_done = false;
    }
    if (this.$root.store.last_time){
      this.last_date = "never";
    }
  },
};
</script>
<style>
@import "../assets/style.css";

.parr {
  padding-top: 1%;
  color: black;
  font-size: 2.5ch;
  text-align: center;
  /* padding-right: 25%; */
}
/* #butt5 {
  margin-left: 43%;
} */
</style>
