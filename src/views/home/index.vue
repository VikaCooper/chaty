<!-- home -->
<template>
  <div class="index-container">
    <div class="index__header">
      <div class="index__header__fst">
        <div class="index__header__fst__title">{{tabs[active].name}}</div>
        <div class="index__header__fst__btn">
          <van-icon name="search" size="22" color="#fff" />
        </div>
      </div>
    </div>
    <van-tabs
      v-model="active"
      line-width="0"
      line-height="0"
      color="white"
      background="linear-gradient(315deg, #02072f 0%, #091361 100%)"
      animated
      sticky
      swipeable
    >
      <van-tab :title-style="titleStyle" :key="index" v-for="(item, index) in tabs" :title="item.name">
        <msgTab v-if="active === 0" />
        <groupTab v-if="active === 1" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import msgTab from './components/msgTab'
import groupTab from './components/groupTab'
export default {
  components: {
    msgTab,
    groupTab
  },
  data() {
    return {
      active: 1,
      titleStyle: {
        color: 'white',
        fontSize: `${16 / 37.5}rem`
      },
      tabs: [
        {
          name: '消息'
        },
        {
          name: '聊天'
        }
      ]
    }
  },

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="scss" scoped>
.index-container {
  height: 100vh;
  width: 375px;

  .index__header {
    padding-top: 32px;
    background: linear-gradient(315deg, #02072f 0%, #091361 100%);

    &__fst {
      @include flexbox(space-between, center, row, nowrap);

      &__title {
        padding: 0 0 0 16px;
        height: 40px;
        font-size: 34px;
        font-family: Helvetica;
        color: #ffffff;
        line-height: 41px;
      }

      &__btn {
        padding: 0 16px 0 0;
      }
    }
  }
}
</style>
