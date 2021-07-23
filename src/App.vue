<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Please choose number:"
        label-for="input-1"
        description="Choose number 6,8,9,10 only!"
      >
        <b-form-input
          id="input-1"
          v-model="form.number"
          type="number"
          placeholder="8"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Please choose number:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.select"
          :options="selects"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
      return {
        form: {
          number: '',
          select: '',
        },
        selects: [{ text: 'Select One', value: null }, '6', '8', '9', '10'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        this.getImages();
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.number = ''
        this.form.select = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      async getImages(){
        try {
          const response = await this.axios.delete(
          `http://localhost:3001/images/${this.form.number}`);

          //fill code here            
        
        }catch(err){
          console.log("There was a problem", err)
        }

      },
    }
  }
</script>
