<script setup>
import myCalendar from '@/components/calendar/calendar.vue'
import { computed, ref } from 'vue';
import { myDayjsFormat}  from '@/utils/myDay';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useHomeStore } from '@/stores/modules/home';
import { useCityStore } from '@/stores/modules/city';
import { useMainStore } from '@/stores/modules/main';

//点击设置当前城市，获取位置信息
const router = useRouter()
const cityStore = useCityStore()
const {currentCity} = storeToRefs(cityStore)

function changeCity(){
  router.push("/city")
}

//日历操作
const {startDate, endDate, showCalendar } = storeToRefs(useMainStore())

const diffDate = computed(() => { return endDate.value.diff(startDate.value,'day')})
function calendarClick(){
  showCalendar.value = !showCalendar.value
}

//热门推荐地点、景点标签、搜索按钮
function btnclick(){
  router.push({
    path: "/search",
    query: {
      startDate: myDayjsFormat(startDate.value),
      endDate: myDayjsFormat(endDate.value),
      currentCity: currentCity.value.cityName
    }
  })
}

const homeStore = useHomeStore()
const {hotSuggests} = storeToRefs(homeStore)

</script>

<template>

<div class="location-date-search">
  <!-- 点击设置当前城市，获取位置信息 -->
  <div class="address w">
    <div class="current-address">
      <span class="left" @click="changeCity">{{ currentCity.cityName }}</span>
      <div class="right">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>

  <!-- 选择入住时间和离店时间 -->
  <myCalendar />
  
  <div class="date w">
    <div class="both-date" @click="calendarClick">
      <div class="top">入住</div>
      <div class="bottom">{{ myDayjsFormat(startDate) }}</div>
    </div>
    <div class="middle">共{{ diffDate }}晚</div>
    <div class="both-date" @click="calendarClick">
      <div class="top">离店</div>
      <div class="bottom">{{ myDayjsFormat(endDate) }}</div>
    </div>
  </div>

  <!-- 热门推荐地点、景点标签、搜索按钮 -->
  <div class="items w">
      <van-search class="search" v-model="value" placeholder="景点/城市/酒店"/>
    <template v-for="(item, index) in hotSuggests">
      <span class="item" >
      {{ item.tagText.text }}
      </span>&nbsp;
    </template>
    <van-button class="btn" round block type="success" @click="btnclick">开始搜索</van-button>
  </div>

</div>

</template>

<style lang="less" scoped>
.location-date-search{
  .address{
    .current-address{
      display: flex;
      justify-content: space-between;

      line-height: 20px;
      .left{
        font-size: 16px;
      }
      .right{
        display: flex;
        
        span{
          color: #666;
          font-size: 14px;
        }

        img{
          height: 20px;

          position: relative;
          top: -1px;
          left: 5px;
        }
      }
    }
  }

  .date{
    display: flex;
    justify-content: space-between;
    .both-date{
      text-align: center;
      flex: 1;
      .top{
        color: #999;
        margin-bottom: 5px;
      }
    }
    .middle{
      text-align: center;
      flex: 1;
      line-height: 32px;

      color: #666;
    }
  }

  .items{
    display: flex;
    flex-wrap: wrap;
    .search{
      margin-bottom: 15px;
      padding: 0;
      display: block;
      width: 100%;
    }
    .item{
      display: block;
      
      border-radius: 14px;
      line-height: 1;
      text-align: center;
      padding: 6px;
      margin-bottom: 5px;
      
      background-color: #eee;
      color: #555;
      font-size: 12px;
    }
    .btn{
      width: 100%;
      height: 36px;

      margin-top: 12px;
      border-radius: 16px;
      border: 0;
      font-size: 16px;
      background-image: var(--theme-linear-gradient);
    }
  }

}


</style>