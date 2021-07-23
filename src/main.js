import Vue from "vue";
// import { createApp } from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { FormPlugin } from 'bootstrap-vue'
Vue.use(FormPlugin)

// createApp(App).mount('#app')

new Vue ({
    render: h => h(App),
}).$mount('#app')