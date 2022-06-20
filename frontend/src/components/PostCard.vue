<template>
  <div class="container">
    <article class="card" v-for="post in posts" :key="post._id">
      <header class="card__header">
        <p class="card__pseudo">{{ pseudo }}</p>
        <a class="link" :href="'/publication/edit/' + post._id">
        <img src="../assets/pen-to-square-solid.svg" alt="Icon Modifier" class="card__icon"></a>
      </header>
      <p class="card__content" v-show="post.text">{{ post.text }}</p>
      <img :scr="post.imageUrl" alt= 'image publiée' class= "card__image"/>
      <footer>

      </footer>
    </article>
  </div>
</template>

<script>
import Axios from 'axios';
// Import des icons
// import Edit from '../assets/pen-to-square-solid.svg';

export default {
  name: 'PostCard',
  // components: {
  //   'edit-post': Edit,
  // },
  // eslint-disable-next-line object-shorthand
  data: function () {
    return {
      pseudo: '',
      posts: '',
    };
  },
  mounted() {
    this.getPseudo();
    const user = JSON.parse(localStorage.getItem('user'));
    const AccessToken = user.token;
    // eslint-disable-next-line prefer-template
    const header = { headers: { Authorization: 'Bearer ' + AccessToken } };
    // eslint-disable-next-line  prefer-template
    Axios
      // eslint-disable-next-line  prefer-template
      .get('http://localhost:3000/api/post/', header)
      .then(
        // eslint-disable-next-line no-return-assign
        (response) => (
          // eslint-disable-next-line no-sequences
          (this.posts = response.data),
          (this.user = JSON.stringify(response.data.userId))
        ),
      )
      .catch((error) => console.log(error));
  },
  methods: {
    getPseudo() { // On récupère le pseudo depuis le localStorage
      const user = JSON.parse(localStorage.getItem('user'));
      this.pseudo = user.pseudo;
    },
  },
};

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:wght@400;500&family=Shrikhand&display=swap');

.card{
  background-color: white;
  color: black;
  border-radius: 10px;
  font-family: Lato, sans-serif;
  margin-bottom: 15px;
  &__header{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  &__pseudo{
    display: flex;
    padding: 10px 10px 0 10px;
    font-weight: 600;
    margin: 0;
  }
  &__content{
    font-weight: 400;
    color: black;
    margin: 0;
    padding: 0 10px;
    display: flex;
  }
  &__image{
    padding: 20px;
  }
  &__icon{
    height: 20px;
    padding: 10px 10px 0 10px;
  }
}
</style>
