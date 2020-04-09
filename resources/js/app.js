require('./bootstrap');
window.Vue = require('vue');

//Vuex
import Vuex from 'vuex'

Vue.use(Vuex);
import storeData from "./store/index"

const store = new Vuex.Store(
    storeData
);

//moment js
import {filter} from './filter'

// vue router
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import {routes} from "./routes";

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);

//v-form
import {Form, HasError, AlertError} from 'vform'

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
window.Form = Form;

//sweet alert 2
import Swal from 'sweetalert2'

window.swal = Swal;
const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
window.toast = toast;

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'hash',
});

const app = new Vue({
    el: '#app',
    router,
    store,
});
