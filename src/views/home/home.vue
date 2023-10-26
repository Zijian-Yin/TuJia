<script>
  export default { name: "home"}
</script>

<script setup>
import homeTitle from './components/title.vue'
import locationDateSearch from './components/location-date-search.vue';
import categories from './components/categories.vue'
import houseList from './components/house-list.vue';
import searchHome from '@/components/search-bar/search-home.vue';

import {useHomeStore} from '@/stores/modules/home'
import {useScroll} from '@/hooks/useScroll'
import { ref, watch, onActivated } from 'vue';

const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
homeStore.fetchCategories()
if(homeStore.currentPage === 0){homeStore.fetchHouseList()}

const homeRef = ref()
const {isBottom, scrollTop} = useScroll(homeRef)
watch(isBottom, (newvalue) => {
  if(newvalue){
    homeStore.fetchHouseList().then(()=>{
      console.log(newvalue)
      isBottom.value = false
    })
  }
})

onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})

</script>

<template>

<div class="home" ref="homeRef">
  <search-home v-show="scrollTop >= 350"/>
  <home-title/>
  <location-date-search />
  <categories />
  <house-list />
</div>

</template>

<style lang="less" scoped>

.home{
  height: 100vh;
  box-sizing: border-box;
  padding-bottom: 50px;
  overflow-y: auto;
  
  // &::-webkit-scrollbar{
  //   display: none;
  // }
  .w{
    padding: 8px 20px;
  }
}

</style>