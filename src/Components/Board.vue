<template>
<div
    id="image_id"
  class="board"
  @dragover.prevent
  @drop.prevent="drop"
  >
  <Card :image_id="image_id" :draggable="true">
    <p>{{ image_id }}</p>
  </Card>
  <slot/>
</div>
</template>

<script>
import Card from "../Card";
export default {
  name: "Board",
  components: {
    Card
  },
  data(){
    return {
    }
  },
  props: {
    image_id: {
      type: Number, required: true
    }
  },
  methods: {
    drop: e => {
      const card_id = e.dataTransfer.getData('card_id');
      const card = document.getElementById(card_id);
      card.style.display = "block";
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