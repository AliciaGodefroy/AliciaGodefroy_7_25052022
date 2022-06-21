<template>
  <div class="content">
    <auth-header></auth-header>
    <form-sign-up></form-sign-up>
  </div>
</template>

<script>
// Components
import AuthHeader from '../components/AuthHeader.vue';
import FormSignUp from '../components/FormSignUp.vue';

export default {
  name: 'SignUp',
  components: {
    'auth-header': AuthHeader,
    'form-sign-up': FormSignUp,
  },
};
</script>
