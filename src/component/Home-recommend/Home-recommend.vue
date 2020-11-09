<template>
  <view class="home-recommend">
    <view class="recommend-wrap">
      <view class="recommend-item" v-for="item in recommends" :key="item.id">
        <image class="img" :src="item.thumb" mode="widthFix" />
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // 推荐列表
        recommends: [],
      };
    },
    mounted() {
      let that = this;
      uni.request({
        url: "https://service.picasso.adesk.com/v3/homepage/vertical", //仅为示例，并非真实接口地址。
        data: {
          // 要获取的数据条数
          limit: 30,
          // 关键字
          order: "hot",
          // 要跳过的条数
          skip: 0,
        },
        header: {
          "custom-header": "hello", //自定义请求头信息
        },
        success: (res) => {
          console.log(res.data.res.homepage[1].items);
          that.recommends = res.data.res.homepage[1].items;
        },
        fail: (err) => {
          console.log(err);
        },
      });
    },
  };
</script>

<style lang="scss" scoped>
  .recommend-wrap {
    text-align: center;
    display: block;
    padding: 0;
    .recommend-item {
      border: 5rpx solid #ffffff;
      display: inline;
      padding: 0;
      .img {
        width: 48vw;
        padding: 0;
      }
    }
  }
</style>