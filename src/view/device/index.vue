<template>
  <div class="device">
    <el-button size="mini" type="danger" @click="clickBtn">点击提示消息</el-button>
    <div>
      <span>{{defaultIndex}}</span>
      <span>{{defaultStatus}}</span>
    </div>
    <div flex-c>
      <el-button @click="changeCN" type="warning">中文</el-button>
      <el-button @click="changeEN" type="warning">English</el-button>
    </div>
    <div>
      {{$t('user.name')}}
    </div>
    <x-textarea :rows="1" placeholder="请填入内容" :autosize="true" v-model="inputText"></x-textarea>
    <swiper
      class="device-swiper"
      :aspect-ratio="1"
      v-model="imgIndex"
      :list="swiperList"
      dots-position="center"
      :show-dots="false"
      @click.native="imageChange"
      auto loop :interval="3000">
    </swiper>
    <div>
      <previewer ref="previewer" :list="previewerList" :options="{fullscreen: false}"></previewer>
    </div>
    <div class="jsconde" flex>
      <svg id="jscode"></svg>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ObjectAssign from 'object-assign'
import { Previewer } from 'vux'
import JsBarCode from 'jsbarcode'
export default {
  name: 'index',
  components: {
    Previewer
  },
  // LoginTable Login
  data () {
    return {
      tabbarShow: true,
      tabList: [
        {name: '首页', icon: require('@/assets/image/home/04.jpg'), link: 'Device'},
        {name: '登录', icon: require('@/assets/image/home/04.jpg'), link: 'Login'},
        {name: '表格', icon: require('@/assets/image/home/04.jpg'), link: 'LoginTable'}
      ],
      tabIndex: 0,
      imgIndex: 0,
      inputText: '',
      swiperList: [
        {img: require('@/assets/image/home/01.jpg'), id: Math.random(), title: '', url: 'javascript:;'},
        {img: require('@/assets/image/home/02.jpg'), id: Math.random(), title: '', url: 'javascript:;'},
        {img: require('@/assets/image/home/03.jpeg'), id: Math.random(), title: '', url: 'javascript:;'},
        {img: require('@/assets/image/home/04.jpg'), id: Math.random(), title: '', url: 'javascript:;'},
        {img: require('@/assets/image/home/05.jpeg'), id: Math.random(), title: '', url: 'javascript:;'}
      ],
      previewerList: []
    }
  },
  computed: {
    ...mapState('device', ['defaultIndex', 'defaultStatus'])
  },
  mounted () {
    this.previewerList = this.swiperList.map(e => {
      e.src = e.img
      return e
    })
    const p1 = {
      status: 200,
      list: [
        {code: 500, id: 'st', device: '08'}
      ]
    }
    const p2 = {
      status: 500
    }
    ObjectAssign(p2, p1, {status: 4000})
    console.log(p2)
    JsBarCode('#jscode', '15010262121', {
      displayValue: true,
      width: 2,
      height: 50,
      lineColor: '#dd4204'
    })
  },
  methods: {
    imageChange () {
      this.$refs.previewer.show(this.imgIndex)
    },
    clickBtn () {
      this.$message({
        type: 'error',
        showClose: true,
        message: 'Is any message ?',
        offset: 50,
        duration: 3000
      })
    },
    changeCN () {
      this.$i18n.locale = 'zh'
    },
    changeEN () {
      this.$i18n.locale = 'en'
    }
  }
}
</script>
<style scoped lang="stylus">
  .device
    background #fff
    padding-bottom: 100px
    >div
      padding 20px 0
      color #333
      font-size: 30px
      background white
    &-swiper
      width 200px
</style>
