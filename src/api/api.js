import request from '@/utils/request'

// 登录
export const login = data => {
  return request({
    url: '/api/login',
    methods: 'POST',
    data
  })
}
