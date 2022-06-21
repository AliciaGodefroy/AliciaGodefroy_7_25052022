<template>
  <div class="container">
    <article class="card" v-for="post in posts" :key="post._id">
      <header class="card__header">
        <p class="card__pseudo">{{ pseudo }}</p>
        <div class="icons">
          <a class="link" :href="'/publication/edit/' + post._id">
            <img src="../assets/pen-to-square-solid.svg" alt="Icon Modifier" class="card__icon">
          </a>
          <img src="../assets/trash-can-solid.svg" alt="Icon Supprimer"
          @click="deletePost(post)" class="card__icon" aria-hidden="true">
        </div>
      </header>
      <p class="card__content" v-show="post.text">{{ post.text }}</p>
      <img :src="post.imageUrl" alt= 'image publiée' class= "card__image"/>
      <footer class="card__footer">
        <a class="link" :href="'/publication/edit/' + post._id">
          <img src="../assets/heart-regular.svg" alt="Icon Modifier" class="card__icon heart">
        </a>
      </footer>
    </article>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'PostCard',
  // eslint-disable-next-line object-shorthand
  data: function () {
    return {
      pseudo: '',
      posts: '',
    };
  },
  mounted() {
    this.getPseudo();
    this.getAllPosts();
    this.userId = localStorage.getItem('userId');
    this.isAdmin = localStorage.getItem('isAdmin');
  },
  methods: {
    // Récupérer le pseudo de l'utilisateur depuis le localStorage
    getPseudo() {
      const user = JSON.parse(localStorage.getItem('user'));
      this.pseudo = user.pseudo;
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
      Axios
        // eslint-disable-next-line prefer-template
        .get('http://localhost:3000/api/post/' + post._id, { headers: { Authorization: 'Bearer ' + AccessToken } })
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
      Axios
        // eslint-disable-next-line prefer-template
        .delete('http://localhost:3000/api/post/' + post._id, { headers: { Authorization: 'Bearer ' + AccessToken } })
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
    padding: 10px;
    object-fit: cover;
    object-position: center;
    width: 95%;
    border-radius: 30px;
  }
  &__icon{
    height: 20px;
    padding: 10px 10px 0 10px;
  }
  &__footer{
    display: flex;
  }
  .icons{
    display: flex;
  }
  .heart{
    margin-bottom: 10px;
  }
}
</style>
