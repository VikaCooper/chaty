<template>
  <div class="chat-room__container">
    <div class="room__hd">
      <div class="room__hd__left">
        <van-icon class="room__hd__left__back" name="arrow-left" size="20px" color="#fff" @click="handleBackClick" />
        <div class="room__hd__left__info">
          <div class="room__hd__left__info__name">{{ chatInfo.name }}</div>
          <div class="room__hd__left__info__tip">{{ chatInfo.onlineCount }}人在线</div>
        </div>
      </div>
      <div class="room__hd__right">
        <van-icon name="info" size="20px" color="#fff" />
      </div>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="" @load="onLoad" @refresh="onRefresh">
      <div class="room__msg">
        <div
          v-for="(msg, index) in messageList"
          :key="index"
          :class="[
            'room__msg__container',
            userId === msg.userId ? 'room__msg__container--right' : 'room__msg__container--left'
          ]"
        >
          <van-image
            v-if="userId !== msg.userId"
            round
            width="30px"
            height="30px"
            :src="msg.avatar"
            class="room__msg__avatar"
          />
          <div v-if="userId === msg.userId" class="room__msg__content room__msg__content--right">{{ msg.content }}</div>
          <div v-else class="room__msg__content room__msg__content--left">{{ msg.content }}</div>
        </div>
      </div>
    </van-list>
    <div class="room__send-box">
       <van-field v-model="msgCont" placeholder="请输入你的消息..." class="send-ipt" />
       <van-button plain hairline type="info" size="small" class="send-btn">发送</van-button>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      chatInfo: null,
      // 列表加载相关参数
      loading: false,
      finished: true,
      // 分页信息
      pagination: {
        pageNo: 1,
        pageSize: 10,
        totalCount: 0
      },
      msgCont: '',
      messageList: [
        {
          userName: 'test1',
          userId: '1111',
          createdTime: '2020-09-26 11:38:00',
          content: '哈哈哈哈哈哈哈哈哈哈哈哈',
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg'
        },
        {
          userName: 'test2',
          userId: '1111',
          createdTime: '2020-09-26 11:38:00',
          content: '哈哈哈哈哈哈哈哈',
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg'
        },
        {
          userName: 'self',
          userId: '01',
          createdTime: '2020-09-26 11:38:00',
          content: '哈哈哈哈哈哈哈哈哈哈哈哈',
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg'
        },
        {
          userName: 'test3',
          userId: '1111',
          createdTime: '2020-09-26 11:38:00',
          content: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg'
        },
        {
          userName: 'test1',
          userId: '1111',
          createdTime: '2020-09-26 11:38:00',
          content: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg'
        },
        {
          userName: 'test1',
          userId: '1111',
          createdTime: '2020-09-26 11:38:00',
          content: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg'
        },
        {
          userName: 'test1',
          userId: '1111',
          createdTime: '2020-09-26 11:38:00',
          content: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      userId: state => state.app.userId
    })
  },
  created() {
    const { params } = this.$route
    this.chatInfo = params
  },
  methods: {
    onLoad() {},
    onRefresh() {},
    handleBackClick() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
.chat-room__container {
  overflow: hidden;
  .room__hd {
    @include flexbox(space-between, center, row, nowrap);
    height: 64px;
    padding: 0 20px;
    background: linear-gradient(315deg, #02072f 0%, #091361 100%);

    &__left {
      @include flexbox(flex-start, center, row, nowrap);

      &__back {
        margin-right: 10px;
      }

      &__info {
        color: #fff;

        &__name {
          font-size: 16px;
          font-family: Helvetica;
          color: #ffffff;
          line-height: 19px;
        }

        &__tip {
          font-size: 13px;
          font-family: Helvetica;
          color: #ffffff;
          line-height: 16px;
        }
      }
    }
  }
  .room__msg {
    height: calc(100vh - 137px);
    padding: 0 20px;
    overflow-y: scroll;

    &__container {
      width: 100%;
      margin-top: 34px;

      &--left {
        @include flexbox(flex-start, flex-start, row, nowrap);
      }

      &--right {
        @include flexbox(flex-end, flex-start, row, nowrap);
      }

      .room__msg__content {
        max-width: 256px;
        white-space: wrap;
        padding: 12px;
        box-sizing: border-box;
        background: linear-gradient(315deg, #02072f 0%, #091361 100%);
        font-size: 16px;
        font-family: Helvetica;
        color: #ffffff;
        line-height: 19px;

        &--left {
          border-radius: 0 16px 16px 12px;
        }

        &--right {
          border-radius: 16px 12px 0px 16px;
        }
      }
    }
  }
  .room__send-box {
    @include flexbox(center, center, row, nowrap);
    position: fixed;
    bottom: 0;
    height: 73px;
    width: 375px;
    padding: 0 20px;
    background: #fff;
    box-sizing: border-box;

    .send-ipt {
      background: $background-color;
      border-radius: 8px;
      width: 256px;
      margin-right: 12px;
    }

    .send-btn {
      width: 76px;
    }
  }
}
</style>
