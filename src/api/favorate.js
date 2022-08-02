import request from '@/utils/request'
export const favorate = () => {
  return request({
    url: '/user/favorites'
  })
}
