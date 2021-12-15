<template>
<div>
  <img :src="require('./assets/products-images/' +props.item.name)">

</div>
</template>

<script>
export default {
  name: "AllPictures",

  created() {

  },
  data() {
    return {
      form: {
        select: '',
      },
      selects: [{text: 'Select One', value: null}, '6', '8', '9', '10'],
      show: true,
      ImageArr: []
    }
  },
  methods: {
    async reloafImages(){
      try{
        await this.axios.get("http://localhost:3001/images/2/3",);

      } catch (error) {
        console.log("there is problem");
      }
    }
  }
}
</script>

<style scoped>

</style>