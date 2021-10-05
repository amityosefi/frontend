<template >
  <div id="binning"  @dragover.prevent>
    <!-- <b-form @submit.prevent="onRegister">
      <b-button
        type="submit"
        variant="primary"
        style="width:250px;"
        class="ml-5 w-75"
        >Register</b-button
      >
    </b-form> -->
  <draggable  class="drag"  :list="this.Images" group="tasks">
    
    <div  v-for="idx in this.Images" :key="idx"  class="im">
          <Picture  />
    
    </div>
    
    <h1>hello</h1>
  </draggable>
  <!-- <h1 v-else>asdasdasd</h1> -->
  <div class="Row">
    <div  class="Column">
      <draggable  :list="arrGrade1" group="tasks" >
        <div v-for="(image, imageIndex) in arrGrade1" :key="imageIndex" class="bin">
          <img v-bind:src="image" width="85px" height="55px" alt="..">
        </div>
      </draggable>
    </div>

    <div class="Column">
      <draggable :list="arrGrade2" group="tasks" >
        <div v-for="(image, imageIndex) in arrGrade2" :key="imageIndex" class="bin">
          <img v-bind:src="image" width="85px" height="55px" alt="..">
        </div>
      </draggable>
    </div>

    <div class="Column">
      <draggable :list="arrGrade3" group="tasks" >
        <div v-for="(image, imageIndex) in arrGrade3" :key="imageIndex" class="bin">
          <img v-bind:src="image" width="85px" height="55px" alt="..">
        </div>
      </draggable>
    </div>

    <div class="Column">
      <draggable :list="arrGrade4" group="tasks" >
        <div v-for="(image, imageIndex) in arrGrade4" :key="imageIndex" class="bin">
          <img v-bind:src="image" width="85px" height="55px" alt="..">
        </div>
      </draggable>
    </div>

    <div class="Column">
      <draggable :list="arrGrade5" group="tasks" >
        <div v-for="(image, imageIndex) in arrGrade5" :key="imageIndex" class="bin">
          <img v-bind:src="image" width="85px" height="55px" alt="..">
        </div>
      </draggable>
    </div>

    <div class="Column">
      <draggable :list="arrGrade6" group="tasks" >
        <div v-for="(image, imageIndex) in arrGrade6" :key="imageIndex" class="bin">
          <img v-bind:src="image" width="85px" height="55px" alt="..">
        </div>
      </draggable>
    </div>

    <div class="Column">
      <draggable :list="arrGrade7" group="tasks" >
        <div v-for="(image, imageIndex) in arrGrade7" :key="imageIndex" class="bin">
          <img v-bind:src="image" width="85px" height="55px" alt="..">
        </div>
      </draggable>
    </div>

    <div class="Column">
      <draggable :list="arrGrade8" group="tasks" >
        <div v-for="(image, imageIndex) in arrGrade8" :key="imageIndex" class="bin">
          <img v-bind:src="image" width="85px" height="55px" alt="..">
        </div>
      </draggable>
    </div>

    <div class="Column">
      <draggable :list="arrGrade9" group="tasks" >
        <div v-for="(image, imageIndex) in arrGrade9" :key="imageIndex" class="bin">
          <img v-bind:src="image" width="85px" height="55px" alt="..">
        </div>
      </draggable>
    </div>

    <div class="Column">
      <draggable :list="arrGrade10" group="tasks" >
        <div v-for="(image, imageIndex) in arrGrade10" :key="imageIndex" class="bin">
          <img v-bind:src="image" width="85px" height="55px" alt="..">
        </div>
      </draggable>
    </div>
  </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Picture from "./Picture.vue"
const axios = require("axios");
const api_domain = "http://localhost:3001";
const categories = 3;
const pics = 4;
export default {
  name: 'binning',
  components: {
    draggable,
    Picture,
  },

  data() {
    return {
      Images: [],
      arrGrade1: [],
      arrGrade2: [],
      arrGrade3: [],
      arrGrade4: [],
      arrGrade5: [],
      arrGrade6: [],
      arrGrade7: [],
      arrGrade8: [],
      arrGrade9: [],
      arrGrade10: [],
      source:"www.wanderingowl.com/wp-content/uploads/2020/09/blog_images_aurora_sunset_love.jpg",
    }
  },
  methods: {
     uploadImages: async function() {
      let src = "https://booking.pvtravels.com/public/files/PERUANOS/Huaraz/HUA_3.jpg";
      this.axios.defaults.withCredentials = true;
      console.log("hello")
      let size = await axios.get(`${api_domain}/images/${categories}/${pics}`,{});
      size = size.data.urls;
      console.log(size.length);
      for(var i = 0 ; i <size.length ; i++)
      {
        this.Images[i] = src;
      }
    },
    

  },
  created: async function() {
    let src =`www.wanderingowl.com/wp-content/uploads/2020/09/blog_images_aurora_sunset_love.jpg`;
      this.axios.defaults.withCredentials = true;
      console.log(src)
      let size = await axios.get(`${api_domain}/images/${categories}/${pics}`,{});
      size = size.data.urls;
      console.log(size.length);
      for(var i = 0 ; i <size.length ; i++)
      {
        this.Images[i] = i;
      }
  }
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #fff0f0;
}


.Row {
  position: absolute;
  top: 50vh;
  right: 30vh;
  display: table;
  width: 70%;
  table-layout: fixed;
  border-spacing: 10px;
  height: 3vh;
  
}
.Column {
  vertical-align: center;
  align-items: baseline;
  text-align: center;
  display: table-cell;
  border-bottom-style: solid;
  border-bottom-color: black;
  border-left-style: solid;
  border-right-style: solid;
  border-left-color: black;
  border-right-color: black;
  height: 5vh;
}

.im {
  text-align: center;
  font-size: large;
  cursor: pointer;
  float: left;
  margin-left: 5px;
  
}
.drag
{
  display: flex;
  justify-content: center;
 
}
.bin {
  cursor: pointer;
  margin-top: 2px;
  
}

/* .pic:hover
{
  height:50%;
  width:50%;
  overflow:-moz-hidden-unscrollable;
} */
</style>