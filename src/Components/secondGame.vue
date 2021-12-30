<template>
  <div>
    <div>
      <vue-select-image
        :dataImages="this.Images"
        :is-multiple="true"
        :h="height"
        :w="weight"
        :limit="2"
        @onselectmultipleimage="onSelectMultipleImage"
        @onreachlimit="onreachlimit"
      >
      </vue-select-image>
    </div>
    <div class="submitDiv">
      <button class="submitButton" v-on:click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "secondGame",

  props: {
    Images: {
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
      best: [],
    };
  },
  methods: {
    onSelectMultipleImage(selectedImages) {
      console.log(this.Images);
      this.selectedImages = selectedImages;
      return selectedImages;
    },
    onreachlimit() {
      alert("got the limit selected images");
    },
    submit() {
      if (this.selectedImages.length == 2) {
        // console.log("good 2");

        // this.selectedImages.map((x)=>{arr.push(x.id);});
        // console.log(this.selectedImages);
        let result = 0;
        this.best = this.Images.slice(0, 2).map(img => img.id);
        console.log(this.best);
        // console.log(this.selectedImages);
        for (let i = 0; i < this.selectedImages.length; i++) {
          if (this.best.includes(this.selectedImages[i].id)) result += 1;
        }
        if (result == 2) window.alert("you've chosen correctly 2 from 2! you are malic of");
        else if (result == 1) window.alert("you've chosen correctly 1 from 2");
        else window.alert("you've chosen incorrectly - looser!!!!!!");
      } else {
        alert("Need to choose two pictures");
      }
    },
    randomImages() {
      
      const tmp = this.Images;
      console.log(this.Images);
      this.best = this.Images.slice(0, 2).map(img => img.id);
      console.log(this.best);
      this.res = tmp.sort(() => Math.random() - 0.5);
      // console.log(this.Images);
      // console.log(this.res);
    },
  },
  created() {
      this.randomImages();
      console.log(this.Images);
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
