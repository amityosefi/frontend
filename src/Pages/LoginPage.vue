<template>
  <div class="bg">
    <div class="gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px;">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">Sign In</h2>

                <form>
                  <b-form-group
                    id="input-group-email"
                    label-cols-sm="3"
                    label="Email"
                    label-for="email"
                  >
                    <b-form-input
                      id="email"
                      type="text"
                      v-model="$v.form.email.$model"
                      :state="validateState('email')"
                      style="width: 300px;"
                    ></b-form-input>
                    <b-form-invalid-feedback v-if="!$v.form.email.required">
                      Email is required
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.form.email.style">
                      Email is not valid
                    </b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="input-group-password"
                    label-cols-sm="3"
                    label="Password"
                    label-for="password"
                  >
                    <b-form-input
                      id="password"
                      type="password"
                      v-model="$v.form.password.$model"
                      :state="validateState('password')"
                      style="width: 300px;"
                    ></b-form-input>
                    <b-form-invalid-feedback v-if="!$v.form.password.required">
                      Password is required
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback
                      v-if="
                        $v.form.password.required && !$v.form.password.length
                      "
                    >
                      Password length should be between 5-10 characters
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback
                      v-else-if="!$v.form.password.style"
                    >
                      Password must contain at least one digit and one letter
                    </b-form-invalid-feedback>
                  </b-form-group>

                  <div class="button-container">
                    <div class="btn btn-succes btn-lg text-body">
                      <a class="btn" @click="this.onLogin">
                        <h3>Login</h3>
                      </a>
                    </div>
                  </div>
                  <p class="text-center text-muted mt-4 mb-0">
                    Don't have an account yet?
                    <router-link to="register"> Register here</router-link>
                  </p>
                  <!--                    <a href="#!" class="fw-bold text-body"><u>Login here</u></a></p>-->
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  alpha,
  sameAs,
} from "vuelidate/lib/validators";
import numeric from "vuelidate/lib/validators/numeric";
// import numeric from "vuelidate/lib/validators/numeric";
export default {
  name: "LoginPage",

  data() {
    return {
      form: {
        email: null,
        password: "",
      },
      errors: [],
      validated: false,
    };
  },

  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
      try {
        const response = await this.axios.post("http://localhost:443/login", {
          Email: this.form.email,
          Password: this.form.password,
        });
        if (response.status == 200) {
          const user = {
            username: this.form.email,
            u_id: response.data.Id,
            isAdmin: response.data.IsAdmin
          };

          const globalSettings = {
            rankImages: response.data.globalSettings.rankImages,
            firstGameImages: response.data.globalSettings.firstGameImages,
            firstGameImagesSelected: response.data.globalSettings.firstGameImagesSelected
          };

          this.$root.store.login(user);
          this.$root.store.setGlobalSettings(globalSettings);

          this.$root.toast("Login", "User logged in successfully", "success");
          this.$router.push("RatePage");
          // if (this.$root.store.isAgreed == true) {
          //   this.$router.push("/RatePage");
          // }
          // else {
          //   this.$router.push("/HomePage");
          // }

        } 
        else {
          this.$root.toast("Can't login", "Username or password incorrect", "warning");
          // this.form.email = "";
          // this.form.password = "";
        }
      } catch (err) {
          this.$root.toast("Can't login", "Username or password incorrect", "warning");
          // this.form.email = "";
          // this.form.password = "";
          // console.log(err.response);
          this.form.submitError = err.response.data.message;
      }
    },
    onLogin() {
      this.$v.form.$touch();
      this.Login();
    },
  },
  validations: {
    form: {
      firstname: {
        required,
        alpha,
      },
      lastname: {
        required,
        alpha,
      },
      email: {
        required,
        style: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
      },
      password: {
        required,
        length: (p) => minLength(5)(p) && maxLength(10)(p),
        style: (v) => /^(?=.*[0-9])(?=.*[a-zA-Z])/.test(v),
      },
      confirmedPassword: {
        required,
        sameAsPassword: sameAs("password"),
      },
      gender: {
        required,
      },
      age: {
        required,
        minMax: (v) => v > 11 && v < 100,
        numeric,
      },
    },
  },
};
</script>

<style scoped>
.gradient-custom-3 {
  /* fallback for old browsers */
  /* background: #84fab0; */

  /* Chrome 10-25, Safari 5.1-6 */
  /* background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5)); */

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /* background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5)); */

  height: 100%;
  overflow: auto;
  position: fixed;

  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}

.button-container {
  position: relative;
  overflow: hidden !important;
  display: inline-block;
}

.button-container a h3 {
  display: inline-block;
  margin: auto;
  color: #fff;
  font-size: 20px;
  padding: 8px 155px;
  /*border: 1px solid;*/
  border-image-source: -webkit-linear-gradient(
    -45deg,
    rgb(255, 255, 255) 0%,
    rgb(255, 183, 183) 100%
  );
  background: -webkit-linear-gradient(
    -45deg,
    rgb(248, 206, 196) 0%,
    rgb(241, 140, 115) 100%
  );
}

.button-container a h3:after {
  content: "";
  position: absolute;
  top: -130%;
  left: -200%;
  width: 200%;
  height: 300%;
  opacity: 0;
  transform: skew(-40deg);
  background: rgb(98, 250, 232);
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.13) 77%,
    rgba(255, 255, 255, 0.5) 92%,
    rgba(255, 255, 255, 0) 100%
  );
}

.button-container a h3:hover:after {
  opacity: 1;
  /* top: 0%; */
  left: 30%;
  transition-property: left, top, opacity;
  transition-duration: 0.7s, 0.7s, 0.15s;
  transition-timing-function: ease;
}

.bg {
  /* background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.jpg'); */
  /* The image used */
  overflow: auto;

  /* Full height */
  height: 100%;
  position: fixed;

  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
