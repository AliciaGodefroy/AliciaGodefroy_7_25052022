<template>
  <div class="content">
    <auth-header></auth-header>
    <h1>page login</h1>
  </div>
</template>

<script>
import AuthHeader from '../components/AuthHeader.vue';

export default {
  components: {
    'auth-header': AuthHeader,
    AuthHeader,
  },
  data() {
    return {};
  },
};
</script>
