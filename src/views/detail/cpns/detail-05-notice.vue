<script setup>

// import detailSection from '@/components/detail-section/detail-section.vue'

const props = defineProps({
  rulesModule:{
    type: Object,
    default: () => ({})
  }
})

</script>

<template>
  <div class="notice">
    <detail-section title="预定须知" footer="">
      <div class="content">

        <div class="item" v-for="item in rulesModule.orderRules">
          <h4 class="title">{{ item.title }}</h4>
          <span class="intro">
            {{ item.introduction }}
          </span>
          <span class="tips" v-if="item.tips">
            查看说明
          </span>
        </div>

      </div>
    </detail-section>
  </div>
</template>

<style lang="less" scoped>

.content{
  padding: 15px 0;
  font-size: 12px;
  position: relative;

  color: #333;
  .item{
    display: flex;
    &:not(:last-child){
      margin-bottom: 20px;
    }
    .title{ 
      flex: 1;
      color: #666;
      margin-right: 20px;
    }
    .intro{
      
      flex: 5;
    }
    .tips{
      position: absolute;
      right: 0;
      color: #000;
    }
  }
}

</style>