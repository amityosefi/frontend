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
import { VBModal } from 'bootstrap-vue'
// Note: Vue automatically prefixes the directive name with 'v-'
// import { TablePlugin } from 'bootstrap-vue'
// Vue.use(TablePlugin)
import { BTable } from 'bootstrap-vue'
Vue.use(ModalPlugin)
Vue.directive('b-modal', VBModal)
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
    SpinnerPlugin,
    ToastPlugin,
    LayoutPlugin,
    InputGroupPlugin,
    TablePlugin
} from "bootstrap-vue";
[
    FormGroupPlugin,
    FormPlugin,
    FormInputPlugin,
    ButtonPlugin,
    CardPlugin,
    SpinnerPlugin,
    NavbarPlugin,
    SpinnerPlugin,
    FormSelectPlugin,
    AlertPlugin,
    ToastPlugin,
    LayoutPlugin,
    InputGroupPlugin,
    TablePlugin
].forEach((x) => Vue.use(x));
Vue.use(Vuelidate);
Vue.use(VueSelectImage)
Vue.component('v-select', vSelect)
Vue.component('b-table', BTable)

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
    fullname: localStorage.fullname,
    rankImages: localStorage.rankImages,
    firstGameImages: localStorage.firstGameImages,
    firstGameImagesSelected: localStorage.firstGameImagesSelected,
    isAgreed: localStorage.isAgreed,
    user_score: localStorage.user_score,
    last_time: localStorage.last_time,


  login(username) {
        if (username) {
            localStorage.setItem("email", username.username);
            this.email = username.username;
            localStorage.setItem("u_id", username.u_id);
            this.u_id = username.u_id;
            localStorage.setItem("isAdmin", username.isAdmin)
            this.isAdmin = username.isAdmin;
            localStorage.setItem("fullname", username.fullname)
            this.fullname = username.fullname;
            localStorage.setItem("user_score", username.user_score)
            this.user_score = username.user_score;
            localStorage.setItem("last_time", username.last_time);
            this.last_time = username.last_time;
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
        localStorage.removeItem("fullname");
        this.fullname = false;
        localStorage.removeItem("user_score");
        this.user_score = undefined;
        localStorage.removeItem("last_time");
        this.last_time = undefined;
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