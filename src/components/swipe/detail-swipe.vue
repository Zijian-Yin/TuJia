<script setup>

const props = defineProps({
  swipeData:{
    type: Array,
    default: () => [] 
  }
})

// const swipeGroup = {}

// for (const item of props.swipeData) {
//   let valueArray = swipeGroup[item.enumPictureCategory]
//   if (!valueArray) {
//     valueArray = []
//     swipeGroup[item.enumPictureCategory] = valueArray
//   }
//   valueArray.push(item)
// }


// function formatTitle(title){
//   return title.replace("【", "").replace("】", "").replace("：", "") 
// }

// const calIndex = item => {
//   const arrayValue = swipeGroup[item.enumPictureCategory]
//   return arrayValue.findIndex( data => data == item )
// }

</script>

<template>

<div class="swipe">
  <van-swipe lazy-render class="swipe-list" :autoplay="3000" indicator-color="white">
    <template v-for="item in swipeData">
      <van-swipe-item>
        <img class="album" :src="item.albumUrl" alt="">
      </van-swipe-item>
    </template>

    <template #indicator="{ active, total }">
      <div class="custom-indicator">
        {{ active+1 }}/{{ total }}
        <!-- <tamplate v-for="(value, key, index) in swipeGroup" :key="key">
          <span class="item" :class="{active: key == swipeData[active]?.enumPictureCategory}">
            <span>
              {{ formatTitle(value[0].title) }}
            </span>
            <span v-if="key == swipeData[active]?.enumPictureCategory">
              {{ calIndex(swipeData[active])+1 }}/{{ value.length }}
            </span>
          </span>
        </tamplate> -->
      </div>
    </template>
  </van-swipe>
</div>

</template>

<style lang="less" scoped>

.swipe{
  .album{
    height: 250px;
    width: 390px;
  }
  .custom-indicator {
    position: absolute;
    right: 8px;
    bottom: 8px;
    display: flex;
    padding: 2px 5px;
    font-size: 12px;
    line-height: 10px;
    font-size: 12px;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    // .item{
    //   height: 14px;
    //   line-height: 14px;
    //   border-radius: 8px;
    //   padding: 0 4px;
    // }
    // .active{
    //   background-color: #fff;
    //   color: #000;
    // }
  }
}

</style>