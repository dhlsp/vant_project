<template>
	<div class="store_header">
		<div class="store_avatar">
			<img src="../../../assets/images/avatar_default.png" alt="头像" width="55" height="55">
		</div>
		<div class="store_name">登录</div>
	</div>
</template>

<script>
export default {
  name: 'loginHeader',
};
</script>

<style lang="scss" scoped>
.store_header {
  text-align: center;
  padding: 80px 0 30px;
  .store_avatar img {
    border-radius: 50%;
  }
  .store_name {
    padding-top: 5px;
    font-size: 16px;
  }
}
</style>
