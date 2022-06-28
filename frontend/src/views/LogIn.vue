<template>
  <div class="content">
    <auth-header></auth-header>
    <form-log-in></form-log-in>
  </div>
</template>

<script>
import AuthHeader from '../components/AuthHeader.vue';
import FormLogIn from '../components/FormLogIn.vue';

export default {
  components: {
    'auth-header': AuthHeader,
    'form-log-in': FormLogIn,
  },
  data() {
    return {};
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
