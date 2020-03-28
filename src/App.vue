<template>
  <div id="app">
    <keep-alive>
      <router-view class="router-view" v-if="$route.meta.keepAlive && isRouterActive"></router-view>
    </keep-alive>
    <router-view class="router-view" v-if="!$route.meta.keepAlive && isRouterActive"></router-view>
    <div class="bottom-tab">
      <tabbar v-model="tabIndex" v-if="tabbarShow">
        <tabbar-item v-for="(item, index) in tabList" :key="index">
          <img slot="icon" :src="item.icon" alt="">
          <span slot="label">{{item.name}}</span>
        </tabbar-item>
      </tabbar>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'App',
  components: {
    Tabbar,
    TabbarItem
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterActive: true,
      tabList: [
        {name: '首页', icon: require('@/assets/image/home/04.jpg'), link: 'Device'},
        {name: '登录', icon: require('@/assets/image/home/04.jpg'), link: 'Login'},
        {name: '表格', icon: require('@/assets/image/home/04.jpg'), link: 'LoginTable'},
        {name: '视频', icon: require('@/assets/image/home/04.jpg'), link: 'MyVideo'}
      ],
      tabIndex: 0
    }
  },
  computed: {
    ...mapState(['tabbarShow'])
  },
  watch: {
    tabIndex (nv) {
      this.$router.push({name: this.tabList[nv].link})
    }
  },
  methods: {
    reload () {
      this.isRouterActive = false
      this.$nextTick(() => {
        this.isRouterActive = true
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-left: 20px;
}
  .router-view {
    position:relative;
    width: 100%;
  }
.bottom-tab {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 999;
}
</style>
