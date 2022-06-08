/* eslint-disable */
<template>
  <div id="app">
    <home-header></home-header>
    <nav>
      <router-link to="/">Inscription</router-link>
      <router-link to="/login">Connexion</router-link>
      <!-- <NavLink url="/" text="Inscription" class="signup"/>
      <NavLink url="/login" text="Connexion"  class="login"/> -->
    </nav>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue';

export default {
  components: {
    'home-header': HomeHeader,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:wght@400;500&family=Shrikhand&display=swap');

#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: rgba(253, 45, 1, 0.6);
  background-image:url('assets/image_de_fond.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
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
  padding: 10px 20px;
}

nav a.router-link-exact-active {
  color: #FD2D01;
  background-color: #FFFF;
  border-radius: 5px;
}

.header{
  display: flex;
  justify-content: center;
  padding-top: 130px;
  &__logo{
    width: 230px ;
  }
}

</style>
