<template>
  <div>
    <div class="dingbu">
      <van-nav-bar title="收藏列表" left-arrow @click-left="onClickLeft" />
      <van-swipe-cell v-for="(item,index) in favorateList" :key="index">
        <van-card
          :price="`${item.price}元/月`"
          :title="item.title"
          :desc="item.desc"
           class="goods-card"
          :thumb= '`http://liufusong.top:8080${item.houseImg}`'
        >
        <template #tags>
          <van-tag type="danger" class="tags">{{item.tags[0]}}</van-tag>
        </template>
        </van-card>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
import { favorateApi } from '@/api'
export default {
  data () {
    return {
      favorateList: []
    }
  },
  mounted () {
    this.getFavorateApi()
  },
  methods: {
    onClickLeft () {
      this.$router.push('/layout/my')
      // console.log(123)
    },
    async getFavorateApi () {
      const res = await favorateApi()
      // console.log(res)
      this.favorateList = res.data.body
    }
  }
}
</script>

<style scoped lang="less">
:deep(.van-nav-bar__content) {
  background-color: #21b97a;
  .van-icon {
    color: #fff;
  }
  & .van-nav-bar__title {
    color: #fff;
  }
}
.tags{
  background-color:#e1f5f8;
  color: #21b97a;
}
:deep(.van-card__price-integer){
  color: red;
}
:deep(.van-card__price-currency){
  display: none;
}

</style>
