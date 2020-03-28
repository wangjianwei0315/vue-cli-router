<template>
  <div class="child">
    <ul>
      <li v-for="(item, index) in deviceList" :key="index + item.id" flex-v>
        <div>{{item.name}}</div>
        <img :src="item.proto.img">
        <el-button size="mini" type="error" @click="changeImg(item.proto)">点击换图</el-button>
      </li>
    </ul>
    <div>
      <el-button type="success" @click="reload">重载</el-button>
    </div>
    <div>
      <child-header ref="childHeader" :innerValue="value" @input="valueChange"></child-header>
      <el-button type="warning" @click="showChild">显示/隐藏组件</el-button>
    </div>
  </div>
</template>

<script>
import ChildHeader from './child-header'
export default {
  name: 'child',
  inject: ['reload'],
  components: {
    ChildHeader
  },
  data () {
    return {
      deviceList: [
        {name: '红星一号', id: 1, proto: {type: 10, img: require('@/assets/image/home/01.jpg')}},
        {name: '红星二号', id: 2, proto: {type: 20, img: require('@/assets/image/home/01.jpg')}},
        {name: '红星三号', id: 3, proto: {type: 30, img: require('@/assets/image/home/01.jpg')}},
        {name: '红星四号', id: 4, proto: {type: 40, img: require('@/assets/image/home/01.jpg')}}
      ],
      value: 'ALANDATIANWANGE'
    }
  },
  watch: {
    '$route': 'routeChange'
  },
  mounted () {
    this.initData()
    console.log(this.$root)
    const unwatch = this.$watch('deviceList', () => {
      this.$message.success('deviceList 发生了改变')
      if (unwatch) unwatch() // 调用unwatch结束监听  只监听一次
    }, {deep: true})
  },
  methods: {
    routeChange () {
      console.log('routerchange')
    },
    valueChange (value) {
      console.log(value)
      this.value = value
    },
    changeImg (proto) {
      if (proto.img === require('@/assets/image/home/04.jpg')) proto.img = require('@/assets/image/home/01.jpg')
      else proto.img = require('@/assets/image/home/04.jpg')
    },
    initData () {
      this.$refs.childHeader.hide()
    },
    showChild () {
      this.$confirm('do you want to show or hide the component', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消'
      }).then(() => {
        if (!this.confirm) {
          this.$message.success('SUCCESS OF CONFIRM')
        }
        console.log(this.$route.matched)
        if (this.$refs.childHeader.showChild) {
          this.$refs.childHeader.hide()
        } else this.$refs.childHeader.show()
      }).catch(() => false)
    }
  }
}
</script>
<style scoped lang="stylus">
  .child
    padding-bottom 100px
    background #f6f6f6
    ul
    li
      list-style none
      width 300px
      padding 20px 0
      align-items center
      justify-content flex-start
      img
        width 200px
        margin-bottom 10px
</style>
