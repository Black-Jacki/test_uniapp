<template>
  <view class="home">
    <view class="home-tab">
      <view class="home-tab-title">
        <view class="title-inner">
          <uni-segmented-control
            :current="current"
            :values="items.map((v) => v.title)"
            @clickItem="onClickItem"
            style-type="text"
            active-color="#1296db"
          ></uni-segmented-control>
        </view>
        <view class="iconfont icon-search"></view>
      </view>
      <view class="home-tab-content">
        <view v-if="current === 0">
          <Home-recommend></Home-recommend>
        </view>
        <view v-if="current === 1">
          <Home-category></Home-category>
        </view>
        <view v-if="current === 2">
          <Home-new></Home-new>
        </view>
        <view v-if="current === 3">
          <Home-album></Home-album>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import { homeAlbum } from "../../component/Home-album/Home-album";
  import { homeCategory } from "../../component/Home-category/Home-category";
  import { homeNew } from "../../component/Home-new/Home-new";
  import { homeRecommend } from "../../component/Home-recommend/Home-recommend";
  import { uniSegmentedControl } from "@dcloudio/uni-ui";
  export default {
    data() {
      return {
        items: [
          { title: "推荐" },
          { title: "分类" },
          { title: "最新" },
          { title: "专辑" },
        ],
        current: 0,
      };
    },
    components: {
      homeAlbum,
      homeCategory,
      homeNew,
      homeRecommend,
      uniSegmentedControl,
    },
    methods: {
      onClickItem(e) {
        let that = this;
        if (that.current !== e.currentIndex) {
          that.current = e.currentIndex;
        }
      },
    },
  };
</script>

<style lang="scss">
  .segmented-control__text.data-v-071a40dc {
    font-size: 14px !important;
  }
</style>

<style lang="scss" scoped>
  .home-tab {
    .home-tab-title {
      width: 100%;
      display: flex;
      flex-direction: row;
      position: relative;
      .title-inner {
        width: 60%;
        margin: 0 auto;
      }
    }
    .icon-search {
      position: absolute;
      font-size: 22px;
      line-height: 36px;
      right: 16rpx;
    }
  }
</style>