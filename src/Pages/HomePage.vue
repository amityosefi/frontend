<template>
  <div>
    <!-- <div class="container">
    <h2 class="title">
        <span class="title-word title-word-1">Welcome</span>
        <span class="title-word title-word-2">to</span>
        <span class="title-word title-word-3">beautiful</span>
        <br>
        <span class="title-word title-word-4">Images</span>
        <span class="title-word title-word-5">Game</span>
    </h2>
    </div> -->
    <div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter"> Welcome To Beautiful Images Game</h3>
    </div>
  </div>
</div>
<br>
<div class="start">
    <div v-if="!$root.store.email" >
    <p class="text-center text-muted mt-4 mb-0">In order to play,
    <router-link to="InstructionsPage"> sign up here</router-link></p>
     <p class="text-center text-muted mt-4 mb-0">If you have an acoount,
    <router-link to="login"> sign in here</router-link></p>
    </div>
    <div v-if="$root.store.email">
             <p class="text-center text-muted mt-4 mb-0">In order to start, 
    <router-link to="InstructionsPage">click here</router-link></p>
    </div>
</div>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  date() {
    return {
      checkSelect: undefined
    }
  },
  components: {
  },
  methods: {
      submit(){
        // console.log(this.checkSelect)
        if (this.checkSelect != undefined)
        {
          this.$root.store.setAgree();
          this.$router.push("MainPage");
        }
        else
        {
          alert("In order to proceed, you must confirm the terms and conditions")
        }
      }
  },
  created() {},
};
</script>
<style scoped>
.par{
 text-align: right;
 font-family: Calibri;
 /* margin-right: 5%;  */
 margin: 0 auto;
 margin-bottom: 10px;
 width: 60%;
 border: 5xp;
 border-style: groove;
 /* margin: auto; */
/* width: 60%; */
/* border: 5px solid #FFFF00; */
padding: 10px;
 
}

.title-word {
  animation: color-animation 4s linear infinite;
}

.title-word-1 {
  --color-1: #DF8453;
  --color-2: #3D8DAE;
  --color-3: #E4A9A8;
    margin-left: 20px;
}

.title-word-2 {
  --color-1: #DBAD4A;
  --color-2: #ACCFCB;
  --color-3: #17494D;
    margin-left: 20px;
}

.title-word-3 {
  --color-1: #ACCFCB;
  --color-2: #E4A9A8;
  --color-3: #ACCFCB;
    margin-left: 20px;
}

.title-word-4 {
  --color-1: #3D8DAE;
  --color-2: #DF8453;
  --color-3: #d3bd74;
    margin-left: 20px;
}

.title-word-5 {
  --color-1: #dd3c52;
  --color-2: #dda2e9;
  --color-3: #56a5c4;
    margin-left: 20px;
}

@keyframes color-animation {
  0%    {color: var(--color-1)}
  32%   {color: var(--color-1)}
  33%   {color: var(--color-2)}
  65%   {color: var(--color-2)}
  66%   {color: var(--color-3)}
  99%   {color: var(--color-3)}
  100%  {color: var(--color-1)}
}

/* Here are just some visual styles. 🖌 */

.container {
  display: grid;
  place-items: center;  
  text-align: center;
  height: 50vh
}

.title {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 4.5vw;
  text-transform: uppercase;
}

.animate-charcter
{
   /* text-transform: uppercase; */
     font-family: "Montserrat", sans-serif;
     text-transform: uppercase;
  font-weight: 800;
  font-size: 4.2vw;
  background-image: linear-gradient(
    -225deg,
    /* #df9a74 0%, */
     #dbbaa6 29%,
    #ca927b 70%,
    #eedad4 100%

        /* #ACCFCB 29%,
    #E4A9A8 67%,
    #ACCFCB 100% */

  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  /* text-fill-color: transparent; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  margin-bottom: 15px;
  /* height: 50vh */
      /* font-size: 100px; */
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

.start
{
    /* margin-left: 400px; */
    text-align: center;
    /* font-family: "Montserrat", sans-serif; */
    font-weight: 600;
    font-size: 18px;
    font-style: italic;
    /* font-family: 'Blippo, fantasy' */
}
</style>
