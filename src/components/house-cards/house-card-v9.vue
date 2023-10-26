<script setup>

import { computed } from 'vue';

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

const value = computed(() => {
  return Number(props.itemData.commentScore)
});

</script>

<template>

<div class="v9">
  <div class="item">
    <div class="cover">
      <img :src="itemData?.image?.url" alt="">
    </div>
    <div class="infos">
      <div class="summary-text">{{ itemData.summaryText }}</div>
      <div class="house-name">{{ itemData.houseName }}</div>
      <van-rate v-model="value" :size="16" color="#eee" allow-half readonly/>
      <span>￥{{ itemData.finalPrice }}</span>
    </div>
  </div>
</div>

</template>

<style lang="less" scoped>

.v9{
  width: 50%;
  .item{
    position: relative;
    margin: 4px;
    .cover{
      img{
        border-radius: 6px;
        width: 100%;
      }
    }
    .infos{
      width: 100%;
      position: absolute;
      padding: 8px 10px;
      bottom: 0;

      color: white;

      .summary-text{
        font-size: 10px;
      }
      .house-name{
        margin-top: 4px;
        margin-bottom: 10px;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 14px;
      }
      span{
        float: right;
      }
    }
  }
}

</style>