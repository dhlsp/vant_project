<template>
  <div>
    <div class="user-header">
      <div class="title">VUE账号</div>
      <div class="user-content">
        <div class="user-wrapper">
          <span class="portrait icon-aliens"></span>
          <div class="user-detail">
            <p class="name">{{$store.state.User.account}}</p>
            <p class="acoount">1471809</p>
          </div>
        </div>
        <p class="security">安全等级75分存在1项风险</p>
      </div>
      <!-- 基础资料 -->
      <div class="base">
        <div class="base-title">基础资料</div>
        <div class="base-list">
          <!-- 账号密码 -->
          <div class="list-item">
            <p class="icon-start">
              <img src="../../assets/images/user/pwd.svg">
            </p>
            <div class="list-item-inner border-1px">
              <div class="list-item-text">账号密码</div>
              <div class="list-item-note">
                <span class="v-note-text">修改</span>
                <span class="v-note-icon">
                  <img src="../../assets/images/user/right.svg">
                </span>
              </div>
            </div>
          </div>
          <!-- 安全邮箱 -->
          <div class="list-item">
            <p class="icon-start">
              <img src="../../assets/images/user/mailbox.svg">
            </p>
            <div class="list-item-inner border-1px">
              <div class="list-item-text">安全邮箱</div>
              <div class="list-item-note">
                <span class="v-note-text">修改</span>
                <span class="v-note-icon icon-keyboard_arrow_rightF9">
                  <img src="../../assets/images/user/right.svg">
                </span>
              </div>
            </div>
          </div>
          <!-- 安全手机 -->
          <div class="list-item">
            <p class="icon-start">
              <img src="../../assets/images/user/phone.svg">
            </p>
            <div class="list-item-inner border-1px">
              <div class="list-item-text">安全手机</div>
              <div class="list-item-note">
                <span class="v-note-text">修改</span>
                <span class="v-note-icon icon-keyboard_arrow_rightF9">
                  <img src="../../assets/images/user/right.svg">
                </span>
              </div>
            </div>
          </div>
          <!-- 密保问题 -->
          <div class="list-item">
            <p class="icon-start">
              <img src="../../assets/images/user/encrypted.svg">
            </p>
            <div class="list-item-inner border-1px">
              <div class="list-item-text">密保问题</div>
              <div class="list-item-note">
                <span class="v-note-text">修改</span>
                <span class="v-note-icon icon-keyboard_arrow_rightF9">
                  <img src="../../assets/images/user/right.svg">
                </span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <!-- 推荐使用 -->
      <div class="base">
        <div class="base-title">推荐使用</div>
        <div class="base-list">
          <!-- 安全令牌 -->
          <div class="list-item">
            <p class="icon-start">
              <img src="../../assets/images/user/token.svg">
            </p>
            <div class="list-item-inner border-1px">
              <div class="list-item-text">安全令牌</div>
              <div class="list-item-note">
                <span class="v-note-text">修改</span>
                <span class="v-note-icon">
                  <img src="../../assets/images/user/right.svg">
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 其他 -->
      <div class="base">
        <div class="base-title">其他</div>
        <div class="base-list">
          <!-- 个人资料 -->
          <div class="list-item">
            <p class="icon-start">
              <img src="../../assets/images/user/set.svg">
            </p>
            <div class="list-item-inner border-1px">
              <div class="list-item-text">个人资料</div>
              <div class="list-item-note">
                <span class="v-note-text">修改</span>
                <span class="v-note-icon">
                  <img src="../../assets/images/user/right.svg">
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="logout">
        <button>退出登录</button>
      </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar';

export default {
  name: 'User',
  components: {
    Tabbar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.user-header {
  background: #f6f6f6;
  // position: absolute;
  width: 100%;
  height: 100%;
  text-align: left;
  padding-bottom: 50px;
  .title{
    padding: 10px 20px;
    height: 30px;
    font-size: 16px;
    line-height: 30px;
    color: #ff6a2a;
    font-weight: 700;
    background: #f6f6f6;
  }
  .user-content {
    background: #fff;
    .user-wrapper{
      padding: 10px 0;
      margin: 0 20px;
      font-size: 0px;
      display: flex;
      border-bottom: 1px solid #ccc;
      .portrait{
        font-size: 40px;
        display: inline-block;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border: solid 1px #7e7575;
        border-radius: 50%;
      }
      .icon-aliens {
        background-image: url('../../assets/images/user/aliens.svg');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
      .user-detail{
        display: inline-block;
        margin-left: 10px;
        flex: 1;
        font-size: 14px;
        p {
          margin: 0;
        }
        .name{
          height: 30px;
          line-height: 30px;
          font-weight: bold;
          font-size: large;
        }
      }
    }
    p {
      margin: 0;
    }
    .security{
      background-color: #fff;
      font-size: 16px;
      padding: 16px;
    }
  }
  // 基础数据
  .base {
    .base-title {
      padding: 16px;
      font-size: 14px;
    }
    .base-list {
      background-color: #fff;
      .list-item{
        display: flex;
        font-size: 16px;
        padding-left: 16px;
        border-bottom: 1px solid #aeacb4;
        .icon-start{
          display: inline-block;
          margin: 8px 16px 8px 0;
          font-size: 2.8rem;
          color:#aeacb4;
          vertical-align: middle;
        }
        .list-item-inner{
          display: flex;
          flex: 1;
          line-height: 2.7rem;
          .list-item-text{
            flex: 1;
            display: inline-block;
            margin: 12px 8px 11px 0;
          }
          .list-item-note{
            display: inline-block;
            margin: 12px 8px 11px 0;
            color: #aeacb4;
            .v-note-text{
              margin-right: 8px;
              vertical-align: middle;
            }
            .v-note-icon{
              font-size: 2.8rem;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
  .logout{
    padding: 16px;
    button {
      display: block;
      clear: both;
      width: 100%;
      contain: strict;
      margin-left: 0;
      margin-right: 0;
      border-radius: 64px;
      padding: 0 2.6rem;
      color: #fff;
      background-color: #488aff;
      height: 50px;
      font-size: 16px;
      border: none;
    }
  }
}
</style>
