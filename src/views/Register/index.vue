<template>
  <div>
    <van-cell-group class="register_view">
      <div class="text-div">我们将发送验证码到您的手机</div>
      <van-field
        v-model="mobile"
        placeholder="请输入手机号"
        left-icon="phone"
        clearable
      />
      <div class="register_submit">
        <van-button type="info" size="large" @click="submitCode">下一步</van-button>
      </div>

      <div class="register_footer">
        已有账号?
        <router-link to="/login" class="red">登录</router-link>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      mobile: '',
    };
  },
  methods: {
    submitCode() {
      this.$router.push('/register/submit');
    },
  },
};
</script>

<style lang="scss" scoped>
.text-div {
  text-align: left;
  padding-bottom: 15px;
}
.van-cell-group {
  margin: 0px 20px;
}
.van-cell {
  border: 1px solid #e5e5e5;
  border-radius: 5px;
}
div.register_view {
  background-color: #fff;
  padding-top: 30px;
}
div.register_submit {
  padding-top: 30px;
  padding-bottom: 20px;
}
.register_footer {
  text-align: right;
  color: #999;
}
</style>
