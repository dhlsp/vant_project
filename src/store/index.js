import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    User: {},
  },
  mutations: {
    setUser(state, user) {
      state.User = user || {};
    },
  },
  actions: {
  },
  modules: {
  },
});
