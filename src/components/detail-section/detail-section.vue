<script setup>

defineProps({
  title:{
    type: String
  },
  footer: {
    type: String,
    default: ""
  }
})

</script>

<template>
<div class="section">

  <div class="header">
    <h2 class="title">{{title}}</h2>
  </div>
  <slot> 
    <h3>DEFAULT</h3>
  </slot>
  <div class="footer" v-if="footer.length != 0">
    <h3 class="more">{{ footer }}<van-icon name="arrow" /></h3>
  </div>

</div>
</template>

<style lang="less" scoped>

.section{
  padding: 15px 15px 40px;
  border-top: 5px solid var(--gray-bg2);

  .header{
    margin-bottom: 15px;
    .title{
      font-size: 20px;
      font-weight: 700;
    }
  }
  .footer{
    .more{
      float: right;
      margin-top: 15px;

      color: var(--primary-color);
      font-weight: 700;
    }
  }
}

</style>