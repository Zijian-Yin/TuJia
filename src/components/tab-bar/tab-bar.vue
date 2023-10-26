<script setup>
import {ref} from 'vue'

const index = ref(0)
const icons = {
  home: {
    inactive: 'src/assets/img/tabbar/tab_home.png',
    active: 'src/assets/img/tabbar/tab_home_active.png'
  },
  favor: {
    inactive: 'src/assets/img/tabbar/tab_favor.png',
    active: 'src/assets/img/tabbar/tab_favor_active.png'
  },
  order: {
    inactive: 'src/assets/img/tabbar/tab_order.png',
    active: 'src/assets/img/tabbar/tab_order_active.png'
  },
  message: {
    inactive: 'src/assets/img/tabbar/tab_message.png'
  }
}

</script>

<template>

<div class="tab-bar">
  <van-tabbar route v-model="index" active-color="#ff9854">
    <van-tabbar-item replace to="/home">
      <span>主页</span>
      <template #icon="props">
        <img :src=" props.active ? icons.home.active : icons.home.inactive " />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/favor">
      <span>收藏</span>
      <template #icon="props">
        <img :src=" props.active ? icons.favor.active : icons.favor.inactive " />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/order">
      <span>订单</span>
      <template #icon="props">
        <img :src=" props.active ? icons.order.active : icons.order.inactive " />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/message">
      <span>消息</span>
      <template #icon="props">
        <img :src=" icons.message.inactive " />
      </template>
    </van-tabbar-item>
  </van-tabbar>

</div>

</template>

<style lang="less" scoped>

:deep(.van-tabbar-item__icon img) { height: 26px; }
  
</style>