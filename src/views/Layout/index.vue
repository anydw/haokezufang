<template>
  <div>
    <router-view></router-view>
    <div>
      <van-tabbar route v-show="$route.meta.show">
        <van-tabbar-item replace to="/layout/home" icon="home-o"
          >首页</van-tabbar-item
        >
        <van-tabbar-item replace to="/layout/search" icon="search"
          >找房</van-tabbar-item
        >
        <van-tabbar-item replace to="/layout/consult" icon="friends-o"
          >咨询</van-tabbar-item
        >
        <van-tabbar-item replace to="/layout/my" icon="setting-o"
          >我的</van-tabbar-item
        >
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style></style>
