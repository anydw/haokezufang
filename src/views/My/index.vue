<template>
  <div class="my_dhz">
    <div>
      <img src="http://liufusong.top:8080/img/profile/bg.png" alt="" />
    </div>
    <div class="my_bc">
      <div class="my_bgd">
        <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
      </div>
      <p>游客</p>
      <van-button type="primary" size="small" class="loginin" to="/login"
        >去登录</van-button
      >
    </div>
    <div class="dibu">
      <div class="my_fg">
        <van-icon name="star-o" />
        <p>我的收藏</p>
      </div>
      <div class="my_fg">
        <van-icon name="wap-home-o" />
        <p>我的出租</p>
      </div>
      <div class="my_fg">
        <van-icon name="clock-o" />
        <p>看房记录</p>
      </div>
      <div class="my_fg">
        <van-icon name="idcard" />
        <p>成为房主</p>
      </div>
      <div class="my_fg">
        <van-icon name="user-o" />
        <p>个人资料</p>
      </div>
      <div class="my_fg">
        <van-icon name="service-o" />
        <p class="iconfont icon-listen">联系我们</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.my_dhz {
  position: relative;
}
img {
  width: 100%;
  height: 300px;
}
.dibu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  .my_fg {
    width: 154px;
    height: 117px;
    p {
      text-align: center;
      line-height: 20px;
      font-size: 14px;
    }
    i {
      margin-left: 65px;
      padding-top: 20px;
      font-size: 20px;
    }
  }
}
.my_bc {
  position: absolute;
  top: 135px;
  left: 35px;
  height: 165px;
  width: 394px;
  background-color: #ffffff;
  box-shadow: rgb(225, 224, 224) 20px 20px 80px 5px;
  img {
    position: fixed;
    left: 200px;
    top: 100px;
    width: 60px;
    height: 60px;
  }
  p {
    position: fixed;
    left: 218px;
    top: 170px;
    font-size: 14px;
  }
}
.my_bgd {
  position: fixed;
  left: 195px;
  top: 95px;
  width: 70px;
  height: 70px;
  background-color: #eee;
  border-radius: 50%;
}
.loginin {
  position: fixed;
  left: 194px;
  top: 230px;
  width: 80px;
  border-radius: 5px;
}
</style>
