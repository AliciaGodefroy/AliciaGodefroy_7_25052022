import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    admin: false,
  },
  getters: {
    isAdmin(state) {
      return state.admin;
    },
  },
  mutations: {
    SET_ROLE(state, role) {
      state.role = role;
    },
  },
  actions: {
    setRole({ commit }, userRole) {
      commit('SET_ROLE', userRole);
    },
  },
  modules: {
  },
});
