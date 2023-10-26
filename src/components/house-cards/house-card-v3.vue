<script setup>

defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

</script>

<template>

<div class="v3">
  <div class="inner-box">
    <div class="cover">
      <img :src="itemData?.image?.url" alt="">
    </div>
    <div class="text-area">
      <div class="location">
      <img src="@/assets/img/home/location.png" alt="">
      <span>{{ itemData.location }}</span>
      </div>
      <div class="name">
        {{ itemData.houseName }}
      </div>
      <div class="summary">
        {{ itemData.summaryText }}
      </div>
      <div class="price">
        <span class="finalPrice">￥{{ itemData.finalPrice }}</span>
        <span class="productPrice">￥{{ itemData.productPrice }}</span>
        <span class="tip">&nbsp;&nbsp;{{ itemData.priceTipBadge?.text }}&nbsp;&nbsp;</span>
      </div>
    </div>
  </div>
</div>

</template>

<style lang="less" scoped>

.v3 {
  width: 50%;
  .inner-box{
    margin: 4px;
    .cover{
      img{
        border-radius: 6px;
        width: 100%;
      }
    }
    .text-area{
      padding: 0 10px;
      .location{
        display: flex;
        margin: 6px 0;

        img{
          height: 12px;
          margin-top: 2px;
        }
        span{color: #666;}
      }
      .name{
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .summary{
        color: #666;
        font-size: 10px;
        margin: 8px 0;
      }
      .price{
        .finalPrice{ color: #ff9645;}

        .productPrice{
          font-size: 10px;
          text-decoration: line-through;
          color: #999;

          margin: 0 3px;
        }
        .tip{
          background-image: linear-gradient(270deg,#f66,#ff9f9f);
          color: #fff;
          border-radius: 8px;
          font-size: 12px;
        }
      }
    }
  }
}

</style>