<template>
  <div>
    <van-nav-bar
      title="修改密码"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    ></van-nav-bar>
    <van-cell-group class="register_view field_group">
      <van-field
        v-model="fieldData.mobile"
        placeholder="请输入手机号"
        left-icon="mobile"
        clearable
        :style="borderRed"
        :error="errow"
        :is-error="isErrow"
        @blur="checkMobile"
      ></van-field>
      <!-- <div class="red" v-show="isErrow">{{mobileMessage}}</div> -->
      <message-error v-show="isErrow" :Message="mobileMessage"></message-error>
      <van-field v-model="fieldData.code" placeholder="请输入验证码" left-icon="lock" clearable>
        <div slot="button" @click="getCode" class="getCode time_down">
          <span v-if="counting">
            <count-down :countTime="60" countText="后获取" @countdownend="countdownend"></count-down>
          </span>
          <span v-else>获取验证码</span>
        </div>
      </van-field>
      <div class="register_submit">
        <van-button type="info" size="large" @click="submitCode">下一步</van-button>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'Forget',
  data() {
    return {
      fieldData: {
        mobile: '',
        code: '',
      },
      counting: false,

      isErrow: false,
      borderRed: '',
      errow: false,
      mobileMessage: '',
    };
  },
  watch: {
    'fieldData.mobile': {
      handler(val) {
        console.log('val', val);
        if (val) {
          const PHONE = /^1[0-9]{10}$/;
          if (PHONE.test(this.fieldData.mobile)) {
            this.isErrow = false;
            this.errow = false;
            this.borderRed = '';
          } else {
            this.isErrow = true;
            this.errow = true;
            this.borderRed = 'border: 1px solid red;color: red;';
            this.mobileMessage = '请输入正确的手机号';
          }
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
      if (this.fieldData.mobile === '') {
        this.isErrow = true;
        this.errow = true;
        this.borderRed = 'border: 1px solid red;color: red;';
        this.mobileMessage = '请输入手机号';
        return false;
      }
      if (!PHONE.test(this.fieldData.mobile)) {
        this.isErrow = true;
        this.errow = true;
        this.borderRed = 'border: 1px solid red;color: red;';
        this.mobileMessage = '请输入正确的手机号';
        return false;
      }
    },
    submitCode() {
      if (this.checkMobile() === false) {
        return;
      }
      if (this.fieldData.code === '') {
        this.$toast('请输入验证码');
        return;
      }
      this.$router.push('/forget/reset');
    },
    getCode() {
      if (this.checkMobile() === false) {
        return;
      }
      this.counting = true;
    },
    countdownend() {
      this.counting = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.register_view {
  padding-top: 40px;
}
.field_group {
  padding-left: 15px;
  padding-right: 15px;
}
.field_group > div {
  margin-bottom: 15px;
}
.van-cell {
  border: 1px solid #e5e5e5;
  border-radius: 5px;
}
.register_submit {
  padding-top: 40px;
  background-color: #fff;
}
.red {
  color: red;
  text-align: left;
  margin-bottom: 10px;
}
</style>
