<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  function() {
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
  // background-color: rgba(253, 45, 1, 0.6);
  background-image:url('assets/image_de_fond.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>
