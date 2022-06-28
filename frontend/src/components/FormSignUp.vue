<template>
  <div class="form-content">
    <form class="form" action="/ma-page-de-traitement" method="post">
      <div>
          <label htmlFor="pseudo">Pseudo
            <input type="text" id="pseudo" name="user_pseudo" v-model="pseudo"
            placeholder="Entrez votre pseudo">
          </label>
      </div>
      <div>
          <label htmlFor="mail">Adresse email
            <input type="email" id="email" name="user_mail" v-model="email"
            placeholder="Exemple : john.doe@gmail.com">
          </label>
      </div>
      <div>
          <label htmlFor="password">Mot de passe
            <input type="password" id="password" name="user_password" v-model="password"
            placeholder="Entrez votre mot de passe">
          </label>
      </div>
      <div v-show="error" class="error">{{ errorMsg }}</div>
      <!-- En attendant de faire fonctionner le vrai bouton -->
      <!-- <router-link to="/home" class="form__button">Créer un compte</router-link> -->
      <button @click.prevent="userSignUp()" type="submit" class="form__button">
        Créer un compte
      </button>
    </form>
  </div>
</template>

<script>
// Axios pour l'API
import Axios from 'axios';

export default {
  data() {
    return {
      // Pour récupérer la valeur des inputs
      pseudo: '',
      email: '',
      password: '',
      error: false,
      errorMsg: '',
    };
  },
  methods: {
    userSignUp() {
      if (this.pseudo === '' || this.email === '' || this.password === '') {
        this.error = true; // Si l'un des champs est vide : erreur
        this.errorMsg = 'Merci de renseigner tous les champs.';
      } else {
        this.error = false;
        this.errorMsg = '';
        // let header = {headers: {Authorization: 'Bearer ' + AccessToken}};
        Axios
          .post('http://localhost:3000/api/auth/signup', {
            pseudo: this.pseudo,
            email: this.email,
            password: this.password,
          }) // header entre l'accolade et la parenthèse
          .then((response) => {
            // eslint-disable-next-line no-console
            console.log(response.data.message);
            this.$router.push('/login');
          }).catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err.response.data.message);
          });
      }
    },
  },
};
</script>

<style lang='scss' scoped>

$color-primary : #FD2D01;
$color-secondary : #FFD7D7;
$color-tertiary : #4E5166;

.form-content {
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 0 30px;
  @media screen and (min-width: 1025px) {
    width: 50%;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    width: 50%;
  }
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FFFFFF;
  border: 1px solid #FFFFFF;
  border-radius: 10px;
  div{
    display: flex;
    flex-direction: column;
    label{
      color: $color-primary;
      font-weight: 700;
      margin-bottom: 8px;
      display: flex;
      flex-direction: column;
    }
    input{
      padding: 8px;
      border-radius: 5px;
      border: 1px solid #9E9E9E;
    }
  }
  &__button{
    background: $color-primary;
    border: $color-primary;
    border-radius: 5px;
    padding: 10px;
    margin-top: 25px;
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: #FFFFFF;
    font-weight: 700;
  }
}
</style>
