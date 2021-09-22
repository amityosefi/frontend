<template>
  <div id="app"
       @dragover.prevent
       @drop.prevent="drop">
    <router-view />
    <main class="flexbox">
        <draggable :list="Images" group="tasks">
          <div class="image" v-for="im in Images" :key="im">
            {{im}}
            <Picture></Picture>
<!--          <Card :image_id="3"><p>{{3}}</p></Card>-->
          </div>

<!--      <Board class="Column"-->
<!--             v-for="index in 10"-->
<!--          :board_id="index"-->
<!--          :key="index"-->
<!--      ></Board>-->
        </draggable>
        <br>
        <br>
        <br>
      <div class="Row" style="margin:10%">
        <div class="Column">
          <draggable :list="arrGrade1" group="tasks" >
            <div v-for="element in arrGrade1" :key="element">
              {{element}}
            </div>
          </draggable>
          </div>

        <div class="Column">
          <draggable :list="arrGrade2" group="tasks" >
            <div v-for="element in arrGrade2" :key="element">
              {{element}}
            </div>
          </draggable>
        </div>

        <div class="Column">
          <draggable :list="arrGrade3" group="tasks" >
            <div v-for="element in arrGrade3" :key="element">
              {{element}}
            </div>
          </draggable>
        </div>

        <div class="Column">
          <draggable :list="arrGrade4" group="tasks" >
            <div v-for="element in arrGrade4" :key="element">
              {{element}}
            </div>
          </draggable>
        </div>

        <div class="Column">
          <draggable :list="arrGrade5" group="tasks" >
            <div v-for="element in arrGrade5" :key="element">
              {{element}}
            </div>
          </draggable>
        </div>

        <div class="Column">
          <draggable :list="arrGrade6" group="tasks" >
            <div v-for="element in arrGrade6" :key="element">
              {{element}}
            </div>
          </draggable>
        </div>

        <div class="Column">
          <draggable :list="arrGrade7" group="tasks" >
            <div v-for="element in arrGrade7" :key="element">
              {{element}}
            </div>
          </draggable>
        </div>

        <div class="Column">
          <draggable :list="arrGrade8" group="tasks" >
            <div v-for="element in arrGrade8" :key="element">
              {{element}}
            </div>
          </draggable>
        </div>

        <div class="Column">
          <draggable :list="arrGrade9" group="tasks" >
            <div v-for="element in arrGrade9" :key="element">
              {{element}}
            </div>
          </draggable>
        </div>

        <div class="Column">
          <draggable :list="arrGrade10" group="tasks" >
            <div v-for="element in arrGrade10" :key="element">
              {{element}}
            </div>
          </draggable>
        </div>
      </div>
    </main>
    </div>
</template>

<script>
// import Board from "./Components/Board";
import draggable from "vuedraggable";
import Picture from "./Components/Picture.vue"
export default {
  name: 'app',
  components: {
    draggable,
    Picture,
    // Board
  },

data() {
  return {
    Images: [1, 2, 3, 4, 5],
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
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  /*box-sizing: border-box;*/
}

body {
  background-color: #fff0f0;
}

.Row {
  position: absolute;
  top: 50vh;
  right: 50vh;

  margin: 0 auto;
  display: table;
  width: 50%;
  table-layout: fixed;
  border-spacing: 10px;
  height: 3vh;
}
.Column {
  vertical-align: auto;
  align-items: end;
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

.image {
  margin: 0 auto;
  text-align: center;
  font-size: large;
  cursor: pointer;
  width: 10px;
  /*border-width: 5px;*/
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