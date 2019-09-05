import './js/common'

import './assets/css/main.css'

import './assets/scss/main.scss'

// 1
//import 'vue'

// 2
// import Vue from 'vue'
// Vue.use()

//3
window.Vue = require('vue')

import store from './store'
// import './store'

// Vue.component('example-component', require('./'))

// Vue.component('example-component', require('./components/Example.vue').default)

Vue.component('modal-component', require('./components/ModalValidate.vue').default)

const app = new Vue({
    data () {
        return {
            component: false
        }
    },

    // store:store,
    store,
    el:'#app'
})