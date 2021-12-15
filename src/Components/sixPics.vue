<template>
    <div>
        <div class="row">
            <div class="column">
                <Picture :link = this.Images[0]></Picture>
            </div>
            <div class="column">
                <Picture :link = this.Images[1]></Picture>
            </div>
            <div class="column">
                <Picture :link = this.Images[2]></Picture>
            </div>
            <div class="column">
                <Picture :link = this.Images[3]></Picture>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <Picture :link = this.Images[4]></Picture>
            </div>
            <div class="column">
                <Picture :link = this.Images[5]></Picture>
            </div>
            <div class="column">
                <Picture :link = this.Images[6]></Picture>
            </div>
            <div class="column">
                <Picture :link = this.Images[7]></Picture>
            </div>
        </div>
    </div>
</template>

<script>


export default{
    name:"sixPics",
    components:
    {
        Picture:()=>import ("./Picture.vue")
    },
    props:
    {
        Images:
        {
            type:Array,
            require:true
        }
    }
};


</script>
<style scoped>
@import '../assets/style.css';
.column
{
    margin-left:60px;
}
</style>