<template>
  <div>
    <div class="dingbu">
      <van-nav-bar title="账号登录" left-arrow @click-left="onClickLeft" />
    </div>
    <div>
      <van-form @submit="onSubmit">
        <van-field v-model="username" placeholder="请输入账号" />
        <van-field
          v-model="password"
          type="password"
          placeholder="请输入密码"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >登录</van-button
          >
        </div>
        <div class="dibu"><a href="">还没有账号，去注册~</a></div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { loginApi } from '@/api'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit () {
      const data = { username: this.username, password: this.password }
      try {
        const res = await loginApi(data)
        console.log(res)
        this.$toast.success('登录成功')
      } catch (error) {
        console.log(error)
      }
    },
    // 点击返回主页
    onClickLeft () {
      this.$router.push('/layout/my')
      // console.log(123)
    }
  }
}
</script>

<style scoped lang="less">
:deep(.van-nav-bar__left) {
  margin: 0;
}
.van-nav-bar {
  background-color: #1cb676;
}
:deep(.van-nav-bar__title) {
  color: #fff;
}
:deep(.van-icon) {
  color: #fff;
}
.van-button {
  background-color: #1cb676;
}
.van-cell {
  height: 60px;
}
:deep(.van-field__control) {
  line-height: 40px;
  font-size: 18px;
}
.dibu {
  margin-top: 30px;
  text-align: center;
  font-size: 14px;
  color: black;
}
</style>
