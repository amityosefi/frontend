<template>
    <div > 
        <img id ="pic" v-bind:src = this.link>
    </div>
</template>

<script>
    export default
    {
        name : "pictureFull",
        props:
        {
            link:
            {
                type: String,
                require: true
            }
        },
        
    }
</script>
<style scoped>
#pic
{    
    max-height: 720px;
    max-width: 1280px;
}

</style>
