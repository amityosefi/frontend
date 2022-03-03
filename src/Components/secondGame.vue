<template>
  <div>
    <br><br>
    <div class = "selector">

      <VueSelectImage
        ref="selector"
        :dataImages="this.Images"
        :is-multiple="true"
        :h="height"
        :w="weight"
        :limit="2"
        @onselectmultipleimage="onSelectMultipleImage"
        @onreachlimit="onreachlimit"
      >
      </VueSelectImage>
    </div>

<br><br>
    <div class="d-flex justify-content-center">
<button type="button" class="btn btn-outline-danger" v-on:click="submit">Submit</button>
   </div>
   <div>
     <instructions :Text="'Welcome to the First Game! \nIn front of you are 8 pictures you have rated previously\n2 of which you have rated high and the others low, can you guess which ones?'"/>
   </div>
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
  name: "secondGame",
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
      alert("got the limit selected images");
    },
    async submit() {
      if (this.selectedImages.length == 2) {
        let result = 0;
        
        console.log(this.best);
        for (let i = 0; i < this.selectedImages.length; i++) {
          console.log(this.selectedImages[i].id);
          if (this.best.includes(this.selectedImages[i].id)) result += 1;
        }
        
        
        this.$refs.selector.resetMultipleSelection(1);
        let app = this.$parent;
        let wins = app.wins;
        wins.push(result);
        let no_runs = app.runs;
        if(no_runs == 4)
        {         
          let score = wins.reduce((x,y)=>x+y);
          this.$root.toast("Score", "you scored "+score+" out of 8", "success");
          app.runs = 0;
          app.wins = []
        }
        
        app.runs++;
        await app.uploadImages()
        app.key++;
        
      } else {
        window.alert("Need to choose two pictures");
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
