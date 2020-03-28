<template>
  <div class="mixins">
    <div flex-v style="align-items: center;">
      混入的模板
      <el-button size="mini" @click="stealBook">混入的方法</el-button>
    </div>
    <div style="padding:20px;">
      <div v-focus></div>
    </div>
    <div style="padding:20px;border: 1px solid #cc7b0d;text-align: left;" contenteditable="true">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { mixins } from './test-mixin'
export default {
  mixins: [mixins],
  props: {
    name: 'center'
  },
  data () {
    return {
      showLoading: false,
      inputValue: ''
    }
  },
  directives: {
    focus: {
      inserted (el, binding) {
        console.log(binding)
        el.innerHTML = '请输入内容'
      }
    }
  },
  mounted () {
    console.log(111111)
    this.init()
  },
  methods: {
    init () {
      this.showLoading = true
    }
  }
}
</script>
