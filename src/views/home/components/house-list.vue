<script setup>
import houseCardV3 from '@/components/house-cards/house-card-v3.vue'
import houseCardV9 from '@/components/house-cards/house-card-v9.vue'

import { useHomeStore } from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const homeStore = useHomeStore()
const { houseList } = storeToRefs(homeStore)

const router = useRouter()

function houseCardClick(item){
  router.push("/detail/" + item.houseId)
}

</script>

<template>

<div class="house-list">
  <template v-for="item in houseList" :key="item.data.houseId">
    <house-card-v9
     v-if="item.discoveryContentType === 9"
     :item-data="item.data"
     @click="houseCardClick(item.data)"
     />
    <house-card-v3
     v-else-if="item.discoveryContentType === 3"
     :item-data="item.data"
     @click="houseCardClick(item.data)"
     />
  </template>
</div>

</template>

<style lang="less" scoped>

.house-list{
  display: flex;
  flex-wrap: wrap;
  padding: 16px 12px;

  background: #f5f7f9;
}

</style>