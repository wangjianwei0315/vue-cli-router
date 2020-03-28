<template>
  <div class="child-header" v-if="showChild">
    <div flex-between class="top">
      <input type="text" v-model="value" @change="reversValue">
    </div>
  </div>
</template>

<script>
export default {
  name: 'child-header',
  props: {
    innerValue: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      showChild: true,
      value: this.innerValue
    }
  },
  created () {
    setTimeout(() => {
      this.$off('input') // 移除input事件
    }, 10000)
  },
  methods: {
    hide () {
      this.showChild = false
    },
    show () {
      this.showChild = true
    },
    reversValue () {
      this.$emit('input', this.value)
    }
  }
}
</script>
<style scoped lang="stylus">
  .child-header
    .top
      width 200px
      padding 20px 0
</style>
