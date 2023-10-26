<script setup>

import tabBar from './components/tab-bar/tab-bar.vue'
import {useRoute} from 'vue-router'
import Loading from '@/components/loading/loading.vue'

const route = useRoute()

</script>

<template>

<div class="app">
  <loading /> 
  <router-view v-slot="{Component}">
    <keep-alive includes="home">
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
  <tab-bar v-show="!route.meta.hideTabbar"/>
</div>

</template>

<style lang="less" scoped>



</style>