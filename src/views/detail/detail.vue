<script setup>
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import { getDetail } from '@/services';
import detailNavBar from '@/components/nav-bar/detail-nav-bar.vue'
import detailSwipe from '@/components/swipe/detail-swipe.vue'
import detailTitle from './cpns/detail-01-title.vue'
import detailFacility from './cpns/detail-02-facility.vue'
import detailLandlord from './cpns/detail-03-landlord.vue'
import detailComment from './cpns/detail-04-comment.vue'
import detailNotice from './cpns/detail-05-notice.vue'
import detailMap from './cpns/detail-06-map.vue'

const route = useRoute()
const detailData = ref({})
const mainPart = ref({})

getDetail(route.params.id).then( res => {
  detailData.value = res.data
  mainPart.value = detailData.value.mainPart
})

const tabList = ['概览','设施','房东','评论','须知','周边'];
const active = ref(0);

</script>

<template>
<div class="detail top-page">

  <van-tabs v-model:active="active" scrollspy sticky duration="0.5" >
    <van-tab v-for="item in tabList" :title="item">
      <detail-nav-bar v-if="item === '概览'" />
      <detail-swipe v-if="item === '概览'" :swipeData="mainPart.topModule?.housePicture.housePics"/>
      <detail-title v-if="item === '概览'" :topModule="mainPart.topModule"/>
      <detail-facility v-if="item === '设施'" :houseFacility="mainPart.dynamicModule?.facilityModule?.houseFacility"/>
      <detail-landlord v-if="item === '房东'" :landlordModule="mainPart.dynamicModule?.landlordModule" />
      <detail-comment v-if="item === '评论'" :commentModule="mainPart.dynamicModule?.commentModule" />
      <detail-notice v-if="item === '须知'" :rulesModule="mainPart.dynamicModule?.rulesModule"/>
      <detail-map v-if="item === '周边'" :positionModule="mainPart.dynamicModule?.positionModule"/>
    </van-tab>
  </van-tabs>

</div>

</template>
<style lang="less" scoped>

</style>