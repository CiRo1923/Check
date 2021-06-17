export const URLs = [{
  name: '登入',
  href: '/login'
}, {
  name: '註冊會員',
  subNavs: [{
    name: '填寫基本資料',
    href: '/registration'
  }, {
    name: '註冊認證',
    href: '/registration/otp.html'
  }, {
    name: '註冊完成',
    href: '/registration/complete.html'
  }]
}, {
  name: '常見問題',
  href: '/faq'
}, {
  name: '個資',
  subNavs: [{
    name: '會員條款',
    href: '/policy/terms.html'
  }, {
    name: '個資保護條款',
    href: '/policy'
  }]
}];

export default URLs;
