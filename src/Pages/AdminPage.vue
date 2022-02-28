<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <div>
        <label for="range-1">Number of images for rank:</label>
        <b-form-input
          id="range-1"
          v-model="form.rankImages"
          type="range"
          min="60"
          max="120"
          step="8"
        ></b-form-input>
        <div class="mt-2">Value: {{ form.rankImages }}</div>
      </div>
      <div>
        <label for="range-2">First game images:</label>
        <b-form-input
          id="range-2"
          v-model="form.firstGameImages"
          type="range"
          min="4"
          max="16"
          step="1"
        ></b-form-input>
        <div class="mt-2">Value: {{ form.firstGameImages }}</div>
      </div>
      <div>
        <label for="range-3">First game images selected</label>
        <b-form-input
          id="range-3"
          v-model="form.firstGameImagesSelected"
          type="range"
          min="1"
          max="4"
          step="1"
        ></b-form-input>
        <div class="mt-2">Value: {{ form.firstGameImagesSelected }}</div>
      </div>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "AdminPage",

  data() {
    return {
      form: {
        rankImages: "72",
        firstGameImages: "8",
        firstGameImagesSelected: "2",
      },
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      if (this.firstGameImages <= this.firstGameImagesSelected) {
        this.$root.toast(
          "First game",
          "You cant choose first game images less or equl than first game images selected",
          "error"
        );
      } else {
        try {
          const response = await this.axios.post(
            "http://localhost:443/admin/changeSettings",
            {
              isAdmin: this.$root.store.isAdmin,
              rankImages: Number(this.form.rankImages),
              firstGameImages: Number(this.form.firstGameImages),
              firstGameImagesSelected: Number(
                this.form.firstGameImagesSelected
              ),
            }
          );

          if (response.status == 200) {
            this.$root.toast(
              "Settings",
              "All settings saved successfully!",
              "success"
            );
          } else {
            this.form.rankImages = "72";
            this.form.firstGameImages = "8";
            this.form.firstGameImagesSelected = "2";
            this.$root.toast(
              "Server error",
              "The user is not authorized to change settings",
              "warning"
            );
          }
        } catch (error) {
          this.form.rankImages = "72";
          this.form.firstGameImages = "8";
          this.form.firstGameImagesSelected = "2";
          this.$root.toast("Settings", "There was a server error", "error");
        }
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.rankImages = "72";
      this.form.firstGameImages = "8";
      this.form.firstGameImagesSelected = "2";
    },
  },
};
</script>

<style scoped></style>
