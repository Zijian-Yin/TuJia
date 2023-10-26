<script setup>
import myCalendar from "@/components/calendar/calendar.vue"
import { useMainStore } from "@/stores/modules/main";
import { storeToRefs } from "pinia";
import { myDayjsFormat } from "@/utils/myDay"

const {startDate, endDate, showCalendar } = storeToRefs(useMainStore())

function calendarClick(){
  showCalendar.value = !showCalendar.value
}


</script>

<template>
<div class="search-home w">
  <myCalendar/>
  <div class="middle">

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

</div>
</template>

<style lang="less" scoped>

.search-home{
  width: 100%;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  top: 0;
  background: #fff;
  box-shadow: 0 2px 30px rgba(51, 51, 51, 0.15);
  .middle{
    display: flex;
    width: 100%;

    &>div{
      background-color: var(--gray-bg);
      height: 45px;
      padding: 0 8px;
    }
    .date{
      font-size: 11px;
      color: #666;
      margin-right: 1px;
      border-radius: 6px 0 0 6px;
      font-weight: 300;

      .inner-date{
        height: inherit;
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
        width: 100%;
        height: 45px;
      }
    }
  }

}

</style>