<template>
  <div class="form-content">
    <form class="form" action="/ma-page-de-traitement" method="post">
      <div>
          <label htmlFor="mail">Adresse email
            <input type="email" id="email" name="user_mail" v-model="email"
            placeholder="Entrez votre adresse email">
          </label>
      </div>
      <div>
          <label htmlFor="password">Mot de passe
            <input type="password" id="password" name="user_password" v-model="password"
            placeholder="Entrez votre mot de passe">
          </label>
      </div>
      <div v-show="error" class="error">{{ errorMsg }}</div>
      <button @click.prevent="userLogIn()" type="submit" class="form__button">Se connecter</button>
    </form>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: false,
      errorMsg: '',
    };
  },
  methods: {
    userLogIn() {
      if (this.email === '' || this.password === '') {
        this.error = true; // Si l'un des champs est vide : erreur
        this.errorMsg = 'Merci de renseigner tous les champs.';
      } else {
        this.error = false;
        this.errorMsg = '';
        Axios
          .post('http://localhost:3000/api/auth/login', {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            sessionStorage.setItem('token', response.data.token);
            sessionStorage.setItem('userId', response.data.userId);
            sessionStorage.setItem('Pseudo', response.data.pseudo);
            sessionStorage.setItem('Email', response.data.email);
            sessionStorage.setItem('role', response.data.role);
            console.log(response.data);
            this.$router.push('/home');
          })
          .catch((error) => {
            this.loading = false;
            this.error = true;
            this.errorMsg = error.response.data.error;
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

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:wght@400;500&family=Shrikhand&display=swap');

.form-content {
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 0 30px;
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
