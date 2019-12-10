<template>
  <div>
    <van-nav-bar
      title="注册"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    ></van-nav-bar>
    <van-cell-group class="register_view">
      <div class="text-div">我们将发送验证码到您的手机</div>
      <van-field
        v-model="mobile"
        placeholder="请输入手机号"
        left-icon="mobile"
        clearable
        :style="borderRed"
        :error="errow"
        :is-error="isErrow"
        @blur="checkMobile"
      ></van-field>
      <messageError v-show="isErrow" :Message="Message"></messageError>
      <!-- <div class="red" v-show="isErrow">{{Message}}</div> -->
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
      isErrow: false,
      borderRed: '',
      errow: false,
      Message: '',
    };
  },
  watch: {
    'mobile': {
      handler(val) {
        if (val !== '') {
          this.borderRed = '';
          this.isErrow = false;
          this.errow = false;
        } else {
          this.isErrow = true;
          this.errow = true;
          this.borderRed = 'border: 1px solid red;color: red;';
        }
      },
    },
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    checkMobile() {
      const PHONE = /^1[0-9]{10}$/;
      if (this.mobile === '') {
        this.isErrow = true;
        this.errow = true;
        this.borderRed = 'border: 1px solid red;color: red;';
        this.Message = '请输入手机号';
        return false;
      }
      if (!PHONE.test(this.mobile)) {
        this.isErrow = true;
        this.errow = true;
        this.borderRed = 'border: 1px solid red;color: red;';
        this.Message = '请输入正确的手机号';
        return false;
      }
    },
    submitCode() {
      if (this.checkMobile() === false) {
        return;
      }
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
  padding-top: 20px;
  padding-bottom: 20px;
}
.register_footer {
  text-align: right;
  color: #999;
}
.red {
  color: red;
  text-align: left;
  padding-top: 10px;
}
</style>
