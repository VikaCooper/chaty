<template>
  <div class="grp-tab__container">
    <van-list v-model="loading" :finished="finished" finished-text="已经到底了哦~" @load="onLoad" @refresh="onRefresh">
      <div v-if="messages && messages.length" class="grp__card__wrapper">
        <div v-for="(item, index) in messages" :key="index" class="grp__card">
          <van-image round width="60px" height="60px" :src="item.avatar" class="grp__card__avatar" />
          <div class="grp__card__cont">
            <div class="grp__card__cont__name">{{ item.name }}</div>
            <!-- <div class="grp__card__cont__words">当前[{{ item.onlineCount }}]人在线</div> -->
          </div>
          <div class="grp__card__members">
            <van-image
              v-for="(member, mIndex) in item.members"
              :key="mIndex"
              round
              width="29px"
              height="29px"
              :src="member"
              class="grp__card__members__ava"
            />
          </div>
          <!-- <div class="grp__card__extra">
            <div class="grp__card__extra__date">{{ item.latestDate }}</div>
          </div> -->
        </div>
      </div>
      <template v-else>
        <van-empty class="empty-holder" :image="emptyImg">
          <div slot="description" class="empty-holder__desc">
            <div class="empty-holder__desc__hd">暂无群聊</div>
            <div class="empty-holder__desc__tip">你暂时还没加入任何群聊哦~快去加入或者创建一个吧</div>
          </div>
        </van-empty>
      </template>
    </van-list>
  </div>
</template>
<script>
import EmptyImage from '@/assets/index/empty-grp.png'

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
          name: '偷偷聊天',
          latestDate: '2019-09-26',
          onlineCount: 10,
          members: [
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg'
          ]
        },
        {
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: 'cooper',
          latestDate: '2019-09-26',
          onlineCount: 10,
          members: [
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg'
          ]
        },
        {
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: 'cooper',
          latestDate: '2019-09-26',
          onlineCount: 101,
          members: [
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg'
          ]
        },
        {
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: 'cooper',
          latestDate: '2019-09-26',
          onlineCount: 10,
          members: [
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg'
          ]
        }
      ]
    }
  },
  methods: {
    onLoad() {},
    onRefresh() {}
  }
}
</script>

<style lang="scss" scoped>
.grp-tab__container {
  padding: 20px;

  .grp__card__wrapper {
    @include flexbox(space-between, center, row, wrap);
  }

  .grp__card {
    @include flexbox(center, center, column, nowrap);
    width: 162px;
    height: 185px;
    margin-bottom: 12px;
    border: 1px solid rgba(84, 105, 119, 0.05);
    box-shadow: 0px 3px 6px 0px rgba(84, 105, 119, 0.05);
    border-radius: 5px;
    cursor: pointer;

    &__avatar {
      margin-bottom: 6px;
    }

    &__cont {
      margin-bottom: 6px;

      &__name {
        font-size: 14px;
        font-family: Helvetica;
        color: #151624;
        line-height: 19px;
      }
    }

    &__members {
      height: 30px;
      box-sizing: border-box;
      @include flexbox(center, center, row, nowrap);

      &__ava {
        // margin-left: -22px;
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
