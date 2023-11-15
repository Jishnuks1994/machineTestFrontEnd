import { createApp } from 'vue'
import App from './App.vue'


import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import jQuery from 'jquery'
window.jQuery = jQuery

import axios from 'axios';
const app = createApp(App);

app.config.globalProperties.$http = axios;

createApp(App).use(bootstrap).mount('#app')


