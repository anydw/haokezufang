import request from '@/utils/request'
// 轮播图接口
export const bannerList = (params) => {
  return request({
    url: '/home/swiper',
    params
  })
}
export const groupsList = (params) => {
  return request({
    url: '/home/groups',
    params
  })
}
