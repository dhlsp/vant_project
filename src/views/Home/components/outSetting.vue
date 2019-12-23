<template>
  <div class="setting" @click="hide">
    <div class="avatar-dropdown">
      <ul>
        <li @click="signOut"><div class="user">登出</div></li>
        <li @click="openUser"><div class="user">我的信息</div></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'outSetting',
  data() {
    return {
      show: false,
    };
  },
  methods: {
    hide() {
      this.$emit('hideSet');
    },
    signOut() {
      this.$router.push('/login');
    },
    openUser() {
      this.$router.push('/user');
    },
  },
};
</script>

<style lang="scss" scoped>
.setting {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: rgba(233, 5, 5, 0.356);
  .avatar-dropdown {
    position: absolute;
    right: 5px;
    z-index: 1;
    top: 40px;
    width: 80px;
    box-shadow: 5px 10px 15px 2px rgba(0,0,0,0.1);
    border-radius: 5px;
    background-color: #ffffff;
    .ivu-select-dropdown {
      padding-top: 0;
    }
    .user {
      text-align: center;
      font-size: 14px;
      padding: 7px 0;
    }
  }
}
</style>
