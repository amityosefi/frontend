<template>
  <div id="admin">
    <br />
    <div class="title">Settings</div>
    <b-form id="form">
      <!-- <div class="inputs"> -->
        <!-- <label for="range-1">Rank page - images amount</label> -->
        <!-- <b-form-input
          id="range-1"
          v-model="form.rankImages"
          type="range"
          min="60"
          max="126"
          step="6"
        ></b-form-input> -->
        <!-- <div class="mt-2">Value: {{ form.rankImages }}</div> -->
        <div class="inputs">
       <b><label for="range-1">Set images amount of rank page:</label></b>
       <br />
        <b-form-select
          v-model="form.rankImages"
          :options="[60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126]"
        ></b-form-select>
      </div>
      <div class="inputs">
        <b><label for="range-2">Set images amount of the games:</label></b>
        <br />
        <b-form-select
          v-model="form.firstGameImages"
          :options="[6, 8, 9, 12]"
        ></b-form-select>
      </div>
      <div class="inputs">
        <b><label for="range-3">Set selected images amount of the games:</label></b>
        <br />
        <b-form-select
          v-model="form.firstGameImagesSelected"
          :options="[1, 2, 3, 4, 5]"
        ></b-form-select>
      </div>
      <br>
      <!-- <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button> -->
      <div class="buttons">
      <a href="#" class="btn btn-white btn-animate" @click="submit">Save</a>
      <br>
       <a href="#" class="btn btn-white btn-animate" @click="getAllUsers">Download CSV of users data</a>
      <!-- <a href="#" class="btn btn-white btn-animate" id="butt2" @click="reset">Reset</a>  -->
      </div>
    </b-form>

    <!-- <div class="getCSV"> -->
        <!-- <div style="margin: 0 auto"> -->
      <!-- <b><label for="range-3">Get users data in CSV:</label></b>
      <br> -->
      <!-- <a href="#" class="btn btn-white btn-animate" @click="getAllUsers">Download CSV of users data</a> -->
      <!-- <b-button @click="getAllUsers" variant="primary">Download</b-button> -->
      <!-- </div> -->
    <!-- </div> -->
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
        rankImages: 72,
        firstGameImages: 8,
        firstGameImagesSelected: 2,
      },
    };
  },
  methods: {
    async submit() {
      // event.preventDefault();
      if (this.firstGameImages <= this.firstGameImagesSelected) {
        this.$root.toast(
          "First game",
          "You cant choose first game images less or equl than first game images selected",
          "error"
        );
      } else {
        try {
          const response = await this.axios.post(
            (this.$root.store.address+"admin/changeSettings"),
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
    reset() {
      // event.preventDefault();
      // Reset our form values
      this.form.rankImages = "72";
      this.form.firstGameImages = "8";
      this.form.firstGameImagesSelected = "2";
    },
    async getAllUsers() {
      try {
        const response = await this.axios.post(
          this.$root.store.address+"admin/users",
          {
            isAdmin: this.$root.store.isAdmin,
          }
        );

        let csv = 'Id, Email,FullName,Gender,Age \n';
        response.data.forEach((row) => {
                csv += row.Id + ',';
                csv += row.Email + ',';
                csv += row.FullName + ',';
                if (row.Gender)
                  csv += 'Female' + ',';
                else
                  csv += 'Male' + ',';
                csv += row.Age + ',';
                csv += "\n";
        });
        this.downloadCSV(csv);
        
      } catch (error) {
        console.log(error);
      }
    },
    downloadCSV(csv){
      const anchor = document.createElement('a');
        anchor.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
        anchor.target = '_blank';
        anchor.download = 'Users.csv';
        anchor.click();
    },
  },
};
</script>

<style scoped>
#admin {
  text-align: center;
}

#form {
  margin-top: 5px;
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
 .title {
   font-family: Georgia, serif;
  font-weight: 800;
  font-size: 2.5vw;
  color: #15555a;
 }

 .input-wrapper {
  /* display: inline-block; */
  text-align: left;
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
  .vue-select-image__thumbnail{
    padding: 10px;
  }

  .buttons {
    margin: 0 auto;
  }

</style>
