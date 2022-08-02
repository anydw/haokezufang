<template>
  <div>
    <!-- 搜索框 -->
    <div>
      <!-- <van-icon name="arrow-left" /> -->
      <van-search v-model="values" show-action placeholder="请输入搜索关键词">
        <template #action>
          <div><i class="iconfont icon-map"></i></div>
        </template>
        <!-- <template #label>
        <div @click="onSearch" class="iconfont icon-zuojiantou"></div>
      </template> -->
      </van-search>
    </div>
    <div>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value" title="区域">
          <van-picker :columns="columns" />
          <van-button class="my_qx">取消</van-button>
          <van-button class="my_qd">确定</van-button>
        </van-dropdown-item>
        <van-dropdown-item v-model="value" title="方式"></van-dropdown-item>
        <van-dropdown-item v-model="value" title="租金"></van-dropdown-item>
        <van-dropdown-item title="筛选" ref="item">
          <van-cell center title="包邮">
            <template #right-icon>
              <van-switch v-model="switch1" size="24" active-color="#ee0a24" />
            </template>
          </van-cell>
          <van-cell center title="团购">
            <template #right-icon>
              <van-switch v-model="switch2" size="24" active-color="#ee0a24" />
            </template>
          </van-cell>
          <div style="padding: 5px 16px">
            <van-button type="danger" block round @click="onConfirm">
              确认
            </van-button>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>

    <!-- 商品列 -->
    <div>
      <van-swipe-cell>
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          class="goods-card"
          thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
import { getSubway } from '@/api'
export default {
  data() {
    return {
      values: '',
      value: 0,
      switch1: false,
      switch2: false,
      columns: [
        {
          text: '区域',
          children: [
            {
              text: '杭州',
              children: [{ text: '西湖区' }, { text: '余杭区' }]
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            }
          ]
        },
        {
          text: '地铁',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }]
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }]
            }
          ]
        }
      ]
    }
  },
  methods: {
    onConfirm() {},
    async getSubwayList() {
      const res = await getSubway()
      console.log(res)
    }
  },
  created() {
    this.getSubwayList()
  }
}
</script>

<style scoped lang="less">
.van-search {
  background-color: #21b97a;
  .van-search_content {
    width: 400px;
  }
}

.goods-card {
  margin: 0;
  background-color: #fff;
}

.delete-button {
  height: 100%;
}
.van-popup {
  height: 300px;
}
.my_qx {
  width: 156px;
}
.my_qd {
  width: 313px;
  background-color: #21b97a;
}
</style>
