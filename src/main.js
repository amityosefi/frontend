import Vue from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";
import './assets/style.css';
import routes from "./routes";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

import Vuelidate from "vuelidate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {
    FormGroupPlugin,
    FormPlugin,
    FormInputPlugin,
    ButtonPlugin,
    CardPlugin,
    NavbarPlugin,
    FormSelectPlugin,
    AlertPlugin,
    ToastPlugin,
    LayoutPlugin,
    InputGroupPlugin
} from "bootstrap-vue";
[
    FormGroupPlugin,
    FormPlugin,
    FormInputPlugin,
    ButtonPlugin,
    CardPlugin,
    NavbarPlugin,
    FormSelectPlugin,
    AlertPlugin,
    ToastPlugin,
    LayoutPlugin,
    InputGroupPlugin
].forEach((x) => Vue.use(x));
Vue.use(Vuelidate);


axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axios.interceptors.response.use(
    function(response) {
        // Do something with response data
        return response;
    },
    function(error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const shared_data = {
  // username: localStorage.username,
  username: localStorage.username,
  title: localStorage.title,
  u_id :localStorage.id,

  login(username) {
    if(username)
    {
      localStorage.setItem("username", username.username);
      this.username = username.username;
      localStorage.setItem("title", username.title);
      this.title = username.title;
      localStorage.setItem("id", username.u_id);
      this.u_id = username.u_id;
      console.log("login", this.username);
    }
  },
  logout() {
    console.log("logout");
    localStorage.removeItem("username");
    localStorage.removeItem("result");
    localStorage.removeItem("query");
    localStorage.removeItem("picked");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    localStorage.removeItem("title");
    this.username = undefined;
    this.title = undefined;
    this.u_id = undefined;
  }
};


new Vue({
    router,
    data() {
        return {
            store: shared_data
        };
    },
    methods: {
        toast(title, content, variant = null, append = false) {
            this.$bvToast.toast(`${content}`, {
                title: `${title}`,
                toaster: "b-toaster-top-center",
                variant: variant,
                solid: true,
                appendToast: append,
                autoHideDelay: 3000
            });
        }
    },
    render: (h) => h(App)
}).$mount("#app");