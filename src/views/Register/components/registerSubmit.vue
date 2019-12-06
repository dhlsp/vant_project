<template>
  <div>
    <!-- <CountDown :countTime="countTime"></CountDown> -->
    <van-cell-group class="register_submit field_group">
      <van-field v-model="code" placeholder="请输入验证码" left-icon="contact" clearable>
        <!-- <van-button slot="button" size="small">发送验证码</van-button> -->
        <div slot="button" @click="getCode" class="getCode time_down">
          <!-- <CountDown v-if="counting" :countTime="countTime" @countdownend="countdownend">
            <template slot-scope="props">{{ +props.seconds || 60 }}秒后获取</template>
          </CountDown> -->
          <span v-if="counting">
            <CountDown :countTime="countTime" countText="后获取" @countdownend="countdownend"></CountDown>
          </span>
          <span v-else>获取验证码</span>
        </div>
      </van-field>
      <!-- <van-field
        v-model="code"
        center
        clearable
        placeholder="请输入短信验证码"
      >
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field> -->
      <van-field v-model="password" placeholder="请输入密码" left-icon="contact" clearable/>
      <van-field v-model="repeatPassword" placeholder="请再次确认密码" left-icon="contact" clearable/>

      <div class="register_submit_btn">
        <van-button type="info" size="large" @click="registerSubmit">确定</van-button>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
import CountDown from '@/components/countDown';

export default {
  name: 'registerSubmit',
  data() {
    return {
      countTime: 60,
      counting: true,
      code: '',
      password: '',
      repeatPassword: '',
    };
  },
  methods: {
    getCode() {
      this.counting = true;
    },
    countdownend() {
      this.counting = false;
    },
    registerSubmit() {
      this.$router.push({
        name: 'registerStatus',
        params: { status: 'success' },
      });
      // this.$router.push('/register/status');
    },
  },
  components: {
    CountDown,
  },
};
</script>

<style lang="scss" scoped>
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

.register_submit_btn {
  padding-top: 30px;
}

.getCode {
  // @include one-border(left);
  text-align: center;
}

.time_down {
  color: #db3d3c;
}
</style>
