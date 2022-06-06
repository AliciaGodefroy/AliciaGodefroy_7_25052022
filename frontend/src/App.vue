/* eslint-disable */
<script>
import NavLink from './components/NavLink.vue';

export default {
  name: 'App',
  components: {
    NavLink,
  },
};
</script>

<template>
  <div id="app">
    <nav>
      <NavLink url="/" text="Accueil" />
      <NavLink url="/about" text="À propos" />
      <NavLink url="/contact" text="Contact" />
    </nav>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
