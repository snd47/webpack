import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import example from './example'

export default new Vuex.Store({
    modules: {
        example
    },
    // state: {
    //     modalView: 'Login 1',
    //     mo: 'mm'
    // },
    // mutations: {},
    // actions: {},
    // gettetrs: {
    //     getMo (state) {
    //         return state.mo
    // }
    // }
})