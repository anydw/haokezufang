import request from '@/utils/request'

export const getSubway = () => {
  return request({
    url: '/houses'
  })
}
