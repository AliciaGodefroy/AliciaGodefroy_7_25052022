<template>
  <div class="container">
    <article class="card" v-for="post in posts" :key="post._id">
      <header class="card__header">
        <p class="card__pseudo">{{ pseudo }}</p>
        <!-- Si l'utilisateur est admin ou si le userId correpsondant à l'UserId
        de la publication alors on affiche l'icone modifier -->
        <div class="icons" v-if="userId == post.userId || isAdmin">
          <a class="link" :href="'/post/edit/' + post._id">
            <span>D</span>
            <font-awesome-icon icon="fa-solid fa-pen-to-square" class="card__icon1"/>
          </a>
          <font-awesome-icon icon="fa-solid fa-trash" @click="deletePost(post)"
          class="card__icon2"/>
        </div>
      </header>
      <p class="card__content" v-show="post.text">{{ post.text }}</p>
      <img :src="post.imageUrl" alt= 'image publiée' class= "card__image"/>
      <footer class="card__footer">
        <font-awesome-icon icon="fa-solid fa-heart" @click="like(post)" class="card__icon3"/>
        <span>0</span>
      </footer>
    </article>
  </div>
</template>

<script>
import Axios from 'axios';
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPenToSquare, faTrash, faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faPenToSquare, faTrash);
library.add(faHeart);
Vue.config.productionTip = false;

export default {
  name: 'PostCard',
  components: {
    'font-awesome-icon': FontAwesomeIcon,
  },
  // eslint-disable-next-line object-shorthand
  data: function () {
    return {
      userId: '',
      isAdmin: '',
      pseudo: '',
      posts: '',
    };
  },
  mounted() {
    this.getPseudo();
    this.getAllPosts();
    this.getUserId();
    this.getIsAdmin();
  },
  methods: {
    // Récupérer le pseudo de l'utilisateur depuis le localStorage
    getPseudo() {
      const user = JSON.parse(localStorage.getItem('user'));
      this.pseudo = user.pseudo;
    },
    getUserId() {
      const user = JSON.parse(localStorage.getItem('user'));
      this.userId = user.userId;
    },
    getIsAdmin() {
      this.isAdmin = this.$store.getters.isAdmin;
    },
    // Afficher tous les posts
    getAllPosts() {
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
    // Modifier une publication
    editPublication(post) {
      const user = JSON.parse(localStorage.getItem('user'));
      const AccessToken = user.token;
      // eslint-disable-next-line prefer-template
      const header = { headers: { Authorization: 'Bearer ' + AccessToken } };
      Axios
        // eslint-disable-next-line prefer-template
        .get('http://localhost:3000/api/post/' + post._id, header)
        .then((res) => {
          console.log('This is the res from get message/id');
          console.log(res);
          // eslint-disable-next-line  prefer-arrow-callback
          this.$router.push({ name: 'EditPage' }); // Redirection vers la page d'Accueil
        })
        // eslint-disable-next-line  prefer-arrow-callback
        .catch(function (error) {
          console.log(error);
        });
    },
    // Supprimer une publication
    deletePost(post) {
      const user = JSON.parse(localStorage.getItem('user'));
      const AccessToken = user.token;
      // eslint-disable-next-line prefer-template
      const header = { headers: { Authorization: 'Bearer ' + AccessToken } };
      Axios
        // eslint-disable-next-line prefer-template
        .delete('http://localhost:3000/api/post/' + post._id, header)
        .then((response) => {
          console.log('this is response from deletePost');
          console.log(response.data.post);
        })
        // On refait un get derrière pour MAJ
        .then(() => {
          this.getAllPosts();
        })
        .catch((err) => {
          console.log('this is error from deletePost');
          console.log(err);
        });
    },
    // Liker une publication
    like(post) {
      const user = JSON.parse(localStorage.getItem('user'));
      const AccessToken = user.token;
      // eslint-disable-next-line prefer-template
      const header = { headers: { Authorization: 'Bearer ' + AccessToken } };
      Axios
        // eslint-disable-next-line prefer-template
        .post('http://localhost:3000/api/post/' + post._id + '/like', header)
        .then((response) => {
          // eslint-disable-next-line padded-blocks
          console.log('this is response from like', response);
        })
        // On refait un get derrière pour MAJ
        .then(() => {
          this.getAllPosts();
        })
        .catch((err) => {
          console.log('this is error from like');
          console.log(err);
        });
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
  margin: 20px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    padding: 8px 10px;
    display: flex;
    text-align: left;
  }
  &__image{
    padding: 10px;
    object-fit: cover;
    object-position: center;
    width: 95%;
    height: 200px;
    border-radius: 30px;
  }
  &__footer{
    display: flex;
    align-items: center;
  }
  .icons{
    display: flex;
  }
  .heart{
    margin-bottom: 10px;
  }
}

.link{
  span{
    display: none;
  }
}

.card__icon1{
  height: 20px;
  padding: 10px 5px 0 10px;
  color: black;
}

.card__icon2{
  height: 20px;
  padding: 10px 10px 0 5px;
  color: black;
}

.card__icon3{
  height: 20px;
  padding: 10px;
  color: black;
}

.like__button{
  display: flex;
  align-items: center;
}
</style>
