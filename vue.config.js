const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {

  css: {
    // предзагрузка sass, основные стили миксы
    loaderOptions: {
      sass: {
        data: "@import \"@/assets/sass/app.sass\"",

      },
    },
    sourceMap: true
  },
  // настройка exress сервера
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    },
  },
  // загрузка картинок
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options => Object.assign({}, options, { name: '[name].[ext]' }));
  },
  /*
  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  }
   */
}
