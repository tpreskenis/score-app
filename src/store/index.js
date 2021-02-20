import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mlb_game: {},
  },
  mutations: {
    updating_mlb (state, data) {
      state.mlb_game = data
    }
  },
  actions: {
  },
  modules: {
  }
})
