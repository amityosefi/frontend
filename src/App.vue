<template>
  <div id="app"
       @dragover.prevent
       @drop.prevent="drop">
    <router-view />
    <main class="flexbox">
      <div class="Row">
      <Board class="Column"
             v-for="index in 10"
          :board_id="index"
          :key="index"
      ></Board>
      </div>
    </main>
    </div>
</template>

<script>
import Board from "./Components/Board";
export default {
  name: 'app',
  components: {
    Board
  },

data() {
  return {
      Images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  };
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
  box-sizing: border-box;
}

body {
  background-color: #fff0f0;
}

.Row {
  margin: 0 auto;
  display: table;
  width: 80%;
  table-layout: fixed;
  border-spacing: 10px;
  height: 70vh;
}
.Column {
  text-align: center;
  display: table-cell;
  border-bottom-style: solid;
  border-bottom-color: black;
  border-left-style: solid;
  border-right-style: solid;
  border-left-color: black;
  border-right-color: black;
  padding-bottom: 15vh;
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