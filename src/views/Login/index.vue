<template>
  <div class="login">
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

<style lang="scss" scoped>
.login {
  // background: aqua;
  // background-image: linear-gradient(#4cd6ff, #aaffeb, #92fff0);
  background-image: url('../../assets/images/login.jpg');
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
