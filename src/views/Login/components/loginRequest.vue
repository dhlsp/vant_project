<template>
  <div>
    <van-cell-group class="field_group">
      <van-field
        v-model="account"
        placeholder="随便输"
        left-icon="username"
        clearable
      />

      <van-field
        v-model="password"
        placeholder="随便输"
        left-icon="lock"
        :type="visiblePass ? 'text' : 'password'"
        :right-icon="visiblePass ? 'eye-open' : 'eye-close'"
        @click-right-icon="visiblePass = !visiblePass"
      />
      <div class="clearfix">
				<div class="float-r">
          <router-link to="/forget">忘记密码?</router-link>
        </div>
			</div>
      <van-button type="info" size="large" @click="submit">登录</van-button>
    </van-cell-group>

    <div class="register clearfix">
			<div class="float-l connect">
				<span @click="showKefu = true">联系客服</span>
			</div>
			<div class="float-r">
        <router-link to="/register">免费注册</router-link>
      </div>
		</div>

    <van-popup v-model="showKefu">
			<contact-service mobile="18024179009"></contact-service>
		</van-popup>
  </div>
</template>

<script>
import contactService from '@/components/contactService';

export default {
  name: 'loginRequest',
  data() {
    return {
      account: '',
      password: '',
      visiblePass: false,
      showKefu: false,
      isLogining: false,
    };
  },
  watch: {
    'account': {
      handler(val) {
        if (val === '') {
          this.password = '';
        }
      },
    },
  },
  methods: {
    submit() {
      console.log('this.account', this.account);
      console.log('this.password', this.password);
    },
  },
  components: {
    contactService,
  },
};
</script>

<style lang="scss" scoped>
.van-cell-group {
  margin: 0px 20px;
}
.field_group > div {
  margin-bottom: 15px;
}
.van-cell {
  border: 1px solid #e5e5e5;
  border-radius: 5px;
}
.register {
  padding-top: 30px;
  color: #999;
  a {
    color: #999;
  }
  > div {
    width: 50%;
    box-sizing: border-box;
    padding: 0 20px;
  }
  .connect {
    position: relative;
    text-align: right;
  }
  .float-r {
    text-align: left;
  }
}

.float-r {
	float: right;
}

.float-l {
	float: left;
}

.clearfix {
  &:before,
  &:after {
    content: " "; // 1
    display: table; // 2
  }
  &:after {
    clear: both;
  }
}
a {
	color: #000
}
</style>
