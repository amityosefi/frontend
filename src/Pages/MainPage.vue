<template>
  <div>
  <h1 class="header">Welcome to our image app!</h1>
    <binning/>
  </div>
 
</template>


<script>
import Binning from '../Components/binning.vue';
 
export default {
  name: 'Main',
  components:
  {
    Binning
    
  },
  data() {
      return {
        
      }
    },
    methods: {
      
      
    }
  }
</script>
<style scoped>

#wrapper
{
  display:flex;
  justify-content: center;
  
  
  
}
.header
{
  display: flex;
  justify-content: center;
  color: rgb(29, 175, 180);
  text-shadow: 1px 2px black;
  font-weight: bold;
}
/*#app*/
/*{*/
/*  text-align: center;*/
/*}*/
.pics
{
  display: flex;
  justify-content: center;
}

/*.card*/
/*{*/
/*  width: 5%;*/
/*  height: 5%;*/
/*  text-align: center;*/
/*  padding: 5px 15px;*/
/*  background-color: #D4F5FD;*/
/*  cursor: pointer;*/
/*  margin-bottom: 5px;*/
/*}*/
</style>