<template>
  <div class="search">
    <div class="search-top" flex-c>
      <input type="text" v-model="keyWords" @input="wordsChange" class="search-top-input">
      <span class="search-top-btn" @click="sousuo">搜索</span>
      <div class="search-top-bottom" v-if="list.length">
        <ul>
          <li v-for="(item, index) in list" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    const uuid = require('uuid')
    return {
      list: [],
      uuid: uuid,
      wordsList: [
        '关键字查询',
        '图片查询',
        '海报查询',
        'asSSAFAS查询',
        'asSSAFAS查询',
        'asSSAFAS查询',
        'asSSAFAS查询',
        '第一个图片',
        '第一个图片',
        '第一个图片',
        '第一个图片',
        '第一个图片',
        '第一个图片',
        '第一个图片',
        '第一个图片',
        '第一个图片',
        'asSSAFAS查询',
        'asSSAFAS查询',
        'asSSAFAS查询',
        'asSSAFAS查询',
        '如果data是一个对象，那么如果这个组件被多个组件引用的话，data中的' +
        '值一改变，所有的引用该组件的值都会发生改变，而如果是一个函数的话，每次都return一个' +
        '新对象，组件之间得引用互不干扰'
      ],
      keyWords: ''
    }
  },
  methods: {
    sousuo () {
      setImmediate(() => {
        console.log('how how how')
      })
    },
    wordsChange (e) {
      this.list.length = 0
      if (this.keyWords) {
        this.wordsList.map(item => {
          if (item.indexOf(this.keyWords) !== -1) {
            this.list.push(item)
          }
        })
        if (this.list.length) {
          this.list = this.list.map(item => item + this.uuid.v1().toUpperCase())
        }
      }
    }
  }
}
</script>
<style scoped lang="stylus">
  .search
    padding 20px
    width 600px
    background #f5f5f5
    height: 1000px
    &-top
      padding 10px 0
      position relative
      box-sizing border-box
      height: 80px
      &-input
        height: 56px
        line-height: 56px
        padding 0 10px
        font-size: 18px
        color #333
        flex 1
        border-radius 10px
        -webkit-appearance none
        outline none
      &-btn
        height: 60px
        line-height: 60px
        font-size: 20px
        color #fff
        width 120px
        text-align center
        background #0bc367
        margin-left: 10px
        border-radius 10px
      &-bottom
        position absolute
        left: 0
        top: 80px
        width 100%
        max-height:200px
        overflow-y auto
        background: #fff
        ul
        li
          list-style none
          margin: 0
          padding: 0
        li
          padding 10px
          font-size: 18px
          color #333
          text-align left
</style>
