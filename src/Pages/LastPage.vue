<template>
  <div>
    <p class="parr">
      hello {{ this.$root.store.fullname }}
      <br />
      Game Over! You earned {{this.$root.store.today_score}} points out of {{4*this.$root.store.firstGameImagesSelected}} today. See you tomorrow!
      <br />
      Until now you earned: {{ this.$root.store.user_score }} points
    </p>
    <p class="parr">For starting the game please choose: Take me to the game</p>
      <a href="#" class="btn btn-white btn-animate" id="butt5" @click="contactPage"
        >Take me to the game!</a
      >
    <br />
  </div>
</template>

<script>
export default {
  name: "LastPage",

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
    contactPage() {
      this.$router.push("RatePage");
    },
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
#butt5 {
  margin-left: 40%;
}
</style>
