const registrationIndex = require('./htmlPage.registration.index.js');

module.exports = {
  tailwindcss: false,
  desktopMinWidth: 1366,
  mobileMaxWidth: 740,
  basicMobileWidth: 320,
  copyStatic: true,
  js: 'scripts/',
  css: 'assets/css/',
  imgs: 'assets/img/',
  svg: 'assets/svg/',
  fonts: 'static/fonts/',
  proxy: {
    '/mbr-api/**': {
      target: 'http://fedsv3-appapi.sugarfun.tw',
      changeOrigin: true
    }
  },
  plugins: () => {
    const def = [];
    let publish = def.concat(
      registrationIndex.HtmlWebpackPlugin
      // registrationComplete.HtmlWebpackPlugin
      // faqIndex.HtmlWebpackPlugin
    );

    return publish;
  }
};
