<template>
  <div id="app"
       @dragover.prevent
       @drop.prevent="drop">
    <router-view />
    <main class="flexbox">
      <div class="Row">
      <Board class="Column"
          v-for="im in Images"
          :image_id="im"
          :key="im"
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

.flexbox .board .card {
  padding: 5px 15px;
  background-color: #D4F5FD;
  cursor: pointer;
  margin-bottom: 5px;
}
</style>