<script setup>

// import detailSection from '@/components/detail-section/detail-section.vue'

const props = defineProps({
  commentModule:{
    type: Object,
    default: () => ({})
  }
})

</script>

<template>

<div class="comment">
  <detail-section title="热门评论" :footer="`查看全部${commentModule.totalCount}条评论`">
    <div class="content">
      
      <div class="header">

        <div class="left">
          <div class="overall">
            <h2 class="score">{{ commentModule.overall }}</h2>
            <div class="line"></div>
          </div>

          <div class="rate">
            <h3>{{ commentModule.scoreTitle }}</h3>
            <span class="totalCount">{{ commentModule.totalCount }}条评论</span>
            <van-rate
              v-model="commentModule.overall"
              :size="12"
              color="#ff9854"
              void-icon="star"
              void-color="#eee"
              allow-half
              readonly
            />
          </div>
        </div>

        <div class="right">
          <span class="tag" v-for="item in commentModule.subScores">
            {{ item }}
          </span>
        </div>

      </div>

      <div class="tags">
        <span class="item" 
        v-for="item in commentModule.commentTagVo"
        :style="{ color: item.color, 'background-color': item.backgroundColor}">
          {{ item.text }}
        </span>
      </div>

      <div class="user-comment">

        <div class="user-intro">
          <img class="portrait" :src="commentModule.comment?.userAvatars" >
          <div class="user-info">
            <h3 class="name">{{ commentModule.comment?.userName }}</h3>
            <span class="date">{{ commentModule.comment?.checkInDate }}</span>
          </div>
        </div>

        <div class="comment-text">
          {{ commentModule.comment?.commentDetail }}
        </div>

      </div>

    </div>
  </detail-section>
</div>
</template>

<style lang="less" scoped>

.comment{
  .content{
    .header{
      display: flex;
      justify-content: space-between;
      padding-top: 15px;
      border-top: 1px solid var(--gray-bg2);
      .left{
        flex: 1;
        display: flex;
        justify-content: center;
        .overall{
          position: relative;
          .score{
            font-size: 46px;
            font-weight: 700;
            margin-top: -3px;
          }
          .line{
            position: absolute;
            bottom: 3px;
            height: 6px;
            width: 64px;

            background: var(--theme-linear-gradient);
            border-radius: 8px;
            z-index: 9;
          }
        }
        .rate{
          display: flex;
          flex-direction: column;
          margin: 0 15px;
          font-size: 12px;
          .totalCount{
            color: #999;
            margin: 5px 0;
          }
        }
      }
      .right{
        flex: 1;
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        font-size: 12px;
        color: #666;
        .tag{
          margin-left: 5px;
        }
      }
    }
    .tags{
      display: flex;
      flex-wrap: wrap;
      margin: 15px 0;

      font-size: 12px;
      .item{
        margin-top: 5px;
        margin-right: 8px;
        padding: 3px 5px;

        border-radius: 4px;
      }
    }
    .user-comment{
      margin: 10px 5px;
      padding: 10px;
      background-color: var(--gray-bg);
      border-radius: 7px;
      .user-intro{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        .portrait{
          width: 34px;
          margin: 0 8px 2px 0;
          border-radius: 50%;
        }
        .user-info{
          display: flex;
          flex-direction: column;
          .date{
            font-size: 12px;
            margin-top: 3px;
            color: #999;
          }
        }
      }
      .comment-text{
        font-size: 12px;
        color: #333;
      }
    }
  }
}

</style>