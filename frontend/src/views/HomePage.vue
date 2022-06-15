<template>
  <div class="content">
    <home-header></home-header>
    <div class="headerbis">
      <h3>Dernières publications</h3>
      <router-link to="/publish">
        <button>+ Publier</button>
      </router-link>
    </div>
    <post-card></post-card>
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader.vue';
import PostCard from '../components/PostCard.vue';

export default {
  components: {
    'home-header': HomeHeader,
    'post-card': PostCard,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:wght@400;500&family=Shrikhand&display=swap');

.headerbis{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 10px;
  h3{
    color: #FD2D01;
  }
  button{
    background-color: #FD2D01;
    font-family: Lato, Helvetica, Arial, sans-serif;
    font-weight: 800;
    border: #FD2D01;
    color: white;
    border-radius: 5px;
    height: 30px;
    width: 100px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>
