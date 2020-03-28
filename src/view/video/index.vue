<template>
  <div class="myVideo">
    <div class="animated" :class="{lightSpeedIn: showRotate}">
      <div class="previewImg" v-for="(item, index) in imgList" :key="index">
        <img :src="item.src" :alt="item.title">
      </div>
    </div>
    <div class="footer-img">
      <img class="animated" :class="{fadeInDown: showRotate}" src="@/assets/image/home/05.jpeg">
    </div>
    <div style="padding: 40px;" flex-v>
      <span>{{formatedDate}}</span>
      <span>显示转化后的日期</span>
      <span>†㊤</span>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
import moment from 'moment'
import './inherit'
export default {
  name: 'index',
  props: {},
  data () {
    return {
      formatedDate: '',
      showRotate: false,
      imgList: [
        {
          src: require('@/assets/image/home/01.jpg'),
          title: '第一张图'
        },
        {
          src: require('@/assets/image/home/02.jpg'),
          title: '第二张图'
        },
        {
          src: require('@/assets/image/home/03.jpeg'),
          title: '第三张图'
        },
        {
          src: require('@/assets/image/home/04.jpg'),
          title: '第四张图'
        }
      ],
      level: 2,
      value: 'createEl'
    }
  },
  created () {
    const date = new Date().getTime()
    console.log(moment().endOf('day').valueOf()) // 当天最后时间的时间戳
    console.log(moment().endOf('week'))
    console.log(moment().endOf('month').format('YYYY.MM.DD'))
    console.log(date)
    console.log(moment(date).format('YYYY-MM-DD'))
  },
  beforeCreate: function () {
    // 插入排序
    function insertionSort (arr) {
      const leng = arr.length
      let preIndex, current
      for (let i = 1; i < leng; i++) {
        preIndex = i - 1
        current = arr[i]
        while (preIndex >= 0 && arr[preIndex] > current) {
          arr[preIndex + 1] = arr[preIndex]
          preIndex--
        }
        arr[preIndex + 1] = current
      }
      console.log(arr)
      return arr
    }

    insertionSort([50, 30, 56, 45, 96, 74])

    // 闭包
    function compare () {
      const result = []
      for (let i = 0; i < 10; i++) {
        result[i] = function () {
          return i
        }
      }
      return result
    }

    const result = compare()
    for (let j = 0; j < 10; j++) {
      console.log(result[j]())
    }
    // Proxy
    // const obj = new Proxy({}, {
    //   get (target, key, receiver) {
    //     return Reflect.get(target, key, receiver)
    //   },
    //   set (target, key, value, receiver) {
    //     return Reflect.set(target, key, value, receiver)
    //   }
    // })
    // document.ready = function (callback) {
    //   if (document.addEventListener) {
    //     document.addEventListener('DOMContentLoaded', function () {
    //       // eslint-disable-next-line no-caller
    //       document.removeEventListener('DOMContentLoaded', arguments.callee, false)
    //       callback()
    //     })
    //   } else if (document.attachEvent) {
    //     document.attachEvent('onreadystatechange', function () {
    //       if (document.readyState === 'complete') {
    //         // eslint-disable-next-line no-caller
    //         document.detachEvent('onreadystatechange', arguments.callee)
    //         callback()
    //       }
    //     })
    //   }
    // }
    // symbol类型
    const sym = Symbol('new symbol')
    console.log(sym)
    const obj = {
      age: 18,
      [sym]: 'symbolName'
    }
    // console.log(Reflect.ownKeys(obj))
    console.log(Object.getOwnPropertySymbols(obj))
    // Error对象的使用
    // throw new Error('程序抛出了一个错误信息')
    // const set = new Set()
    // set.add(9, 10, 26, 44, 88) // 只能一个一个添加
    // console.log(set.has(10))
    let str = 'my_s5678_l870_m444'
    str = str.replace(/_(\w)/g, (all, second) => {
      return second.toUpperCase()
    })
    console.log(str)
    console.log(Object.getOwnPropertyDescriptor({
      name: {
        sex: 0
      }
    }, 'name').get)
    const BJ = {}
    const CASE_COUNT = Symbol('') // 不传值就报错  特么的
    Object.defineProperty(BJ, CASE_COUNT, {
      value: 'zhangsan'
    })
    console.log(BJ)
    console.log(BJ[CASE_COUNT])
    console.log(Object.getOwnPropertyDescriptor(BJ, CASE_COUNT))
    console.log(new Set([3, 2, 1, 3, 2]).size)
    console.log([...Array(2).keys()])
    let thousand = '10056856910'
    let sot = thousand.replace(/\d{1,3}(?=(\d{3})+$)/g, g => (g + ','))
    // 末尾保留三位数字  并查找前面的一到三个数字  末尾的三个数字至少出现一次
    console.log(sot)
    const qiuqiu = '10str'.replace(/([\d\w\W]{1,3})(?=([\d\w\W]{3})+$)/g, res => (res + ','))
    console.log(qiuqiu)
    const rules = sot.replace(/\d{3,}\$$/g, res => res)
    console.log(rules)
  },
  destroyed () {
    console.log('已离开当前页面')
  },
  directives: {
    fileMiter: {
      inserted (el, binding) {
        el.innerText = 'fileMiter'
        console.log(binding)
      }
    }
  },
  mounted () {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true
    })
    wow.init()
    this.init()
    this.testRandom()
    this.getNodes()
  },
  // 实例化视频组件
  methods: {
    // shuzude chongfu
    testRandom () {
      const arr = Array.apply(null, {length: 20})
      console.log(arr)
    },
    init () {
      setTimeout(() => {
        this.showRotate = true
      }, 1000)
    },
    getNodes () {
      const ul = document.createElement('ul')
      const li = document.createElement('li')
      li.innerText = '这是新增的LI'
      li.style.listStyle = 'none'
      ul.appendChild(li)
      ul.style.padding = '40px'
      document.querySelector('.myVideo').appendChild(ul)
    }
  }
}
</script>
<style scoped lang="stylus">
  .myVideo
    padding-bottom 300px
    &-container
      width 600px
      height 400px
      position relative
      .defaultImg
        position absolute
        left 0
        top 0
        width 100%
        height 100%
  .facebook-enter-active, .facebook-leave-active {
    transition: opacity 2s;
  }
  .facebook-enter, .facebook-leave-to {
    opacity: 0;
  }
  .previewImg
    width 256px
    height: 144px
    padding 36px 64px
    margin-top: 20px
    border 1px solid rgba(233, 79, 5, 0.1)
    &:hover
      img
        transform scale(1.5)
    img
      width 100%
      height: 100%
      transition all 1s linear
      -webkit-transition all 1s linear
  .footer-img
    margin-top: 100px
    width 300px
    height: 200px
    img
      width 100%
      height: 100%
</style>
