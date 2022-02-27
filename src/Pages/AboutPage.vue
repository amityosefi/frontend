<template>
<div  style="text-align: center; font-style: italic; font-family: 'Blippo, fantasy'">
  <br>
  <br>
  <div style="font-weight: bold; font-size: 20px">
  We are three students that built this project for Prof. Noam Tracktinsky and Dr. Denis Klimov,
  <br>
   who are interested in a research of the field of aesthetics of images.
  <br>
  We study at the Ben-Gurion University, and have a BSc in Software and Information Systems Engineering. 
  <br>

  </div>

  <br/>
  <br/>

<div class="d-flex justify-content-center" style="font-style: normal; font-size: 16px">
<div style="width:320px; margin-right:2%">
  <figure>
    <figcaption style="text-align: center; font-weight: bold;">Daniel Zamanski</figcaption>
    <figcaption style="text-align: center;">daniel.zamanski@gmail.com</figcaption>
  <img v-bind:src="'https://i.ibb.co/tp1zDf5/daniel.jpg'" alt="..." class="img-thumbnail">
</figure>
</div>

<div style="width:350px; margin-right:2%">
  <figure >
    <figcaption style="text-align: center; font-weight: bold;">Amit Yosefi</figcaption>
    <figcaption style="text-align: center;">amit.yosefi@gmail.com</figcaption>
  <img v-bind:src="'https://i.ibb.co/3vXfqMc/amit.jpg'" alt="..." class="img-thumbnail">
</figure>
</div>

<div style="width:305px; margin-right:2%">
  <figure >
    <figcaption style="text-align: center; font-weight: bold;">Shahar Horovitz</figcaption>
    <figcaption style="text-align: center;">shaharvits@gmail.com</figcaption>
  <img v-bind:src="'https://i.ibb.co/cvvLNvK/shahar.jpg'" alt="..." class="img-thumbnail">
</figure>
</div>
</div>

</div>
</template>

<script>
export default {
  name: "AboutPage"
}
</script>

<style scoped>

</style>