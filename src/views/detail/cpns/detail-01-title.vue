<script setup>

defineProps({
  topModule:{
    type: Object,
    default: () => ({})
  }
})

</script>

<template>

<div class="title-comment w">
  <div class="title">
    {{ topModule.houseName }}
  </div>
  <div class="tags">
    <template v-for="item in topModule.houseTags">
      <span class="item" 
      v-if="item.tagText"
      :style="{ color:item.tagText.color, background: item.tagText.background?.color }"
      >
      {{ item.tagText.text }}
      </span>
    </template>
  </div>
  <div class="comment brief">
    <span class="score">{{ topModule.commentBrief?.overall }}</span>
    <span class="total-score">{{ topModule.commentBrief?.scoreTitle }}</span>
    <span class="score-text">“{{ topModule.commentBrief?.commentBrief }}”</span>
    <span class="total-count">{{ topModule.commentBrief?.totalCount }}条评论<van-icon name="arrow" /></span>
  </div>
  <div class="map brief">
    <span class="location">{{ topModule.nearByPosition?.address }}</span>
    <span class="map-text">地图·周边<van-icon name="arrow" /></span>
    
  </div>
</div>

</template>

<style lang="less" scoped>

.title-comment{
  .title{
    color: #333;
    font-size: 16px;
    font-weight: 600;
    text-align: justify;
    line-height: 22px;
    letter-spacing: 1px;
    margin: 5px 0;
  }
  .tags{
    margin: 8px 0;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    .item{
      padding: 2px 3px;
      margin-right: 6px;
      line-height: 14px;
    }
  }
  .brief{
    height: 38px;
    line-height: 38px;
    border-radius: 5px;
    background-color: #f7f9fb;
    padding: 0 10px;
  }
  .comment{
    color: #333;
    .score{
      font-size: 18px;
      font-weight: 700;
    }
    .total-score{
      font-weight: 700;
      margin-left: 2px;
      margin-right: 4px;
    }
    .score-text{
      color: #666;
      font-size: 12px;
    }
    .total-count{
      font-size: 12px;
      color: #FF9645;
      float: right;
    }
  }
  .map{
    height: 32px;
    line-height: 32px;
    margin: 14px 0;

    .location{
      font-weight: 700;
    }
    .map-text{
      font-size: 12px;
      color: #FF9645;
      float: right;
    }
  }
}

</style>