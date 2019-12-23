<template>
  <div>
    <div class="home">
      <div class="header">
        <div class="header-wrapper">
          <div class="header-left">
            <div class="top-bar-user" @click="showSetting">{{avatarText}}</div>
          </div>
          <div class="header-middle">
            <!-- <div>
              <input>
            </div> -->
          </div>
          <div class="header-right">
            <span class="logo" @click="showUser"></span>
          </div>
        </div>
      </div>
      <out-setting v-show="isUser" @hideSet="hideUser"></out-setting>
      <!-- <div class="avatar-dropdown" v-show="isUser">
        <ul>
          <li @click="signOut"><div class="user">登出</div></li>
          <li @click="openUser"><div class="user">我的信息</div></li>
        </ul>
      </div> -->

      <transition>
        <div v-show="userSettingShow" class="user-setting">
          <div class="mask" @click="hideSetting"></div>
          <div class="setting-wrapper">
            <div class="setting-content">
              <div class="setting-header">
                <div class="setting-logo" ref="settingLogo"></div>
                <p class="user-name" ref="userName">参展系统</p>
              </div>
              <ul class="menu-list" ref="menuList">
                <li>
                  <i><img src="../../assets/images/weather/cloud-rain.svg"></i>
                  <span>cloud-rain</span>
                </li>
                <li>
                  <i><img src="../../assets/images/weather/cloud-snow.svg"></i>
                  <span>cloud-snow</span>
                </li>
                <li>
                  <i><img src="../../assets/images/weather/cloud-sun-rain.svg"></i>
                  <span>cloud-sun-rain</span>
                </li>
                <li>
                  <i><img src="../../assets/images/weather/cloud-sun-snow.svg"></i>
                  <span>cloud-sun-snow</span>
                </li>
                <li>
                  <i><img src="../../assets/images/weather/cloud-sun-thunder.svg"></i>
                  <span>cloud-sun-thunder</span>
                </li>
                <li>
                  <i><img src="../../assets/images/weather/cloud-sun-wind.svg"></i>
                  <span>cloud-sun-wind</span>
                </li>
                <li>
                  <i><img src="../../assets/images/weather/cloud-wind.svg"></i>
                  <span>cloud-wind</span>
                </li>
                <li>
                  <i><img src="../../assets/images/weather/cloud.svg"></i>
                  <span>cloud</span>
                </li>
                <li>
                  <i><img src="../../assets/images/weather/haze.svg"></i>
                  <span>haze</span>
                </li>
                <li>
                  <i><img src="../../assets/images/weather/sun-freezing.svg"></i>
                  <span>sun-freezing</span>
                </li>
                <li>
                  <i><img src="../../assets/images/weather/sun-hazy.svg"></i>
                  <span>sun-hazy</span>
                </li>
                <li>
                  <!-- <i class="icon-uniF1B3F9"></i> -->
                  <i><img src="../../assets/images/weather/sun-melting.svg"></i>
                  <span>sun-melting</span>
                </li>
                <li>
                  <i><img src="../../assets/images/weather/sun-moon.svg"></i>
                  <span>sun-moon</span>
                </li>
                <li>
                  <i><img src="../../assets/images/weather/sun.svg"></i>
                  <span>sun</span>
                </li>
                <li>
                  <i><img src="../../assets/images/weather/temperature-cold.svg"></i>
                  <span>temperature-cold</span>
                </li>
                <li>
                  <i><img src="../../assets/images/weather/temperature-hot.svg"></i>
                  <span>temperature-hot</span>
                </li>
                <li>
                  <i><img src="../../assets/images/weather/wind.svg"></i>
                  <span>wind</span>
                </li>
                <li>
                  <i><img src="../../assets/images/weather/windsock.svg"></i>
                  <span>windsock</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- <transition>
      <div v-show="userSettingShow" class="user-setting">
        <div class="mask" @click="hideSetting"></div>
        <div class="setting-wrapper">
          <div class="setting-content">
            <div class="setting-header">
              <div class="setting-logo" ref="settingLogo"></div>
              <p class="user-name" ref="userName">参展系统</p>
            </div>
            <ul class="menu-list" ref="menuList">
              <li>
                <i class="icon-uniF083F9"></i>
                <span>我的首页</span>
              </li>
              <li>
                <i class="icon-uniF133F9"></i>
                <span>广告产品</span>
              </li>
              <li>
                <i class="icon-uniF1B3F9"></i>
                <span>历史案例</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition> -->

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import outSetting from './components/outSetting';
import Tabbar from '@/components/Tabbar';

