<template>
  <div id="admin">
    <br />
    <h1>Settings</h1>
    <b-form id="form" @submit="onSubmit" @reset="onReset">
      <div class="inputs">
        <label for="range-1">Rank page - images amount</label>
        <b-form-input
          id="range-1"
          v-model="form.rankImages"
          type="range"
          min="60"
          max="126"
          step="6"
        ></b-form-input>
        <div class="mt-2">Value: {{ form.rankImages }}</div>
      </div>
      <div class="inputs">
        <label for="range-2">Games - images amount</label>
        <b-form-select
          v-model="form.firstGameImages"
          :options="[6, 8, 9, 12]"
        ></b-form-select>
      </div>
      <div class="inputs">
        <label for="range-3">Games - selected images amount</label>
        <b-form-select
          v-model="form.firstGameImagesSelected"
          :options="[1, 2, 3, 4, 5]"
        ></b-form-select>
      </div>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

    <br /><br />

    <div class="getCSV">
      <label for="range-3">Select here to downlowd users data</label>
      <b-button @click="getAllUsers" variant="primary">download</b-button>
    </div>
    <!-- <div>
      <download-csv
        class="btn btn-default"
        :data="json_data"
        name="filename.csv"
      >
        Download CSV (This is a slot)
      </download-csv>
    </div> -->
  </div>
</template>

<script>

export default {
  name: "AdminPage",

  data() {
    return {
      form: {
        rankImages: "",
        firstGameImages: "",
        firstGameImagesSelected: "",
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
            const globalSettings = {
              rankImages: Number(this.form.rankImages),
              firstGameImages: Number(this.form.firstGameImages),
              firstGameImagesSelected: Number(
                this.form.firstGameImagesSelected
              ),
            };
            this.$root.store.setGlobalSettings(globalSettings);
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
    async getAllUsers() {
      try {
        const response = await this.axios.post(
          "http://localhost:443/admin/users",
          {
            isAdmin: this.$root.store.isAdmin,
          }
        );
        console.log(response.data.data);

        let csv = 'Id, Email,FullName,Gender,Age \n';
            response.data.data.forEach((row) => {
                    csv += row.Id + ',';
                    csv += row.Email + ',';
                    csv += row.FullName + ',';
                    csv += row.Gender + ',';
                    csv += row.Age + ',';
                    csv += "\n";
            });



        const anchor = document.createElement('a');
        anchor.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
        anchor.target = '_blank';
        anchor.download = 'Users.csv';
        anchor.click();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
#admin {
  text-align: center;
}
.custom-range {
  width: 40%;
  margin-left: 5%;
  margin-top: 5%;
}
.btn {
  margin: 1%;
  /* margin-top: 5%; */
}
.custom-select {
  width: 10%;
  margin-left: 3%;
}
.inputs {
  margin-top: 3%;
}
</style>
