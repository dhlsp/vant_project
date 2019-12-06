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
        v-model="mobile"
        placeholder="请输入手机号"
        left-icon="mobile"
        clearable
      />
      <van-field v-model="code" placeholder="请输入验证码" left-icon="lock" clearable>
        <div slot="button" @click="getCode" class="getCode time_down">
          <span v-if="counting">
            <CountDown :countTime="60" countText="后获取" @countdownend="countdownend"></CountDown>
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
import CountDown from '@/components/countDown';

export default {
  name: 'Forget',
  data() {
    return {
      mobile: '',
      code: '',
      counting: false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    submitCode() {
      this.$router.push('/forget/reset');
    },
    getCode() {
      this.counting = true;
    },
    countdownend() {
      this.counting = false;
    },
  },
  components: {
    CountDown,
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
</style>