export default {
  name: 'Home',
  data() {
    return {
      isUser: false,
      userSettingShow: false,
    };
  },
  computed: {
    avatarText() {
      // return 'A';
      console.log('this.$store.state.User', this.$store.state);
      if (this.$store.state.User.account) {
        return this.$store.state.User.account.substring(0, 1).toUpperCase();
      } else {
        return '';
      }
    },
  },
  methods: {
    // 左边
    showSetting() {
      this.userSettingShow = true;
    },
    hideSetting() {
      this.userSettingShow = false;
    },
    // 右边
    showUser() {
      this.isUser = true;
    },
    hideUser() {
      this.isUser = false;
    },
    signOut() {
      this.$router.push('/login');
    },
    openUser() {
      this.$router.push('/user');
    },
  },
  components: {
    Tabbar,
    outSetting,
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  .header {
    background-color: #006eff;
    .header-wrapper {
      height: 50px;
      display: flex;
      .header-left {
        align-items: center;
        display: flex;
        .top-bar-user {
          display: inline-block;
          width: 30px;
          height: 30px;
          margin: 10px;
          line-height: 32px;
          border-radius: 50%;
          background-color: #fff;
          color: #000;
          font-size: 15px;
          font-weight: 400;
          text-align: center;
          cursor: pointer;
        }
      }
      .header-middle{
        display: flex;
        flex: 1;
        align-items: center;
      }
      .header-right {
        display: flex;
        align-items: center;
        .logo {
          display: inline-block;
          width: 30px;
          height: 30px;
          margin: 10px;
          background-image: url('../../assets/images/line.svg');
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
    }
  }

  .avatar-dropdown {
    position: absolute;
    right: 5px;
    z-index: 1;
    top: 40px;
    width: 80px;
    box-shadow: 5px 10px 15px 2px rgba(0,0,0,0.1);
    border-radius: 5px;
    background-color: #fff;
    // padding: 5px;
    .ivu-select-dropdown {
      padding-top: 0;
    }
    .user-code {
      text-align: center;
      font-size: 14px;
      padding: 7px 0;
      background-color: #009BFD;
      color: #fff;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .user {
      text-align: center;
      font-size: 14px;
      padding: 7px 0;
    }
  }

  .user-setting {
    position: fixed;
    box-sizing: border-box;
    top: 0;
    bottom: 0;
    z-index: 100;
    background: #009BFD;
    .mask {
      position: absolute;
      top: 0;
      width: 100vh;
      height: 100vh;
      backdrop-filter: blur(10px);
      background: rgba(7,17,27,0.3);
      transition: all 0.2s linear;
    }
    .setting-wrapper{
      position: absolute;
      display: inline-block;
      height: 100vh;
      transition: all 0.2s linear;
      .setting-content{
        position: relative;
        box-sizing: border-box;
        width: 220px;
        height: 100%;
        max-width: 100vw;
        padding: 30px 0px 50px;
        background: #fff;
        .setting-header{
          text-align: center;
          .setting-logo{
            display: inline-block;
            width: 40px;
            height: 40px;
            margin: 0px 10px;
            padding-bottom: 8px;
            background-image: url('../../assets/images/avatar_default.png');
            background-size: contain;
            background-repeat: no-repeat;
          }
          .user-name{
            font-size: 16px;
            font-weight: bold;
          }
        }
        .menu-list{
          text-align: left;
          padding: 0px 20px 0px 20px;
          height: 80%;
          overflow-y: scroll;
          li{
            height: 50px;
            line-height: 50px;
            font-size: 14px;
            i{
              margin-right: 6px;
              img {
                width: 20px;
              }
            }
          }
        }
      }
      .other-content{
        display: inline-block;
        position: relative;
        text-align: center;
        box-sizing: border-box;
        width: 220px;
        font-size: 0px;
        background: #fff;
        padding: 20px 10px 0 10px;
        .triangle{
          display: inline-block;
          border-left: solid 6px transparent;
          border-right: solid 6px transparent;
        }
        .triangle{
          border-top: transparent;
          border-bottom: solid 6px #999;
        }
        &.up{
          .triangle{
            border-top: solid 6px #999;
            border-bottom: transparent;
          }
        }
        &.down{
          .triangle{
            border-top: transparent;
            border-bottom: solid 6px #999;
          }
        }
        .other-list{
          text-align: left;
          li{
            display: inline-block;
            text-align: center;
            vertical-align: top;
            font-size: 12px;
            width: 56px;
            padding: 20px 5px;
            color: #333;
            i{
              font-size: 20px;
              color: #999;
            }
            p{
              line-height: 20px;
            }
          }
        }
        .law{
          position: absolute;
          margin: 0 auto;
          font-size: 12px;
          width: 100%;
          color: #999;
          bottom: 20px;
        }
      }
    }
  }
}
</style>

