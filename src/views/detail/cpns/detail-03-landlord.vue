<script setup>

import detailSection from '@/components/detail-section/detail-section.vue'

const props = defineProps({
  landlordModule:{
    type: Object,
    default: () => ({})
  }
})

</script>

<template>

<div class="landlord">
  <detail-section title="房东介绍" footer="查看房东主页">
    <div class="content">

      <div class="top">
        <img :src="landlordModule.topScroll" >
      </div>

      <div class="intro">
        <img class="protrait" :src="landlordModule.hotelLogo" alt="">
        <div class="info">
          <h3 class="name">{{ landlordModule.hotelName }}</h3>
          <div class="tags">
            <span v-for="item in landlordModule.hotelTags" :style="{ color: item.tagText.color}">
              {{ item.tagText.text }}
            </span>
          </div>
        </div>

        <button class="contact">联系房东</button>
      </div>

      <div class="rate">
        <div class="rate-item" v-for="item in landlordModule.hotelSummary">
          <h4 class="title">{{ item.title }}</h4>
          <h3 class="rate-text">{{ item.introduction }}</h3>
          <h4 class="tip">{{ item.tip }}</h4>
        </div>
      </div>
    </div>
  </detail-section>
</div>

</template>

<style lang="less" scoped>

.landlord{
  .content{
    .top{
      img{
        border-radius: 4px;
      }
    }
    .intro{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;

      font-size: 12px;
      .protrait{ 
        width: 54px; 
        border-radius: 50%;
        margin-right: 5px;
        margin-top: -2px;
      }
      .name{ font-size: 16px; font-weight: 700;}
      .info{
        flex:1;
        .tags{
          margin-top: 3px;
          span{
            &:not(:last-child)::after{
              margin: 0 4px;
              content: "|"
            }
          }
        }
      }
      .contact{
        height: 24px;
        line-height: 22px;
        width: 76px;
        border-radius: 4px;
        background: var(--theme-linear-gradient);
        color: #fff;
      }
    }
    .rate{
      display: flex;
      padding: 0 10px;
      margin: 40px 0 20px 0;
      .rate-item{
        flex: 1;
        display: flex;
        flex-direction: column;
        .title{ 
          color: #999; 
          font-size: 12px; }
        .rate-text{
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin: 5px 0;
        }
        .tip{
          color: #666; 
          font-size: 12px; 
        }
      }
    }
  }
}

</style>