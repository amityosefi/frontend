<template >
<div>
<!-- <div class= "div">
    <h1 class="header">Instructions</h1>
    <p class="content" style="font-weight: bold; font-size: 20px; margin-bottom: 0px;">{{this.text}}</p>
</div>  -->
    <b-modal v-model="this.Show" title="Instructions">
        <b-container fluid>
        {{this.$props.Text}}
        </b-container>

        <template #modal-footer>
        <div class="w-100">
            <b-button variant="primary" size="sm" class="float-right" @click="setShow">
            Close
            </b-button>
        </div>
        </template>
    </b-modal>
</div>
</template>
<script>
export default {
  name: "Modal",
  
  props: {
    Text: {
      type: String,
      require: true,
    },
  },

  data() {
      return {
          Show: false
      }
  },
  methods: {
      setShow() {
          this.Show = !this.Show;
      },
  },
};
</script>
<style>
/* .div
{
    padding: 20px;
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
} */

</style>
