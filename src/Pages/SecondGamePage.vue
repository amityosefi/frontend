<template>
  <secondgame :Images="this.Images"></secondgame>
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
    };
  },

  methods: {
    async uploadImages() {
      try {
        const response = await this.axios.get(
          `http://localhost:443/images/getSecondGameImages`,
          {}
        );
        const arr = response.data.best.concat(response.data.worst);
        const res = [];
      arr.map((img) => {
        let str = "data:image/jpg;base64, " + img.src;
        res.push({id: img.id, src:str});
      });
      this.Images = res;
      console.log(this.Images);

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
<style></style>
