<template>
    <div >
        <sixPics v-if="Images.length == 6" :Images = this.Images />
        <eightPics v-if="Images.length == 8" :Images = this.Images />
        <ninePics v-if="Images.length == 9" :Images = this.Images />
        <tenPics v-if="Images.length == 10" :Images = this.Images />
    </div>
    
</template>
<script>



export default{
name:'Pictures',
props:
{
   
    Images:
    {
        type:Array,
        require:true
    },
    
    
    
    
},
components:
    {
        sixPics:()=>import ('../Components/sixPics.vue') ,
        eightPics:()=>import ('./secondGame.vue') ,
        ninePics:()=>import ('../Components/ninePics.vue') ,
        tenPics:()=>import ('../Components/tenPics.vue') ,
    },
};
</script>
