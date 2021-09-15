<template>
  <div
      :id="image_id"
      class="card"
      :draggable="draggable"
      @dragstart="dragStart"
      @dragover.stop
      @dragover.prevent
      @drop.prevent="drop"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  props: {
    image_id: {
      type: Number, required: true
    },
    draggable: {
      type: Boolean, required: true
    },
  },
  methods: {
    dragStart: e => {
      const target = e.target;
      e.dataTransfer.setData('card_id', target.id);
      setTimeout(() => {
        target.style.display = "none";
      }, 0);
    },
    drop: e => {
      const card_id = e.dataTransfer.getData('card_id');
      const last_board = e.dataTransfer.getData('last_board');
      const card = document.getElementById(card_id);
      const board = document.getElementById(last_board);
      card.style.display = "inline";
      card.style.marginTop = "1%";
      card.style.marginTop = "4%";
      card.style.position = "absolute";
      // card.style.width = "100%";
      // card.style.height = "10%";
      board.appendChild(card);
    }
  }
}
</script>