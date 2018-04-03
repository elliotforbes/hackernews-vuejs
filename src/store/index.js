import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    topStories: [],
    newStories: []
  },
  mutations,
  actions
})
