<template>
    <div id="main" v-if="this.show">
    <h1 class="header">Welcome to our ImageApp!</h1>
    <div id = "wrapper">
      
    <b-form @submit="onSubmit"   style="width:200px">
      <b-form-group  id="input-group-3" label="Number of Pictures to retrieve:" label-for="input-3" style="width:300px">
        <b-form-select style="width:200px"
          id="input-3"
          v-model="form.select"
          :options="selects"
          required
         ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary" style="width:200px; margin-bottom:10%" >Apply</b-button>
      
    </b-form>
    </div>
    <div >
      <Pictures class="pics" v-if="ImageArr.length > 0" :Images = this.ImageArr ></Pictures>
    </div>
      
  </div>

 
</template>


<script>
 import Pictures from "../Components/Pictures.vue"
export default {
  name: 'Main',
  components:
  {
    Pictures
  },
  data() {
      return {
        form: {
          select : '',
        },
        selects : [{ text: 'Select One', value: null }, '6', '8', '9', '10'],
        show : true,
        ImageArr : []
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        
        this.getImages();
        localStorage.setItem("start_time",new Date());
        
      },
      async getImages(){
        try {
          this.axios.defaults.withCredentials = true;
          const response = await this.axios.get(
          `http://localhost:3001/images/${this.form.select}`);
          this.ImageArr = [];
          response.data.map((x)=>{
            this.ImageArr.push(x.PicUrl);
            
          });
        //   console.log(this.ImageArr);    
        
        }catch(err){
          console.log("There was a problem", err)
        }

      },
      
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