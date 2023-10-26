<script setup>
import {ref} from 'vue'
import { storeToRefs } from 'pinia';
import {useCityStore} from '@/stores/modules/city'
import { useRouter } from 'vue-router';

import cityGroup from './components/city-gruop.vue'

const cityStore = useCityStore()
cityStore.fetchAllCity()
const { allCity } = storeToRefs(cityStore)

const router = useRouter()
const activeName = ref()

const onCancel = () => {router.back()};


</script>

<template>

<div class="city top-page">
  
  <div class="search">
    <form action="/">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      shape="round"
      @search="onSearch"
      @cancel="onCancel"
    />
    </form>
  </div>

  <diy class="group">
    <van-tabs v-model:active="activeName" color="#ff9854" >
    <van-tab :title="value.title" :name="key" v-for="(value, key) in allCity" :key="key"/>
    </van-tabs>
  </diy>

  <div class="content">
    <tampalte v-for="(value, key) in allCity" :key="key">
      <city-group :cityData="value" v-show="key === activeName"/>
    </tampalte>
  </div>
  
</div>

</template>

<style lang="less" scoped>

.city{
  .group{
    position: realative;
    z-index: 10;
  }
  .content{
    height: calc(100vh - 98px);

    overflow-y: auto;
  }
}

</style>