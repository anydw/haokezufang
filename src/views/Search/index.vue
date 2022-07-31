<template>
  <div>
    <!-- 搜索框 -->
    <div>
      <van-search
        v-model="values"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        van-search
      >
        <template #action>
          <div @click="onSearchRight"><i class="iconfont icon-map"></i></div>
        </template>
        <!-- <template #label>
        <div @click="onSearch" class="iconfont icon-zuojiantou"></div>
      </template> -->
      </van-search>
    </div>
    <div class="bt">

    <van-dropdown-menu>
    <van-dropdown-item v-model="value" :options="option" />
    <van-dropdown-item v-model="value" :options="option1" />
    <van-dropdown-item v-model="value" :options="option2" />
    <van-dropdown-item title="筛选" ref="item">
    <van-cell center title="包邮">
    </van-cell>
    <van-cell center title="团购">
    </van-cell>
    <div style="padding: 5px 16px;">
      <van-button type="danger" block  @click="onConfirm">
        确认
      </van-button>
    </div>
  </van-dropdown-item>
</van-dropdown-menu>
    </div>
    <div>
  <van-field
  readonly
  clickable
  label="城市"
  :value="valuee"
  placeholder="选择城市"
  @click="showPicker = true"
/>
<van-popup v-model="showPicker" round position="top">
  <van-picker
    show-toolbar
    :columns="columns"
    @cancel="showPicker = false"
    @confirm="onConfirm"
  />
</van-popup>
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
export default {
  data () {
    return {
      values: '',
      valuee: '',
      value: 0,
      showPicker: false,
      columns: [],
      switch1: false,
      switch2: false,
      option: [
        { text: '区域', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option1: [
        { text: '方式', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '租金', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ]

    }
  },
  methods: {
    onSearch () {},
    onSearchRight () {},
    showPopup () {
      this.show = true
    },
    onConfirm (value) {
      this.value = value
      this.showPicker = false
      this.$refs.item.toggle()
    }
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

</style>
