<template>
  <div>
    <van-nav-bar
      title="修改密码"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    ></van-nav-bar>
    <van-cell-group class="register_view field_group">
      <van-field :style="borderRed" v-model="password" placeholder="请输入密码" left-icon="lock" :is-error="isErrow" clearable/>
      <van-field :style="borderRed" v-model="submitPassword" placeholder="请再次确认密码" left-icon="lock" :is-error="isErrow" clearable/>
      <div class="red" v-show="isErrow">两次密码输入不一致</div>
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
      isErrow: false,
      password: '',
      submitPassword: '',
      borderRed: '',
    };
  },
  watch: {
    'password': {
      handler(val) {
        if (val === '') {
          this.borderRed = '';
          this.isErrow = false;
        }
      },
    },
    'submitPassword': {
      handler(val) {
        if (val === '') {
          this.borderRed = '';
          this.isErrow = false;
        }
      },
    },
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
      if (this.password !== this.submitPassword) {
        this.isErrow = true;
        this.borderRed = 'border: 1px solid red';
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
