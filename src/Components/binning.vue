<template>
<div id="binning" @dragover.prevent>
  <br><br>
    <div  class="selection">
      <viewer ref="viewer" :images="listLocal" rebuild class="viewer" @inited="inited">
      <draggable class="im" @dragend="remove(item)" :list="listLocal" group="tasks">
         <li style="list-style-type: none;" v-for="(Image,idx) in listLocal" :key="idx">      
          
          <Picture :link="Image.src" :id="Image.id" :draggable="false" />
        </li>
       </draggable>
    </viewer>   
    </div>
      <!-- <img class="pic" v-bind:src="image" width="150px" height="100px" alt=".."> -->
   <br><br><br> 
  
  <div class="bins">
  <div class="Row">
    <div class="Column">
      <draggable  :list="arrGrade1" group="tasks" >
        <div v-for="image in arrGrade1" :key="image.id" class="bin">
          <!-- <img v-bind:src="image" width="85px" height="55px" alt=".."> -->
          <Picture :link ="image.src" :id="image.id" :draggable="true"/>
        </div>
      </draggable>
    </div>

    <div class="Column">
      <draggable :list="arrGrade2" group="tasks" >
        <div v-for="(image, imageIndex) in arrGrade2" :key="imageIndex" class="bin">
          <Picture :link ="image.src" :id="image.id" :draggable="true"/>
        </div>
      </draggable>
    </div>

    <div class="Column">
      <draggable :list="arrGrade3" group="tasks" >
        <div v-for="(image, imageIndex) in arrGrade3" :key="imageIndex" class="bin">
          <Picture :link ="image.src" :id="image.id" :draggable="true"/>
        </div>
      </draggable>
    </div>

    <div class="Column">
      <draggable :list="arrGrade4" group="tasks" >
        <div v-for="(image, imageIndex) in arrGrade4" :key="imageIndex" class="bin">
          <Picture :link ="image.src" :id="image.id" :draggable="true"/>
        </div>
      </draggable>
    </div>

    <div class="Column">
      <draggable :list="arrGrade5" group="tasks" >
        <div v-for="(image, imageIndex) in arrGrade5" :key="imageIndex" class="bin">
          <Picture :link ="image.src" :id="image.id" :draggable="true"/>
        </div>
      </draggable>
    </div>

    <div class="Column">
      <draggable :list="arrGrade6" group="tasks" >
        <div v-for="(image, imageIndex) in arrGrade6" :key="imageIndex" class="bin">
          <Picture :link ="image.src" :id="image.id" :draggable="true"/>
        </div>
      </draggable>
    </div>

    <div class="Column">
      <draggable :list="arrGrade7" group="tasks" >
        <div v-for="(image, imageIndex) in arrGrade7" :key="imageIndex" class="bin">
          <Picture :link ="image.src" :id="image.id" :draggable="true"/>
        </div>
      </draggable>
    </div>

    <div class="Column">
      <draggable :list="arrGrade8" group="tasks" >
        <div v-for="(image, imageIndex) in arrGrade8" :key="imageIndex" class="bin">
          <Picture :link ="image.src" :id="image.id" :draggable="true"/>
        </div>
      </draggable>
    </div>

    <div class="Column">
      <draggable :list="arrGrade9" group="tasks" >
        <div v-for="(image, imageIndex) in arrGrade9" :key="imageIndex" class="bin">
          <Picture :link ="image.src" :id="image.id" :draggable="true"/>
        </div>
      </draggable>
    </div>

    <div class="Column">
      <draggable :list="arrGrade10" group="tasks" >
        <div v-for="(image, imageIndex) in arrGrade10" :key="imageIndex" class="bin">
          <Picture :link ="image.src" :id="image.id" :draggable="true"/>
        </div>
      </draggable>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Picture from './Picture.vue'
// import 'viewerjs/dist/viewer.css'
// import VueViewer from 'v-viewer'
// import Vue from 'vue'
// Vue.use(VueViewer)
import 'viewerjs/dist/viewer.css'
import { component as Viewer } from "v-viewer"
export default {
  name: 'binning',
  components: {
    Viewer,
    draggable,
    Picture,
  },

  data() {
    return {
      index: 0 ,
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
    }
  },
  props: {
    Images: {
      require: true,
      type: Array
    },
    rows:
    {
      require: true,
      type: Number
    },
    cols:
    {
      require: true,
      type: Number
    }
  },
  model: {
        prop: 'Images',
        event: 'listchange'
    },
  computed: {
        listLocal: {
            get: function() {
                return this.Images;
            },
            set: function(value) {
                this.$emit('listchange', value)
            }
        },
        sizeFull:function()
        {
          return this.arrGrade1.length + this.arrGrade2.length + this.arrGrade3.length + this.arrGrade4.length + this.arrGrade5.length + this.arrGrade6.length + this.arrGrade7.length + this.arrGrade8.length + this.arrGrade9.length + this.arrGrade10.length;
        }
    },
  methods: {
    inited (viewer) {
      this.$viewer = viewer
    },
    // show () {
    //   this.$viewer.show()
    // },
    rating(Arr,ratings)
    {
      
      let arr = []
      if(Arr.length == 0)
        return null
      for(const img in Arr)
      {
        let pic =Arr[img];
        arr.push({"picId":pic.id,"rating":ratings})
      }
      return arr;

    },
    ratingAll()
    {
      let arr = [this.arrGrade1,this.arrGrade2,this.arrGrade3,this.arrGrade4,this.arrGrade5,this.arrGrade6,this.arrGrade7,this.arrGrade8,this.arrGrade9,this.arrGrade10];
      let res = [];
      
      
      for( var i = 0 ; i < arr.length; i++)
      {
        let temp = arr[i];
        temp = this.rating(temp,i+1);
        if(temp!=null)
        {
          
          for(const dict in temp)
          {
            
            res.push(temp[dict]);
          }
        }
      }
      
      return res;
    }
  },

  created() {
    
    
  },
  
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.selection
{
  display: block;
  
}
body {
  background-color: #fff0f0;
}
/* .display
{
  height:100px;
  overflow: scroll;
} */

.Row {
  /* position:absolute;
  top: 55vh; */
  margin-left:15%;
  display: table;
  width:70%;
  table-layout: fixed;
  
  
  
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
  
  width:70%;
  max-height: 400px;
  overflow: scroll;
  justify-self: center;
  margin-bottom: 3%;
  margin-left:auto;
  margin-right:auto;
  display: flex;
  flex-wrap: wrap;
  border-spacing: 10px;
 
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
.break
{
  flex-basis: 100%;
  height:0;
}
.bins
{
  align-items: center;
}
/* .pic:hover
{
  height:50%;
  width:50%;
  overflow:-moz-hidden-unscrollable;
} */
</style>