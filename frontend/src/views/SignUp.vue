<template>
  <div class="content">
    <auth-header></auth-header>
    <form-sign-up></form-sign-up>
  </div>
</template>

<script>
// Axios pour l'API
// import Axios from 'axios';
// Components
import AuthHeader from '../components/AuthHeader.vue';
import FormSignUp from '../components/FormSignUp.vue';

export default {
  name: 'SignUp',
  components: {
    'auth-header': AuthHeader,
    'form-sign-up': FormSignUp,
  },
  data() {
    return {
      // Pour récupérer la valeur des inputs
      pseudoValue: '',
      emailValue: '',
      passwordValue: '',
    };
  },
  // methods: {
  //   userSignUp() {
  //     axios
  //       .post("http://localhost:3000/api/auth/signup", {
  //         pseudo: this.pseudo,
  //         email: this.email,
  //         password: this.password,
  //       })
  //       .then((result) => {
  //       }).catch((err) => {
  //       });
  //   }
  // },
};
</script>
