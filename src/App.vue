<template>
  <div id="app">
    <router-view/>
    <tabbar>
      <tabbar-item path="/home">
        <img slot="item-icon" src="./assets/img/t1_2.png">
        <img slot="item-icon-active" src="./assets/img/t1_1.png">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item>
        <img slot="item-icon" src="./assets/img/t2_2.png">
        <img slot="item-icon-active" src="./assets/img/t2_1.png">
        <div slot="item-text">分类</div>
      </tabbar-item>
       <tabbar-item>
        <img slot="item-icon" src="./assets/img/t6_2.png">
        <img slot="item-icon-active" src="./assets/img/t6_1.png">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item>
        <img slot="item-icon" src="./assets/img/t5_2.png">
        <img slot="item-icon-active" src="./assets/img/t5_1.png">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/common/tabbar/Tabbar'
import TabbarItem from '@/components/common/tabbar/TabbarItem'
export default {
  name: 'App',
  components:{
    Tabbar,
    TabbarItem

  },
  data() {
    return {
      
    }
  },
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
