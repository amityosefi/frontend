<template >
<div class="wrapper">
<div class= "div">
    <h1 class="header">Instructions:</h1>
    <p class="content" style="font-weight: bold; font-size: 20px">{{this.text}}</p>
</div> 
</div>
</template>
<script>
export default {
  name: "Instructions:",
  
  props: {
    Text: {
      type: String,
      require: true,
    },
    
  },

  data() {
      return {
          text: "asdasd"
      };
    
  },
  methods: {
  },
  created()
  {
      this.text = this.$props.Text
  }
};
</script>
<style>
.div
{
    background-color: beige;
    width: 30%;
    height: fit-content;
    box-shadow: 1px 1px 1px 1px black;
    
}

.header
{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
    text-shadow: 1px 1px #599e93;
    margin-left:5%;
}
.wrapper
{
    display: flex;
    justify-content: center;
    margin:5px;
    
}
.content
{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
    text-shadow: 1px 1px #599e93;
    margin-left:5%;
}
</style>
