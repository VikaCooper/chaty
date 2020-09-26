<template>
  <div class="msg-tab__container">
    <van-list v-model="loading" :finished="finished" finished-text="已经到底了哦~" @load="onLoad" @refresh="onRefresh">
      <template v-if="messages && messages.length">
        <div v-for="(item, index) in messages" :key="index" class="msg__card">
          <van-image round width="45px" height="45px" :src="item.avatar" class="msg__card__avatar" />
          <div class="msg__card__cont">
            <div class="msg__card__cont__name">{{ item.name }}</div>
            <div class="msg__card__cont__words">{{ item.words }}</div>
          </div>
          <div class="msg__card__extra">
            <div class="msg__card__extra__date">{{ item.latestDate }}</div>
          </div>
        </div>
      </template>
      <template v-else>
        <van-empty class="empty-holder" :image="emptyImg">
          <div slot="description" class="empty-holder__desc">
            <div class="empty-holder__desc__hd">暂无消息</div>
            <div class="empty-holder__desc__tip">你暂时还没有任何消息哟~快去找个人聊天吧</div>
          </div>
        </van-empty>
      </template>
    </van-list>
  </div>
</template>
<script>
import EmptyImage from '@/assets/index/empty-msg.png'

export default {
  data() {
    return {
      // 列表加载相关参数
      loading: false,
      finished: true,
      // 分页信息
      pagination: {
        pageNo: 1,
        pageSize: 10,
        totalCount: 0
      },
      emptyImg: EmptyImage,
      messages: [
        {
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: 'cooper',
          words: 'hello! may i have your atention plz?',
          latestDate: '2019-09-26'
        },
        {
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: 'cooper',
          words: 'hello! may i have your atention plz? hahaha, test long words......',
          latestDate: '2019-09-26'
        },
        {
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: 'cooper',
          words: 'hello! may i have your atention plz?',
          latestDate: '2019-09-26'
        },
        {
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: 'cooper',
          words: 'hello! may i have your atention plz?',
          latestDate: '2019-09-26'
        }
      ]
    }
  },
  methods: {
    onLoad() {

    },
    onRefresh() {

    }
  }
}
</script>

<style lang="scss" scoped>
.msg-tab__container {
  padding: 20px;

  .msg__card {
    position: relative;
    @include flexbox(flex-start, center, row, nowrap);
    height: 66px;
    padding: 10px 0;
    box-sizing: border-box;
    cursor: pointer;

    &__avatar {
      margin-right: 12px;
    }

    &__cont {
      height: 100%;
      @include flexbox(space-between, flex-start, column, nowrap);

      &__name {
        font-size: 16px;
        font-family: Helvetica;
        color: #151624;
        line-height: 19px;
      }

      &__words {
        @include textoverflow(1);

        max-width: 250px;
        font-size: 15px;
        font-family: Helvetica;
        color: #9a9ca4;
        line-height: 18px;
      }
    }

    &__extra {
      position: absolute;
      right: 0;
      align-self: flex-start;

      &__date {
        font-size: 14px;
        font-family: Helvetica;
        color: #9a9ca4;
        line-height: 17px;
      }
    }
  }

  /deep/.empty-holder .van-empty__image {
    width: 181px;
    height: 169px;
  }

  .empty-holder__desc {
    text-align: center;

    &__hd {
      font-size: 26px;
      font-family: Helvetica;
      color: #151624;
      line-height: 31px;
    }
  }
}
</style>
