<script setup>

import { useMainStore } from '@/stores/modules/main'

const mainStore = useMainStore()

</script>

<template>

<div class="loading" v-if="mainStore.isLoading">
  <div class="gif">
    <img src="@/assets/img/home/full-screen-loading.gif" alt="加载中">
  </div>
</div>

</template>

<style lang="less" scoped>

.loading{
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: rgba(0,0,0,.1);

  .gif{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;

    background-image: url(@/assets/img/home/loading-bg.png);
    background-size: 100% 100%;
    img{
      width: 70px;
      height: 70px;
      margin-bottom: 8px;
    }
  }
}

</style>