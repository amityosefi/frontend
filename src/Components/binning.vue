<template>
  <div id="binning" @dragover.prevent>
  <draggable :list="Images" group="tasks">
    <div v-for="(image, imageIndex) in Images" :key="imageIndex" class="im">
      <img v-bind:src="image" width="150px" height="100px" alt="..">
    </div>
  </draggable>
  <div class="Row">
    <div class="Column">
      <draggable :list="arrGrade1" group="tasks" >
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
export default {
  name: 'app',
  components: {
    draggable,
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
      arrGrade10: []
    }
  },
  methods: {
    uploadImages() {
      this.Images[0] = "https://booking.pvtravels.com/public/files/PERUANOS/Huaraz/HUA_3.jpg";
      this.Images[1] = "https://booking.pvtravels.com/public/files/PERUANOS/Huaraz/HUA_3.jpg";
      this.Images[2] = "https://booking.pvtravels.com/public/files/PERUANOS/Huaraz/HUA_3.jpg";
      this.Images[3] = "https://booking.pvtravels.com/public/files/PERUANOS/Huaraz/HUA_3.jpg";
      this.Images[4] = "https://booking.pvtravels.com/public/files/PERUANOS/Huaraz/HUA_3.jpg";
      this.Images[5] = "https://booking.pvtravels.com/public/files/PERUANOS/Huaraz/HUA_3.jpg";
    }

  },
  created() {
    this.uploadImages();
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

.bin {
  cursor: pointer;
  margin-top: 2px;
}


</style>