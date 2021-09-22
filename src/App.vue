<template>
  <div id="app"
       @dragover.prevent
       @drop.prevent="drop">
    <router-view />
    <main class="flexbox">
        <draggable :list="Images" group="tasks">
          <div v-for="(image, imageIndex) in Images" :key="imageIndex" class="im">
<!--            {{image}}-->
            <img v-bind:src="image" width="150px" height="100px" alt="..">
<!--            <img :src="image" :key="imageIndex">-->
          </div>
<!--          <div v-for="(image, imageIndex) in Images">-->
<!--            <img :src="image" :key="imageIndex" />-->
<!--          </div>-->

<!--      <Board class="Column"-->
<!--             v-for="index in 10"-->
<!--          :board_id="index"-->
<!--          :key="index"-->
<!--      ></Board>-->
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
<!--      <img src="https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=645&quality=45&auto=format&fit=max&dpr=2&s=ed077231d111576ab4fb10018272a232" width="200px" height="100px">-->
    </main>
    </div>
</template>

<script>
// import Board from "./Components/Board";
import draggable from "vuedraggable";
export default {
  name: 'app',
  components: {
    draggable,
    // Board
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
    drop: e => {
      const card_id = e.dataTransfer.getData('card_id');
      const last_board = e.dataTransfer.getData('last_board');
      const card = document.getElementById(card_id);
      const board = document.getElementById(last_board);
      card.style.display = "block";
      // card.style.width = "100%";
      // card.style.height = "10%";
      board.appendChild(card);
    },

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

  /*margin: 0 auto;*/
  display: table;
  width: 70%;
  table-layout: fixed;
  border-spacing: 10px;
  height: 3vh;
}
.Column {
  vertical-align: center;
  align-items: baseline;
  /*position: absolute;*/
  text-align: center;
  display: table-cell;
  border-bottom-style: solid;
  border-bottom-color: black;
  border-left-style: solid;
  border-right-style: solid;
  border-left-color: black;
  border-right-color: black;
  /*width: 3%;*/
  height: 5vh;
}

.im {
  /*margin: 0 auto;*/
  text-align: center;
  font-size: large;
  cursor: pointer;
  float: left;
  margin-left: 5px;
  /*border-width: 5px;*/
}

.bin {
  cursor: pointer;
  margin-top: 2px;
}

/*.flexbox {*/
  /*display: flex;*/
  /*justify-content: space-between;*/
  /*width: 100%;*/
  /*max-width: 770px;*/
  /*height: 100vh;*/
  /*overflow: hidden;*/
  /*margin: 0 auto;*/
  /*padding: 15px;*/
/*}*/

/*.flexbox .board {*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  width: 20%;*/
/*  !*max-width: 100px;*!*/
/*  padding: 5px;*/

/*  text-align: center;*/
/*  display: table-cell;*/
/*  border-bottom-style: solid;*/
/*  border-bottom-color: black;*/
/*  border-left-style: solid;*/
/*  border-right-style: solid;*/
/*  border-left-color: black;*/
/*  border-right-color: black;*/
/*  !*padding-bottom: 15vh;*!*/
/*}*/

</style>