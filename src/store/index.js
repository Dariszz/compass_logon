import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    password: '',
  },
  getters: {
  },
  mutations: {
    attUser(state, user) {
      state.user = user;
    },

    attPassword(state, password) {
      state.password = password;
    },

    reset(state) {
      state.user = '',
      state.password = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
