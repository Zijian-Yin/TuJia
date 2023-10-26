<script setup>
import { onMounted, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
// import detailSection from '@/components/detail-section/detail-section.vue'

const props = defineProps({
  positionModule:{
    type: Object,
    default: () => ({}) 
  } 
})

let map = null; 

onMounted(() => {
  AMapLoader.load({
    key: "f45b47d2c0a06e6a09188cc53a84779c", 
    version: "2.0", 
    plugins: [], 
  }).then((AMap) => {
      map = new AMap.Map("container", { 
        viewMode: "3D",
        zoom: 13, 
        center: [props.positionModule.longitude, props.positionModule.latitude], 
      });

      const marker = new AMap.Marker({
      position: new AMap.LngLat(props.positionModule.longitude, props.positionModule.latitude)
      });
      map.add(marker);
      
    }).catch((e) => {
      console.log(e);
    });
});

onUnmounted(() => { 
  map?.destroy();
}); 

</script>

<template>
  <div class="map">
    <detail-section title="周边位置" footer="查看更多周边信息">
      <div id="container">
      </div>
    </detail-section>
  </div>
</template>

<style lang="less" scoped>

.map{
  #container{
    width: 100%;
    height: 250px;
  }
}

</style>