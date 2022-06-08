<template>
<div>
  <header class="header">
    <img src="../assets/icon-left-font-monochrome-white.png" alt="Logo Groupomania"
    class="header__logo">
  </header>
  <nav>
      <router-link to="/">Inscription</router-link>
      <router-link to="/login">Connexion</router-link>
    </nav>
</div>
</template>

<style lang="scss" scoped>
.header{
  display: flex;
  justify-content: center;
  padding-top: 130px;
  &__logo{
    width: 230px ;
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
  padding: 10px 20px;
}

nav a.router-link-exact-active {
  color: #FD2D01;
  background-color: #FFFF;
  border-radius: 5px;
}
</style>
