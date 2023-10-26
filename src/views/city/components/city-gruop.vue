<script setup>
import { useRouter } from 'vue-router';
import {computed} from 'vue'
import {useCityStore} from '@/stores/modules/city'

const indexList = computed(() => {
  const list = props.cityData.cities.map(item => item.group)
  list.unshift("#")
  return list
})

const props = defineProps({
  cityData: {
    type: Object,
    default: () => ({})
  }
})

const cityStore = useCityStore()
const router = useRouter()
const cityClick = (city) => {
  cityStore.currentCity = city

  router.back()
}

</script>

<template>

<div class="city-group">
  <van-index-bar :sticky="false" :index-list="indexList">

    <van-index-anchor index="热门"/>
    <van-cell>
      <div class="hot">
        <template v-for="city in cityData.hotCities" :key="city.cityId" >
          <div class="hot-city" @click="cityClick(city)">
            {{ city.cityName }}
          </div>
        </template>
      </div>
    </van-cell>

    <template v-for="group in cityData.cities" :key="group.group">
      <van-index-anchor :index="group.group"/>
      <tamplate v-for="city in group.cities" :key="city.cityId">
        <van-cell :title="city.cityName"  @click="cityClick(city)"/>
      </tamplate>
    </template>

  </van-index-bar>
  </div>
  
</template>

<style lang="less" scoped>

.city-group{
  
  .hot{
    display: flex;
    flex-wrap: wrap;
    text-align: center;

    justify-content: space-between;

    .hot-city{
      width: 70px;
      height: 28px;

      margin: 6px 0;
      line-height: 28px;

      background-color: #fff4ec;
      border-radius: 14px;
      font-size: 12px;
      color: #000;

    }
  }
}

</style>