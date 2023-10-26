<script setup>
import "@/assets/js/iconfont"
import myCalendar from "@/components/calendar/calendar.vue"
import {useRouter} from 'vue-router'
import { useMainStore } from "@/stores/modules/main";
import { storeToRefs } from "pinia";
import { myDayjsFormat } from "@/utils/myDay"
import {useCityStore} from '@/stores/modules/city'

const CityStore = useCityStore()
const {startDate, endDate, showCalendar } = storeToRefs(useMainStore())

function calendarClick(){
  showCalendar.value = !showCalendar.value
}

const router = useRouter()
function leftClick(){
   router.back()
}

</script>

<template>
<div class="search-bar w">
  <myCalendar/>

  <svg class="icon left" aria-hidden="true" @click="leftClick">
    <use xlink:href="#icon-fanhui"></use>
  </svg>

  <div class="middle">
    <div class="location">{{ CityStore.currentCity.cityName }}</div>

    <div class="date" @click="calendarClick">
      <div class="inner-date">
        <span class="start-date">住&nbsp;{{ myDayjsFormat(startDate, "MM.DD") }}</span>
        <span class="end-date">离&nbsp;{{ myDayjsFormat(endDate, "MM.DD") }}</span>
      </div>
    </div>

    <div class="search">
      <form>
        <input type="text" placeholder="搜索景点，地标，房源">
      </form>
    </div>
  </div>

  <svg class="icon right" aria-hidden="true">
    <use xlink:href="#icon-tubiaolunkuohua_caidan"></use>
  </svg>
  
</div>
</template>

<style lang="less" scoped>

.search-bar{
  width: 100%;

  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  .middle{
    display: flex;
    justify-content: center;
    flex: 1;
    &>div{
      background-color: var(--gray-bg);
      height: 35px;
      padding: 0 5px;
    }
    .location{
      line-height: 35px;
      border-radius: 6px 0 0 6px;
    }
    .date{
      font-size: 11px;
      color: #666;
      margin: 0 1px;

      .inner-date{
        height: 35px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .end-date {
          position: relative;
          &:after{
            content: " ";
            width: 0;
            height: 0;
            border: 4px solid #666;
            border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
            -webkit-border-radius: 3px;
            border-radius: 3px;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            position: absolute;
            bottom: -2px;
            right: -10px;
          }
        }
      }
    }
    .search{
      flex: 1;
      border-radius: 0 6px 6px 0;
      input{
        width: 190px;
        height: 35px;
      }
    }
  }
  .icon {
    width: 24px;
    height: 24px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .left{
    margin-left: -6px;
  }
  .right{
    width: 22px;
    height: 22px;
    margin-left: 8px;
  }
}

</style>