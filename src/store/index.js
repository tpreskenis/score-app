import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mlb_game: {},
    nba_game: {},
    sport_checkbox: false,
    away_home_baseball: false,
    away_home_basketball: false,
    api_connection: false,
    local: false
  },
  mutations: {
    updating_mlb (state, data) {
      state.mlb_game = data
    },
    updating_nba (state, data) {
      state.nba_game = data
    },
    current_sport (state, bool) {
      state.sport_checkbox = bool
    },
    current_team_baseball (state, bool) {
      state.away_home_baseball = bool
    },
    current_team_basketball (state, bool) {
      state.away_home_basketball = bool
    },
    api_connected (state, bool) {
      state.api_connection = bool
    },
    local_instead (state, bool) {
      state.local = bool
    }
  },
  actions: {
  },
  modules: {
  }
})
