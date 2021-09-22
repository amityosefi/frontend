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
    <Picture :link="somethingstudio.co.il/wp-content/uploads/2017/12/logo-something.png"></Picture>
    <slot>
      
    </slot>
  </div>
</template>

<script>
export default {
  components:
    {
        Picture:()=>import ("./Components/Picture.vue")
    },
  data(){
    return {
    }
  },
  props: {
    image_id: {
      type: Number, required: true
    },
    // src:
    // {
    //   type:String,
    // },
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