<template>
  <div>
    <div>
      <vue-select-image
        :dataImages="Images"
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

  props:
  {
      Images:
      {
          type:Array,
          require:true
      }
  },

  data() {
    return {
      // Images: [],
      height: "250px",
      weight: "250px",
      selectedImages: [],
    };
  },
  methods: {

    onSelectMultipleImage(selectedImages) {
      this.selectedImages = selectedImages;
      return selectedImages;
    },
    onreachlimit() {
      alert("got the limit selected images");
    },
    submit() {
      if (this.selectedImages.length == 2) {
        console.log("good 2");
        console.log(this.selectedImages);
      } else {
        alert("Need to choose two pictures");
      }
    },
  },
  created() {
    console.log("created");
    console.log(this.Images);
  },
};
</script>
<style scoped>
@import '../assets/style.css';
.submitButton {
  margin-left: 50%;
}
</style>
