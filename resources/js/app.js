require('./bootstrap');
window.Vue = require('vue');

// vue router
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import {routes} from "./routes";


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history',
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
});
