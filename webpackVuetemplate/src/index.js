import './js/common'

import './css/main.css'

import './scss/main.scss'

// 1
//import 'vue'

// 2
// import Vue from 'vue'
// Vue.use()

//3
window.Vue = require('vue')

// Vue.component('example-component', require('./'))

Vue.component('example-component', require('./components/Example.vue').default)