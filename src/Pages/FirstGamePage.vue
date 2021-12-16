<template>
  <div>
    <div>
      <h1>First game</h1>
      <binning
        :Images="this.Images"
        :rows="this.topics"
        :cols="this.pictures"
      ></binning>
      <!-- <img :src="Image" width="150px" height="100px"> -->
      <!-- <img src=this.Image alt="Red dot" /> -->
    </div>
    <div class="submitDiv">
      <button
        id="terms"
        class="submitButton"
        v-on:click="submit"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import binning from "../Components/binning.vue";

export default {
  name: "FirstGame",
  components: {
    binning,
  },
  data() {
    return {
      Images: [],
      topics: 2,
      pictures: 2,
      Image: "",
    };
  },

  methods: {

    async submit() {
        console.log(this.$children[0].imagesCounter());
        if (this.$children[0].imagesCounter().length != 4){
            alert("Need to rank all images");
        }
        else{
            console.log(this.$children[0].imagesCounter());
        }
      //   console.log(this.fromChildarrGrade10.length);

      //       const response = await this.axios.post(
      //     `http://localhost:443/submitRatings`,
      //     {
      //         data_ratings: "d"
      //     }
      //   );
      //   console.log(response);
    },
    async uploadImages() {
      // const response2 = await this.axios.get(`http://localhost:443/images/checkCompress`, {});
      // console.log(response2.data);
      // const buffer = Buffer.from(response2.data, "base64");
      // this.Image = "data:image/png;base64, " + response2.data;

      // console.log(this.Image);

      // fs.writeFileSync("new-path.jpg", buffer);

      const response = await this.axios.get(
        `http://localhost:443/images/getImages/${this.topics}/${this.pictures}`,
        {}
      );
      let arr = [];
      response.data.urls.map((img) => {
        let str = "data:image/jpg;base64, " + img;
        arr.push(str);
      });
      this.Images = arr;
    },
  },

  created() {
    this.uploadImages();
  },
};
</script>
<style scoped>
.submitButton {
  margin-top: 57vh;
  margin-left: 45%;
  width: 200px;
  /* width: 50vh; */
}
</style>
