import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    admin: false,
  },
  getters: {
    isAdmin(state) {
      console.log('je veux connaitre son role');
      return state.admin;
    },
  },
  mutations: {
    SET_ROLE(state, userRole) {
      state.admin = userRole;
      console.log('after MUTATION', state.admin);
    },
  },
  actions: {
    setRole({ commit }, userRole) {
      console.log('userRole', userRole);
      commit('SET_ROLE', userRole);
    },
  },
  modules: {
  },
});
