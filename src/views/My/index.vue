<template>
  <div class="my_dhz">
      <!-- 已登录 -->
    <div v-if="isshow">
      <div >
        <!-- 背景图 -->
        <div>
          <img src="http://liufusong.top:8080/img/avatar.png" alt="" />
        </div>
        <!-- 头像 -->
        <div class="my_bc">
          <div class="my_bgd">
            <img
              src="http://liufusong.top:8080/img/profile/avatar.png"
              alt=""
            />
          </div>
          <span class="dier">好客_845296</span>
          <van-button type="primary" size="small" class="loginins"
           @click="quit">退出</van-button
          >
        <div class="my_means" @click="changeUser"><h5>编辑个人资料<i><van-icon name="arrow" /></i></h5></div>
        </div>
      </div>
    </div>
      <!-- 未登录 -->
    <div v-else>
      <!-- 背景图 -->
      <div>
        <img src="http://liufusong.top:8080/img/profile/bg.png" alt="" />
      </div>
      <!-- 头像 -->
      <div class="my_bc">
        <div class="my_bgd">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
        </div>
        <p>游客</p>
        <van-button type="primary" size="small" class="loginin" to="/login"
          >去登录</van-button
        >
      </div>
    </div>
    <!-- 底部点击模块 -->
    <div class="dibu" >
      <div class="my_fg" @click="shoucangUp" v-if="!isshow">
        <van-icon name="star-o" />
        <p>我的收藏</p>
      </div>
      <div class="my_fg" @click="shoucangList" v-else>
        <van-icon name="star-o" />
        <p>我的收藏</p>
      </div>

      <div class="my_fg" @click="shoucangUp" v-if="!isshow">
        <van-icon name="wap-home-o" />
        <p>我的出租</p>
      </div>
      <div class="my_fg" @click="chuzuList" v-else>
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
export default {
  data () {
    return {
      user: ''
    }
  },
  computed: {
    isshow () {
      return !!this.$store.state.user
    }
  },
  methods: {
    shoucangUp () {
      this.$router.push('/login')
    },
    // 登出
    quit () {
      this.$store.commit('STE_TOKEN', '')
    },
    shoucangList () {
      this.$router.push('/favorate')
    },
    changeUser () {},
    chuzuList () {
      this.$router.push('/rent')
    }
  }
}
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
    display: block;
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
  .dier {
    margin-left: 160px;
    line-height: 120px;
    font-size: 14px;
  }
  .my_means{
    margin-left: 160px;
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
.loginins{
  position: fixed;
  left: 210px;
  top: 220px;
  width: 50px;
  border-radius: 20px;
}
</style>
