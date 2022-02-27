<template>

    <!-- <div  class="selection">
         <li style="list-style-type: none;"> -->
             <secondgame :key="this.key" :Images="this.Images" :best="this.best" ></secondgame>     
        <!-- </li>
    </div> -->


</template>
<script>
import secondgame from "../Components/secondGame.vue";

export default {
  name: "SecondGamePage",
  components: {
    secondgame,
  },
  data() {
    return {
      Images: [],
      best: [],
      key: 0 ,
      runs: 1,
      wins: [],
    };
  },

  methods: {
    async uploadImages() {
      try {
        console.log("here");
        
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
      console.log("Images:",res);

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
