<script setup>
import { myDayjs}  from '@/utils/myDay';
import { useMainStore } from '@/stores/modules/main';
import { storeToRefs } from 'pinia'

//选择入住时间和离店时间
const {startDate, endDate, showCalendar } = storeToRefs(useMainStore())

function confirm(value){ 
  startDate.value = myDayjs(value[0])
  endDate.value = myDayjs(value[1])
  showCalendar.value = !showCalendar.value
}

function formatter(day){
  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  }
  return day;
}

</script>

<template>

<div class="calendar">
  <van-calendar
    type="range" 
    color="#ff9854"
    v-model:show="showCalendar" 
    :formatter="formatter"
    :show-confirm="false"
    @confirm="confirm"
    class="item"
  />
</div>

</template>

<style lang="less" scoped>



</style>