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
        v-model="password"
        placeholder="请输入密码"
        left-icon="lock"
        :type="visiblePass ? 'text' : 'password'"
        :right-icon="visiblePass ? 'eye-open' : 'eye-close'"
        @click-right-icon="visiblePass = !visiblePass"
      ></van-field>
      <van-field v-model="submitPassword" placeholder="请再次确认密码" left-icon="lock" type="password"></van-field>
      <!-- <div class="red" v-show="isErrow">两次密码输入不一致</div> -->
      <div class="register_submit_btn">
        <van-button style="margin-right: 10px;" size="large" @click="reset">重置</van-button>
        <van-button type="info" size="large" @click="submit">确定</van-button>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'forgetReset',
  data() {
    return {
      password: '',
      submitPassword: '',
      visiblePass: false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    reset() {
      this.password = '';
      this.submitPassword = '';
    },
    submit() {
      if (this.password === '') {
        this.$toast('请输入密码');
        return;
      }
      if (this.submitPassword === '') {
        this.$toast('请再次确认密码');
        return;
      }
      if (this.password !== this.submitPassword) {
        this.$toast('密码不一致, 请再次确认密码');
        return;
      }
      this.$router.push({
        path: '/forget/status',
        params: { status: 'success' },
      });
      // this.$router.push('/forget/status');
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
.register_submit_btn {
  padding-top: 10px;
}
.red {
  color: red;
  text-align: left;
}
.van-button--large {
  width: 48%;
}
</style>
