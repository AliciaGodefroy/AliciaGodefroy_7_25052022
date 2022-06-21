<template>
<div>
  <header class="header">
    <router-link to="/home">
      <img src="../assets/icon-left-font.png" alt="Logo Groupomania"
      class="header__logo">
    </router-link>
    <font-awesome-icon icon="fa-solid fa-user" />
  </header>
</div>
</template>

<style lang="scss" scoped>

.header{
  display: flex;
  justify-content: flex-start;
  background-color: white;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &__logo{
    width: 180px ;
    margin: 10px;
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
