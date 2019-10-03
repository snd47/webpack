export default {
    state :{
        message: 'hello vuex',
         modalView: 'Login'

    },
    mutations: {},
    actions: {},
    getters: {
        getMessage(state) {
            return state.message
        },
        getModalView (state) {
            return state.modalView
        }
    }
}