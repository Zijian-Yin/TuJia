<script setup>
import detailSeciton from '@/components/detail-section/detail-section.vue'

const props = defineProps({
  houseFacility:{
    type: Object,
    default: () => ({})
  }
})

</script>

<template>
<div class="facility">
  <detail-seciton title="房屋设施" footer="查看所有设施">
    <div class="facility-inner">
      <template v-for="(item, index) in houseFacility.houseFacilitys" :key="item.groupId">
        <div class="group" v-if="houseFacility.facilitySort?.includes(index)">
          <div class="title">
            <img :src="item.icon" alt="">
            <h3>{{ item.groupName }}</h3>
          </div>
          <div class="items">
            <div class="item" v-for="(item2, index2) in item.facilitys.slice(0,4)">
              <img src="@/assets/img/detail/icon_check.png" alt="" :key="index2">
              <span>{{ item2.name }}</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </detail-seciton>
</div>
</template>

<style lang="less" scoped>

.facility{
  color: #333;
  .facility-inner{
    background-color: #f7f9fb;
    padding-bottom: 30px;
    border-radius: 7px;
    .group{
      display: flex;
      padding-top: 30px;
      .title{
        flex: 2;
        text-align: center;
        img{
          width: 22px;
          height: 22px;
          margin: 0 auto;
        }
      }
      .items{
        flex: 5;
        display: flex;
        align-content: center;
        flex-wrap: wrap;
        .item{
          width: 50%;
          display: flex;
          img{
            width: 12px;
            height: 12px;
            margin-top: 2px;
            margin-right: 5px;
          }
        }
      }
    }
  }
}

</style>