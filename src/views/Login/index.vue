<template>
  <div>
    <login-header></login-header>
    <login-request></login-request>
    <login-footer></login-footer>
  </div>
</template>

<script>
import loginHeader from './components/loginHeader';
import loginRequest from './components/loginRequest';
import loginFooter from './components/loginFooter';

export default {
  name: 'Login',
  components: {
    loginRequest,
    loginHeader,
    loginFooter,
  },
};
</script>
