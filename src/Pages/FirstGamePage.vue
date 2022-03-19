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
      text: "Start game",
      allImages: [],
      allImagesId: [],
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
    shuffleArr(array){
      let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      this.Images = array;
    },
    async uploadImages() {
      try {        
        const response = await this.axios.post(
          `http://localhost:443/images/getSecondGameImages`,
          {
            id:this.$root.store.u_id,
          }
        );
        const arr = response.data.best.concat(response.data.worst); // best: 8, worst: 24 by default
        const res = [];
        arr.map((img) => {
          let str = "data:image/jpg;base64, " + img.src;
          res.push({id: img.id, src:str});
        });
        this.allImages = res;
        this.allImagesId = this.allImages.map(image => image.id);
        const first_iteration = this.allImages.slice(0,2).concat(this.allImages.slice(8,14));
        this.shuffleArr(first_iteration);
        this.best = (this.allImages.slice(0,8)).map((x)=>x.id);

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
.ins{
  /* background-color: lawngreen; */
  margin-bottom: 0px;
}
</style>
