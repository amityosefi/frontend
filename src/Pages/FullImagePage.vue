<template>
    <div @click="clickOut()">
        <div  class="bg">
            <picFull class="img" :link = this.link />
            
        </div>
    <div class="disp">
        <p class="text"> to go back to Image search click anywhere</p>
    </div>
    </div>
    
</template>
<script>
import picFull from '../Components/picFull.vue'

export default
{
    name:"FullImagePage",
    components:
    {
        picFull
    },
    data() {
    return {
      link:""
    };
    },
    created()
    {
      
       this.link = this.$route.params.data;
       if(!this.link || this.link == "")
       {
          
           this.$router.push({name:"main"})
       }
       
    },
    methods:
    {
        clickOut()
        {
            this.$router.push({name:"main"})
        }
    }
}
</script>
<style scoped>
.bg
{
    
    display: flex;
    justify-content: center;
    height:95vh;
}

.img
{
    margin-top:5%;
    
    
}

.text
{
    background-color: black;
    color: honeydew;
    text-shadow: 1px 1px grey;
}
.disp
{
    background-color: black;
    display: flex;
    justify-content: center;
}

</style>
