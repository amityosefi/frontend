<template>
  <div>
    <div>
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
    <div class="submitDiv">
      <button class="submitButton" v-on:click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
import VueSelectImage from 'vue-select-image'
export default {
  name: "secondGame",
  components:
  {
    VueSelectImage,
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
      height: "250px",
      weight: "250px",
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
        // if (result == 2) window.alert("you've chosen correctly 2 from 2");
        // else if (result == 1) window.alert("you've chosen correctly 1 from 2");
        // else window.alert("you've chosen incorrectly");
        
        this.$refs.selector.resetMultipleSelection(1);
        let app = this.$parent;
        // console.log(app);
        // app.wins.push(result);
        let wins = app.wins;
        wins.push(result);
        let no_runs = app.runs;
        if(no_runs == 4)
        {         
          let score = wins.reduce((x,y)=>x+y);
          let fin_score = (score/8)*100
          window.alert("you scored "+fin_score+"%");
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
</style>
