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
