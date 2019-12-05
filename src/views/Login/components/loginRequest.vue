<template>
  <div>
    <van-cell-group class="field_group">
      <van-field
        v-model="account"
        placeholder="随便输"
        left-icon="contact"
        clearable
      />

      <van-field
        v-model="password"
        placeholder="随便输"
        left-icon="setting-o"
        :type="visiblePass ? 'text' : 'password'"
        :right-icon="visiblePass ? 'eye-o' : 'closed-eye'"
        @click-right-icon="visiblePass = !visiblePass"
      />
      <div class="clearfix">
				<div class="float-r">
          <router-link to="">忘记密码</router-link>
        </div>
			</div>
      <van-button type="info" size="large">登录</van-button>
    </van-cell-group>

    <div class="register clearfix">
			<div class="float-l connect">
				<span @click="showKefu = true">联系客服</span>
			</div>
			<div class="float-r">
        <router-link to="">免费注册</router-link>
      </div>
		</div>
  </div>
</template>

<script>
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
