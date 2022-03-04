<template>
  <div>
    <br>
    <div>
     <Instructions :Text="`Welcome to the First Game! \nIn front of you are ${$root.store.firstGameImages} pictures you have rated previously.\n${$root.store.firstGameImagesSelected} of which you have rated high and the others low, can you guess which ones?`"/>
   </div>
    <br><br>
    <div class = "selector">

      <VueSelectImage
        ref="selector"
        :dataImages="this.Images"
        :is-multiple="true"
        :h="height"
        :w="weight"
        :limit="Number(this.$root.store.firstGameImagesSelected)"
        @onselectmultipleimage="onSelectMultipleImage"
        @onreachlimit="onreachlimit"
      >
      </VueSelectImage>
    </div>

<br>
    <div class="d-flex justify-content-center">
<button type="button" class="btn btn-outline-danger" v-on:click="submit">Submit</button>
   </div>
   <br>
  </div>

    <!-- <div class="submitDiv">
      <button class="submitButton" v-on:click="submit">Submit</button>
    </div> -->
  <!-- </div> -->
</template>

<script>
import VueSelectImage from 'vue-select-image'
import Instructions from './Instructions.vue'
export default {
  name: "FirstGame",
  components:
  {
    VueSelectImage,
    Instructions
  },
  props: {
    Images: {
      type: Array,
      require: true,
    },
    best: {
      type: Array,
      require: true,
    },
  },

  data() {
    this.randomImages();
    return {
      height: "180px",
      weight: "320px",
      selectedImages: [],
      // correct_ids: ["4", "6"],
      res: [],
      wins: [],      
    };
  },
  methods: {
    onSelectMultipleImage(selectedImages) {
      // console.log(this.Images);
      this.selectedImages = selectedImages;
      return selectedImages;
    },
    resetMultipleSelection()
    {
      return [];
    },
    onreachlimit() {
      this.$root.toast("warning", "got the limit selected images \r You have to choose up to " + this.$root.store.firstGameImagesSelected + " images.", "warning");
    },
    async submit() {
      let app = this.$parent;
      if (this.selectedImages.length == Number(this.$root.store.firstGameImagesSelected)) {
        let result = 0;
        
        for (let i = 0; i < this.selectedImages.length; i++) {
          if (this.best.includes(this.selectedImages[i].id)){ 
            result += 1;
            app.goodImages.push(this.selectedImages[i].id);
          }
        }

        this.$refs.selector.resetMultipleSelection(1);
        
        let wins = app.wins;
        wins.push(result);
        let no_runs = app.runs;
        if(no_runs == 4)
        {         
          let score = wins.reduce((x,y)=>x+y);
          this.$root.toast("Score", "you scored "+score+" out of " + this.$root.store.firstGameImages, "success");
          app.runs = 0;
          app.wins = [];
          try {
            await this.axios.post("http://localhost:443/images/submitFirstGame", {
              id: this.$root.store.u_id,
              score: score,
              result: app.goodImages,
            });
            app.goodImages = [];
            this.$router.push("/HomePage");  // cahnge to HomePage
          }
          catch (err){
            console.log(err);
          }          
        }
        
        app.runs++;
        await app.uploadImages()
        app.key++;
        
      } else {
        this.$root.toast("warning", "Need to choose " + this.$root.store.selectedImages + " pictures", "warning");
      }
    },
    randomImages() {
      
    }
  },
  created() {
      this.randomImages();
      // console.log(this.Images);
    },
};
</script>
<style scoped>
@import "../assets/style.css";
.submitButton {
  margin-left: 50%;
}

img {
  height: 10px;
  vertical-align: middle;
  border-style: double;
}

.order {
  margin-right: 50px;
}

.selector
{
  display: flexbox;
  flex-direction: row;
  max-width: 1500px;
  margin: 0 auto;
}
</style>
