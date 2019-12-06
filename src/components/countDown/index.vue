<template>
  <div class="CountDown">
    <span>{{minute}}秒{{countText}}</span>
  </div>
</template>

<script>
export default {
  name: 'countDown',
  props: {
    countTime: {
      type: Number,
      required: true,
    },
    countText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      minute: 60,
    };
  },
  watch: {
    countText: {
      handler(val) {
        console.log('val', val);
      },
    },
    countTime: {
      handler(val) {
        this.minutes = val;
      },
      deep: true,
      immediate: true,
    },
    'minutes': {
      handler(newVal) {
        if (newVal >= 0) {
          // this.minute = newVal;
          this.add(newVal);
        }
      },
    },
  },
  created() {
    this.minute = this.countTime;
    this.add(this.countTime);
  },
  methods: {
    add(num) {
      let time = window.setInterval(() => {
        if (num !== 0 && num > 0) {
          this.minute = this.minutes;
          this.minutes -= 1;
          if (this.minutes < 0) {
            this.$emit('countdownend');
            window.clearInterval(time);
          }
        } else if (num === 0) {
          this.$emit('countdownend');
          window.clearInterval(time);
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.CountDown {
  // 并列
  display: inline;
  color: red;
}
</style>
