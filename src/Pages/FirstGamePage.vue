<template>
  <div>
    <br />
    <div class="ins" v-if="this.flag">
      <Instructions :Text="`Welcome to the First Game! \nIn front of you are ${$root.store.firstGameImages} pictures you have rated previously.\n${$root.store.firstGameImagesSelected} of which you have rated high and the others low, can you guess which ones?`"/>
         
          <div class="d-flex justify-content-center" style="margin-top: 20px;">
        <button
          type="button"
          class="btn btn-outline-danger"
          v-on:click="changeDivs"
        >
          {{this.text}}
        </button>
    </div>
    </div>
  <div v-else>
  <FirstGame  :key="this.key" :Images="this.Images" :best="this.best" ></FirstGame>
</div>


        <!-- <div class="d-flex justify-content-center" style="margin-top: 0px;">
        <button
          type="button"
          class="btn btn-outline-danger"
          v-on:click="changeDivs"
        >
          {{this.text}}
        </button>
    </div> -->
    

  </div>
</template>
<script>
import FirstGame from "../Components/FirstGame.vue";
import Instructions from "../Components/Instructions.vue";

export default {
  name: "FirstGamePage",
  components: {
    FirstGame,
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
      text: "Start game"
    };
  },

  methods: {
    changeDivs(){
      this.flag = !this.flag;
      // if (this.flag)
      //   this.text = 'Back to game';
      // else
      //   this.text = 'Back to instructions';
    },
    async uploadImages() {
      try {      
         console.log("pin be pita");
      console.log("Ranked so far",this.$root.store.numRanked);  
        const response = await this.axios.post(
          `http://localhost:443/images/getSecondGameImages`,
          {
            id:this.$root.store.u_id,
          }
        );
        const arr = response.data.best.concat(response.data.worst);
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
      if(localStorage.numRanked == undefined)
      {
        window.alert("aaaaaaaaaaaaaaaaa")
        localStorage.setItem("numRanked", 0);
        this.$root.store.numRanked = 0;

      }
      window.alert("aaaaaaaaaaaaaaaaa");
      console.log("pin be pita");
      console.log("Ranked so far",this.$root.store.numRanked);
      this.uploadImages();
    },
};
</script>
<style>
.ins{
  /* background-color: lawngreen; */
  margin-bottom: 0px;
}
</style>
