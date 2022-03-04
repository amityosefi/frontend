<template>
  <div>
    <h2>Homepage</h2>
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-outline-danger" v-on:click="submit">
        Login Page
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  components: {
  },
  methods: {
      submit(){
        this.$router.push("login");
      }
  },
  created() {},
};
</script>
<style scoped></style>
