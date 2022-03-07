require('vue-select-image/dist/vue-select-image.css')
import Vue from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";
axios.defaults.withCredentials = true;
import './assets/style.css';
import routes from "./routes";
import VueRouter from "vue-router";
import { ModalPlugin } from 'bootstrap-vue'
Vue.use(ModalPlugin)

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

import Vuelidate from "vuelidate";
import vSelect from 'vue-select';

import VueSelectImage from 'vue-select-image'
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
Vue.use(VueSelectImage)
Vue.component('v-select', vSelect)

axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axios.interceptors.response.use(
    function (response) {
        // Do something with response data
        return response;
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const shared_data = {
    email: localStorage.email,
    u_id: localStorage.u_id,
    isAdmin: localStorage.isAdmin,

    rankImages: localStorage.rankImages,
    firstGameImages: localStorage.firstGameImages,
    firstGameImagesSelected: localStorage.firstGameImagesSelected,
    isAgreed: localStorage.isAgreed,


  login(username) {
        if (username) {
            localStorage.setItem("email", username.username);
            this.email = username.username;
            localStorage.setItem("u_id", username.u_id);
            this.u_id = username.u_id;
            localStorage.setItem("isAdmin", username.isAdmin)
            this.isAdmin = username.isAdmin
            console.log("login", this.u_id);            
        }
    },
    logout() {
        localStorage.removeItem("u_id");
        this.u_id = undefined;
        localStorage.removeItem("email");
        this.email = undefined;
        localStorage.removeItem("isAdmin");
        this.isAdmin = undefined;
        localStorage.removeItem("isAgreed");
        this.isAgreed = false;
        console.log("logout");
    },
    setGlobalSettings(globalSettings){
        localStorage.setItem("rankImages", globalSettings.rankImages);
        this.rankImages = globalSettings.rankImages;
        localStorage.setItem("firstGameImages", globalSettings.firstGameImages);
        this.firstGameImages = globalSettings.firstGameImages;
        localStorage.setItem("firstGameImagesSelected", globalSettings.firstGameImagesSelected)
        this.firstGameImagesSelected = globalSettings.firstGameImagesSelected;
        console.log("setGlobalSettings", this.rankImages, this.firstGameImages, this.firstGameImagesSelected);
    },
    setAgree() {
        localStorage.setItem("isAgreed", true);
        this.isAgreed = true;
    }
};

// shared_data.username = "s" 

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