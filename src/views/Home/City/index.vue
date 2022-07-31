<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <div>
      <van-nav-bar title="城市列表" left-arrow @click-left="onClickLeft">
      </van-nav-bar>
    </div>

    <!-- 城市列表 -->
    <van-index-bar :index-list="indexList" highlight-color="#fb6463">
      <van-index-anchor van-index-anchor index="1">当前城市</van-index-anchor>
      <van-cell title="文本" />
      <van-index-anchor index="2">热门城市</van-index-anchor>
      <van-cell
        :title="hotItem.label"
        v-for="hotItem in hotList"
        :key="hotItem.label"
      />
      <van-index-anchor index="3">暂无城市</van-index-anchor>
      <van-cell
        :title="item.label"
        v-for="(item, index) in areaList"
        :key="index"
      ></van-cell>
    </van-index-bar>
  </div>
</template>

<script>
import { areaListApi, hotListApi } from '@/api'
export default {
  data () {
    return {
      indexList: [],
      areaList: [],
      hotList: []
    }
  },
  methods: {
    // 返回上级home
    onClickLeft () {
      this.$router.push('/layout/home')
    },
    // 获得城市列表
    async getAreaListApi () {
      try {
        const res = await areaListApi(1)
        // console.log(res)
        this.areaList = res.data.body
      } catch (error) {
        console.log(error)
      }
    },
    // 获得热门城市列表
    async getHotListApi () {
      try {
        const res = await hotListApi()
        //  console.log(res);
        this.hotList = res.data.body
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted () {
    this.getAreaListApi()
    this.getHotListApi()
  }
}
</script>

<style></style>
