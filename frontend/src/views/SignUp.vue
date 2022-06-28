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

<style lang="scss" scoped>

.content{
  @media screen and (min-width: 1025px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
