<template>
  <div class="content">
    <home-header></home-header>
    <div class="header">
      <div class="headerbis">
      <h3>Dernières publications</h3>
        <router-link to="/publish">
          <button>+ Publier</button>
        </router-link>
      </div>
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
  mounted() {
    console.log('admin ?', this.$store.getters.isAdmin);
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:wght@400;500&family=Shrikhand&display=swap');

.header{
  @media screen and (min-width: 1025px) {
    justify-content: center;
    display: flex;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    justify-content: center;
    display: flex;
  }
}

.headerbis{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 10px;
  @media screen and (min-width: 1025px) {
    width: 50%;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    width: 50%;
  }
  h3{
    color: white;
  }
  button{
    background-color: white;
    font-family: Lato, Helvetica, Arial, sans-serif;
    font-weight: 800;
    border: white;
    color: #FD2D01;
    border-radius: 5px;
    height: 30px;
    width: 100px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>
