<template>
  <div>
    <br />
    <div v-if="this.flag">
      <Instructions
        :Text="
          `Welcome to the Second Game! \nIn front of other are ${$root.store.firstGameImages} pictures other person rated previously.\n${$root.store.firstGameImagesSelected} of which he/she have rated high and the others low, can you guess which ones?`
        "
      />
    </div>
  <div v-else>
  <SecondGame :other_id="this.other_id" :key="this.key" :Images="this.Images" :best="this.best" ></SecondGame>
</div>
    <br>
    <div class="d-flex justify-content-center">
        <button
          type="button"
          class="btn btn-outline-danger"
          v-on:click="changeDivs"
        >
          {{this.text}}
        </button>
    </div>

  </div>
</template>
<script>
import SecondGame from "../Components/SecondGame.vue";
import Instructions from "../Components/Instructions.vue";

export default {
  name: "SecondGamePage",
  components: {
    SecondGame,
    Instructions,
  },
  data() {
    return {
      Images: [],
      best: [],
      key: 0 ,
      runs: 1,
      wins: [],
      goodImages: [],
      flag: true,
      text: "Start game",
      other_id: undefined,
    };
  },

  methods: {
    changeDivs(){
      this.flag = !this.flag;
      if (this.flag)
        this.text = 'Back to game';
      else
        this.text = 'Back to instructions';
    },
    async uploadImages() {
      try {        
        const response = await this.axios.post(
          `http://localhost:443/images/getSecondGameImagesOtherPerson`,
          {
            id:this.$root.store.u_id,
          }
        );
        this.other_id = response.data.other_id;
        const arr = response.data.ans.best.concat(response.data.ans.worst);
        this.Images = []
        this.best = []
        const res = [];
      arr.map((img) => {
        let str = "data:image/jpg;base64, " + img.src;
        res.push({id: img.id, src:str});
      });
      this.Images = res;
      let best_pics = []
      this.Images.slice(0,2).map((x)=>best_pics.push(x.id));
      this.best = best_pics.slice(0,2);
      let currentIndex = this.Images.length,  randomIndex;

  // While there remain elements to shuffle...
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [this.Images[currentIndex], this.Images[randomIndex]] = [
          this.Images[randomIndex], this.Images[currentIndex]];
      }

      } catch (err) {
        console.log(err.response);
      }
    },
  },
  created() {
      this.uploadImages();
    },
};
</script>
<style>

</style>
