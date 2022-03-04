<template>

    <!-- <div  class="selection">
         <li style="list-style-type: none;"> -->
             <FirstGame :key="this.key" :Images="this.Images" :best="this.best" ></FirstGame>     
        <!-- </li>
    </div> -->


</template>
<script>
import FirstGame from "../Components/FirstGame.vue";

export default {
  name: "FirstGamePage",
  components: {
    FirstGame,
  },
  data() {
    return {
      Images: [],
      best: [],
      key: 0 ,
      runs: 1,
      wins: [],
      goodImages: [],
    };
  },

  methods: {
    async uploadImages() {
      try {        
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
      this.uploadImages();
    },
};
</script>
<style>

</style>
