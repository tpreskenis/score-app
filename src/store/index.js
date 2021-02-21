import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mlb_game: {},
    sport_checkbox: false,
  },
  mutations: {
    updating_mlb (state, data) {
      state.mlb_game = data
    },
    current_sport (state, bool) {
      state.sport_checkbox = bool
    }
  },
  actions: {
  },
  modules: {
  }
})
