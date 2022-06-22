<template>
<div>
  <header class="header">
    <router-link to="/home">
      <img src="../assets/icon-left-font.png" alt="Logo Groupomania"
      class="header__logo">
    </router-link>
    <button id="logout-button"
    class="header__button"
    @click.prevent="handleLogout"
    :disabled="isLoggedOut">
      <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
    </button>
    <modal-type v-if="showModal" @close="showModal = false">
      <button><font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" /></button>
    </modal-type>
  </header>
</div>
</template>

<script>
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Userfront from '@userfront/core';
import ModalType from './ModalType.vue';

Userfront.init('demo1234');
library.add(faArrowRightFromBracket);
Vue.config.productionTip = false;

export default {
  components: {
    'modal-type': ModalType,
    'font-awesome-icon': FontAwesomeIcon,
  },
  // eslint-disable-next-line object-shorthand
  data: function () {
    return {
      showModal: false,
    };
  },
  methods: {
    handleLogout() {
      Userfront.logout();
    },
  },
  computed: {
    // User is logged out if they don't have an access token
    isLoggedOut() {
      return !Userfront.tokens.AccessToken;
    },
  },
};

// library.add(faUser);
// Vue.config.productionTip = false;

// export default {
//   components: {
//     'font-awesome-icon': FontAwesomeIcon,
//   },
// };
</script>

<style lang="scss" scoped>

.header{
  display: flex;
  // justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &__logo{
    width: 180px ;
    margin: 10px;
  }
  &__button{
    margin-right: 10px;
    font-family: Lato, Helvetica, Arial, sans-serif;
    font-weight: 500;
    background-color: white;
    font-family: Lato, Helvetica, Arial, sans-serif;
    font-weight: 800;
    border: white;
    color: #FD2D01;
    border-radius: 5px;
    height: 30px;
  }
}

nav {
  padding: 30px;
  color: #FD2D01;
  text-decoration: none;
}

nav a {
  font-weight: bold;
  color: #FFFF;
  text-decoration: none;
  padding: 10px 40px;
}

nav a.router-link-exact-active {
  color: #FD2D01;
  background-color: #FFFF;
  border-radius: 5px;
}
</style>
