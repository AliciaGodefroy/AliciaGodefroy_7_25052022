<template>
  <div class="content">
    <auth-header></auth-header>
    <form-sign-up></form-sign-up>
  </div>
</template>

<script>
import AuthHeader from '../components/AuthHeader.vue';
import FormSignUp from '../components/FormSignUp.vue';

export default {
  components: {
    'auth-header': AuthHeader,
    'form-sign-up': FormSignUp,
  },
  data() {
    return {};
  },
};
</script>
