<template>
	<van-tabbar v-model="active" style="z-index: 1999">
		<van-tabbar-item
			v-for="(tab, index) in tabbar"
			:icon="tab.icon"
			:to="tab.path"
			:dot="tab.dot"
			:info="tab.info"
			:key="index">
			{{tab.name}}
		</van-tabbar-item>
	</van-tabbar>
</template>

<script>
export default {
  name: 'Tabbar',
  data() {
    return {
      active: 0,
      tabbar: [
        {
          name: '精选',
          path: '/home',
          pathName: 'HomePage',
          icon: 'compass-full',
          dot: false,
          info: '',
        },
        {
          name: '分类',
          path: '/items',
          pathName: 'Items',
          icon: 'class-full',
          dot: false,
          info: '',
        },
        {
          name: '购物车',
          path: '/order',
          pathName: 'Order',
          icon: 'cart-full',
          dot: false,
          info: '',
        },
        {
          name: '我的',
          path: '/user',
          pathName: 'User',
          icon: 'wode',
          dot: false,
          info: '',
        },
      ],
    };
  },
  watch: {
    $route: 'changeActive',
  },
  created() {
    const toName = this.$route.name;
    this.setActive(toName);
  },
  methods: {
    changeActive({ name }) {
      this.setActive(name);
    },
    setActive(name) {
      this.tabbar.forEach((tab, i) => {
        if (tab.pathName === name) {
          this.active = i;
          return false;
        }
      });
    },
  },
};
</script>
