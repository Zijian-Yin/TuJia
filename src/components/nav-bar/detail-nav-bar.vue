<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

function iconClick(){
  router.back()
}

</script>

<template>

<div class="nav-bar">
  <div class="left-icon" @click="iconClick">
    <img src="@/assets/img/common/icon_nav_back.png" alt="">
    <img src="@/assets/img/common/mob-TjHeader-header-logo.png" alt="返回">
  </div>
  <div class="title">房屋详情</div>
  <div class="right-icon">
    <img src="@/assets/img/common/mob-TjHeader-header-right.png" alt="">
  </div>
</div>

</template>

<style lang="less" scoped>
.nav-bar{
  padding: 14px 0;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-icon{
    padding-left: 18px;
    padding-right: 5px;
    width: 75px;

    display: flex;
    :first-child{
      width: 8px;
      margin-right: 4px;
    }
    :last-child{
      width: 32px;
    }
  }
  
  .right-icon{
    margin-right: 20px;
    margin-left: 35px;
    img{
      width: 20px;
    }
  }

}
</style>