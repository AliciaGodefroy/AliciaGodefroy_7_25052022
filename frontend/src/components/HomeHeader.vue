<template>
<div>
  <header>
    <div class="header">
      <router-link to="/home">
        <img src="../assets/icon-left-font.png" alt="Logo Groupomania"
        class="header__logo">
      </router-link>
      <button id="logout-button"
       class="header__button"
      @click.prevent="Logout()">
        <font-awesome-icon icon="fa-solid fa-right-from-bracket" size="lg" />
      </button>
    </div>
  </header>
</div>
</template>

<script>
// import Axios from 'axios';
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

library.add(faRightFromBracket);
Vue.config.productionTip = false;

export default {
  components: {
    'font-awesome-icon': FontAwesomeIcon,
  },
  // eslint-disable-next-line object-shorthand
  data: function () {
    return {
      showModal: false,
    };
  },
  methods: {
    Logout() {
      localStorage.clear();
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss" scoped>

header{
  background-color: white;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: 1025px) {
    justify-content: center;
    display: flex;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    justify-content: center;
    display: flex;
  }
}

.header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 1025px) {
    width: 50%;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    width: 50%;
  }
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
