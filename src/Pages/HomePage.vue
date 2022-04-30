<template>
  <div class="home">
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
    <div class="col-md-12 text-center" style="margin-bottom: 3px">
      <div class="animate-charcter"> Welcome To Beautiful
        <br>
         Images Game</div>
    </div>
  </div>
</div>
<div class="imgg">
  <img v-bind:src="'https://i.ibb.co/KGG6TW1/15.jpg'" alt="..." class="img-thumbnail" style="width: 600px; height: 400px;">
</div>
<br>
<div class="start">
    <div class="sign" v-if="!$root.store.email" >
    <p class="text-center text-muted mt-2 mb-1">In order to play, 
    <router-link to="InstructionsPage"> Sign up here</router-link></p>
     <p class="text-center text-muted mt-2 mb-1">If you have an acoount,
    <router-link to="login"> Log in here</router-link></p>
    </div>
    <div v-if="$root.store.email">
        <!-- <p class="mt-4 mb-0"> -->
          <!-- <router-link to="RatePage">Click here</router-link> to start the game </p> -->
          <a href="#" class="btn btn-white btn-animate" @click="submit">Start Play</a>  
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  date() {
    return {
      image: "back.png",
      // backgroundImage: 'url(./back.jpg)'
    }
  },
  components: {
  },
  methods: {
    submit() {
      this.$router.push("MainPage");
    },
    login() {
      this.$router.push("login");
    },
    register() {
      this.$router.push("InstructionsPage");
    },
      // submit(){
      //   // console.log(this.checkSelect)
      //   if (this.checkSelect != undefined)
      //   {
      //     this.$root.store.setAgree();
      //     this.$router.push("MainPage");
      //   }
      //   else
      //   {
      //     alert("In order to proceed, you must confirm the terms and conditions")
      //   }
      // }vh;
  },
  created() {},
};
</script>
<style >
/* .home  {  */
    /* height: 100%; */

  /* background-image: url("15.jpg");
  overflow: hidden;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  overflow-y: hidden; */
 /* } */
.lead{
  text-align: right;
}
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
  /* display: grid; */
  place-items: center;  
  text-align: center;
  /* margin-top: 30px; */
  /* height: 33vh */
}

.title {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 4vw;
  /* margin-top: 30px; */
  text-transform: uppercase;
}

.animate-charcter
{
   /* text-transform: uppercase; */
     font-family: "Montserrat", sans-serif;
     text-transform: uppercase;
  font-weight: 1000;
  font-size: 3.5vw;
  margin-top: 15px;
  margin-bottom: 15px;
  /* background-image: linear-gradient(
    -225deg,
     #ce9b7a 29%,
    #FFFBD0 70%,
    #c0562f 100%

  ); */
  color: #9e8672;
  background-clip: text;
  display: inline-block;
  margin-bottom: 5px;

  -moz-text-fill-color: white;
-webkit-text-fill-color: white;
-moz-text-stroke-color: #beb7b0;
-webkit-text-stroke-color: #beb7b0;
-moz-text-stroke-width: 2px;  
-webkit-text-stroke-width: 2px
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
    margin-top: 5px;
    text-align: center;
    /* font-family: "Montserrat", sans-serif; */
    font-weight: 600;
    font-size: 20px;
    /* font-family: 'Blippo, fantasy' */
}

.sign {
    font-style: italic;
}

.imgg {
  width: 600px;
  height: 400px;
  margin: 0 auto;
      display:block;
    margin:auto;
    margin-top: 5px;
    margin-bottom: 2px;
    /* border: 2px solid rgba(197, 197, 197, 0.918); */
}

  #butt2 {
    margin-left: 25%;
  }
  
  #butt1 {
    margin-right: 25%;
  }

  .btn:link,
  .btn:visited {
    margin-bottom: 5px;
      font-weight: 600;
      font-size: 16px;
      font-family:Arial, Helvetica, sans-serif;
      /* text-transform: uppercase; */
      text-decoration: none;
      padding: 12px 30px;
      display: inline-block;
      border-radius: 100px;
      transition: all .2s;
      /* position: absolute; */
       box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
  
  .btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .btn:active {
      transform: translateY(-1px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  
  .btn-white {
      background-color: #fff;
      color: rgb(133, 133, 133);
  }
  
  .btn::after {
      content: "";
      display: inline-block;
      /* height: 100%;
      width: 100%; */
      border-radius: 100px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all .4s;
  }
  
  .btn-white::after {
      background-color: #fff;
  }
  
  .btn:hover::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
  }
  
  .btn-animated {
      animation: moveInBottom 5s ease-out;
      animation-fill-mode: backwards;
  }
  
  @keyframes moveInBottom {
      0% {
          opacity: 0;
          transform: translateY(30px);
      }
  
      100% {
          opacity: 1;
          transform: translateY(0px);
      }
  }
</style>
