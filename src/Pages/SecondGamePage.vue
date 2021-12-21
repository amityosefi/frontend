<template>
    <secondgame :Images="this.Images"></secondgame>
</template>
<script>
import secondgame from "../Components/secondGame.vue";

export default {
  name: "SecondGamePage",
  components: {
    secondgame,
  },
  data() {
    return {
        Images: [{
  id: '1',
  src: 'https://unsplash.it/200?random',
  alt: 'Alt Image 1'
}, {
  id: '2',
  src: 'https://unsplash.it/200?random',
  alt: 'Alt Image 2'
}, {
  id: '3',
  src: 'https://unsplash.it/200?random',
  alt: 'Alt Image 3',
  
},{
  id: '4',
  src: 'https://unsplash.it/200?random',
  alt: 'Alt Image 4'
},{
  id: '5',
  src: 'https://unsplash.it/200?random',
  alt: 'Alt Image 5'
},{
  id: '6',
  src: 'https://unsplash.it/200?random',
  alt: 'Alt Image 6'
}]
    };
  },

  methods: {
  }
}
</script>
<style>

</style>