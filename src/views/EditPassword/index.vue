<template>
  <div class="update-password" v-show="showFlag">
    <div class="title">
      <div class="back" @click="goBack">
        <img src="../../assets/images/user/right.svg" alt="">
      </div>
      <h4>修改密码</h4>
    </div>
    <div class="update-wrapper">
      <div class="pass-content">
        <p class="text">原密码</p>
        <input type="text" placeholder="输入原密码">
      </div>
      <div class="pass-content">
        <p class="text">新密码</p>
        <input type="text" placeholder="输入新密码">
        <input type="text" placeholder="确认新密码">
      </div>
      <p class="note">密码长度8~16位，数字、字母、字符至少包含两种！</p>
      <div class="pass-content">
        <p class="text">验证码</p>
        <input class="code-input" type="text" placeholder="验证码">
        <div class="verify-img" @click="createCode(4)">{{verifyImg}}</div>
      </div>
      <div style="clear: both;"></div>
      <div class="footer-btn">
        <button class="btn-primay">确认</button>
        <button>取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditPassword',
  data() {
    return {
      showFlag: false,
      verifyImg: '', // 验证码base64
      isShowVerifyImg: false, // 是否显示二维码
      verifyTimer: null, // 验证码定时器
    };
  },
  created() {
    this.showFlag = true;
    this.createCode(4);
  },
  methods: {
    // 生成验证码方法
    createCode(len) {
      if (this.verifyTimer === null) {
        let code = '';
        // 验证码长度
        let codeLength = parseInt(len, 10);
        // 所有候选组成验证码的字符，当然也可以用中文的
        let codeChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
          'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
          'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        // 循环组成验证码的字符串
        for (let i = 0; i < codeLength; i++) {
          // 获取随机验证码下标
          let charNum = Math.floor(Math.random() * 62);
          // 组成指定的字符验证码
          code += codeChars[charNum];
        }
        this.verifyImg = code;
        this.verifyTimer = window.setTimeout(() => {
          window.clearTimeout(this.verifyTimer);
          this.verifyTimer = null;
        }, 1000);
      }
    },
    goBack() {
      this.$router.push('/user');
    },
  },
};
</script>

<style lang="scss" scoped>
.update-password {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0px;
  z-index: 30;
  width: 100%;
  color: #333;
  background: #fff;
  .title {
    height: 35px;
    // border: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    .back {
      position: absolute;
      top: 10px;
      left: 0;
      img {
        display: block;
        padding: 10px;
        font-size: 20px;
        transform: rotate(180deg);
      }
      h4 {
        text-align: center;
        font-size: 15px;
        font-weight: bold;
        // margin: 0;
        margin: 10px 0 0;
        height: 28px;
      }
    }
  }
  .update-wrapper {
    padding: 30px 20px 0px 20px;
    font-size: 14px;
    line-height: 30px;
    color: #333;
    margin-bottom: 15px;
    text-align: left;
    .pass-content {
      margin-bottom: 15px;
      .text {
        margin: 0;
      }
      input {
        margin-bottom: 15px;
        display: block;
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        padding: 12px 12px;
        font-size: 14px;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        &:focus{
          border-color: #66afe9;
          outline: 0;
          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
        }
      }
      .code-input {
        width: 60%;
        display: initial;
        float: left;
        margin-right: 6%;
      }
      .verify-img {
        font-family:Arial;
        font-style:italic;
        color:#1989fa;
        font-size:30px;
        border:0;
        padding:2px 3px;
        letter-spacing:3px;
        font-weight:bolder;
        float:left;
        cursor:pointer;
        width: 30%;
        height: 35px;
        line-height:35px;
        text-align:center;
        vertical-align:middle;
        background-color:#f2f3f5;
        border-radius: 10px;
      }
    }
    .note{
      margin-bottom: 15px;
      background: #ffb267;
      border-radius: 10px;
      padding: 4px 10px;
      font-size: 10px;
    }
    .footer-btn {
      width: 100%;
      button {
        width: 45%;
        height: 35px;
        color: #fff;
        border: none;
        border-radius: 25px;
        margin: 2%;
      }
      .btn-primay {
        background-color: #1989fa;
      }
    }
  }
}
</style>
