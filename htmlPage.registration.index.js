module.exports = {
  HtmlWebpackPlugin: [{
    filename: 'registration/index.html',
    template: '_shared/layout.ejs',
    title: '會員註冊-填寫基本資料 Registration | 遠東百貨 Far Eastern Department Stores',
    action: 'Registration',
    description: '',
    chunks: ['registration/index']
  }]
};
