<template>
  <div>
    <div><router-view></router-view></div>
    <div class="dingweifu" v-show="$route.meta.show">
      <div class="dingweizi">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入小区或者地址"
          @search="onSearch"
        >
          <template #action>
            <div @click="onSearchRight"><i class="iconfont icon-map"></i></div>
          </template>
          <template #label>
            <router-link to="/layout/home/city" @click="onSearchLeft">
              <span class="beijing">北京</span
              ><i class="iconfont icon-xiajiantou"></i><i class="xiantiao">|</i>
            </router-link>
          </template>
        </van-search>
      </div>
      <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in bannerList" :key="item.id"
            ><img
              :src="`http://liufusong.top:8080${item.imgSrc}`"
              alt=""
              style="width: 100%"
          /></van-swipe-item>
        </van-swipe>
      </div>
      <div class="zhongjian">
        <div>
          <img class="tupian" src="@/assets/111.png" alt="" />
          <p>整租</p>
        </div>
        <div>
          <img class="tupian" src="@/assets/111.png" alt="" />
          <p>合租</p>
        </div>
        <div>
          <img class="tupian" src="@/assets/111.png" alt="" />
          <p>地图找房</p>
        </div>
        <div>
          <img class="tupian" src="@/assets/111.png" alt="" />
          <p>去出租</p>
        </div>
      </div>
      <div class="dibu">
        <div class="titles">
          <p>租房小组</p>
          <span>更多</span>
        </div>
        <div>
          <div class="outer">
            <div class="inner" v-for="item in groupsList" :key="item.id">
              <div class="dbtp">
                <img :src="`http://liufusong.top:8080${item.imgSrc}`" alt="" />
              </div>
              <div>
                <p>{{ item.title }}</p>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bannerListApi, groupsListApi } from '@/api'
export default {
  name: 'Home',
  data () {
    return {
      value: '',
      bannerList: [],
      groupsList: []
    }
  },
  mounted () {
    this.getBannerListApi()
    this.getGroupsListApi()
  },
  methods: {
    async getBannerListApi () {
      try {
        const res = await bannerListApi({})

        this.bannerList = res.data.body
      } catch (error) {
        console.log(error)
      }
    },
    async getGroupsListApi () {
      try {
        const res = await groupsListApi({})
        // console.log(res);
        this.groupsList = res.data.body
      } catch (error) {}
    },

    onSearch () {},
    onSearchRight () {
      console.log(123)
    },
    onSearchLeft () {
      console.log(234)
    }
  }
}
</script>

<style scoped lang="less">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.icon-map {
  font-size: 18px;
  text-align: center;
}
:deep(.van-cell__value) {
  flex: 1px;
}
:deep(.van-field__left-icon) {
  padding-left: 10px;
}
.xiantiao {
  margin-left: 10px;
  color: rgb(103, 98, 98);
}
.beijing {
  margin-left: -5;
}
.dingweifu {
  position: relative;
  .dingweizi {
    z-index: 99999;
    position: absolute;
    left: 20px;
    top: 20px;
  }
}
.van-search {
  height: 35px;
  width: 425px;
  // opacity: 0.5;
  border-radius: 5px;
}
.van-cell {
  background-color: #fff;
}
.van-search__content {
  background-color: #fff;
}
.icon-xiajiantou {
  font-size: 10px;
}
.van-search__content {
  padding: 0;
}
.van-swipe-item {
  height: 230px;
}
.zhongjian {
  // background-color: pink;
  height: 110px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    text-align: center;
    margin: 5px 0;
  }
  .tupian {
    width: 60px;
    height: 60px;
    background-color: #eee;
    border-radius: 50%;
    .img {
      width: 100%;
    }
  }
}
.titles {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;

  span {
    font-size: 13px;
  }
}
.outer {
  display: flex;
  align-items: center;
  flex-wrap: wrap; // 多行显示
  align-content: center;
  width: 470px;
  height: 130px;
  background-color: #eee;
  .inner {
    width: 47.5%;
    height: 42%;
    background-color: #fff;
    margin: 4px;
    display: flex;
    .dbtp {
      width: 50px;
      height: 50px;
      background-color: #fff;
      img {
        width: 100%;
      }
    }
    p {
      margin: 0;
    }
  }
}
</style>
