<template>
  <div>
    <div class="red">{{Message}}</div>
  </div>
</template>

<script>
export default {
  name: 'messageError',
  props: {
    Message: {
      type: String,
      request: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.red {
  color: red;
  text-align: left;
  // padding-top: 10px;
}
</style>
