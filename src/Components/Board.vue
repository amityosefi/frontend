<template>
<div
    id="board_id"
  class="board"
  @dragover.prevent
  @drop.prevent="drop"
  >

  <slot/>
</div>
</template>

<script>
export default {
  name: "Board",

  data(){
    return {
    }
  },
  props: {
    board_id: {
      type: Number, required: true
    }
  },
  methods: {
    drop: e => {
      e.dataTransfer.setData('last_board', e.target);
      const card_id = e.dataTransfer.getData('card_id');
      const card = document.getElementById(card_id);
      card.style.display = "block";
      card.style.width = "100%";
      card.style.height = "10%";
      e.target.appendChild(card);
    }
  }
}
</script>

<style scoped>
.board {
  margin-left: 0.5%
}
</style>