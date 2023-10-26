<script setup>

import { useHomeStore } from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const {categories} = storeToRefs(homeStore)

</script>

<template>

<div class="categories w">
  <div class="item" v-for="item in categories" :key="item.id">
    <img :src="item.pictureUrl" alt="">
    <span>{{ item.title }}</span>
  </div>
</div>

</template>

<style lang="less" scoped>

.categories{
  display: flex;
  overflow-x: auto;

  &::-webkit-scrollbar{
    display: none;
  }
  .item{
    width: 50px;
    
    flex-shrink: 0;
    text-align: center;
    margin-right: 20px;

    &:last-child{
      margin-right: 0;
    }
    img{
      width: 32px;
      height: 32px;

      margin: 0 auto;
    }
    span{
      font-size: 12px;
    }
  }
}

</style>