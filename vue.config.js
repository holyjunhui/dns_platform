'use strict'

const path = require('path')
console.log("3333333333333",process.env.NODE_ENV);
// 相对路径
function resolve(dir){
  return path.join(__dirname,dir)
}

const name = 'DNS PlatForm'

module.exports = {
  publicPath:'/', //部署应用包时的基本 URL 用法和 webpack 本身的 output.publicPath 一致
  outputDir:'dist', //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  assetsDir:'static', //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  productionSourceMap:false,
  devServer:{
    // open:true, // 运用命令是否自动打开链接
    overlay:{ // 用于错误信息是否铺满屏幕
      warnings:false,
      errors:true
    },
     proxy: { // 配置跨域
       "/v1": {
         target: "http://10.145.79.28:8080/api", // 这里后台的地址
         ws: false,
         changOrigin: true, // 允许跨域
         pathRewrite: {
           "^/v1": "" // 请求的时候使用这个api就可以
         }
       }
     }
    // after:require('./mock/mock-server.js')
  },
  configureWebpack:{
    name:name,
    resolve:{
      alias:{
        '@':resolve('src')
      }
    }
  },
  chainWebpack(config){
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId:'icon-[name]'
      })
      .end()
      // config.module
      //   .rule('vue')
      //   .use('vue-loader')
      //   .loader('vue-loader')
      //   .tap(options=>{
      //     options.comilerOptions.preserveWhitespace = true
      //     return options
      //   })
      //   .end()
      config
        // https://webpack.js.org/configuration/devtool/#development
        .when(process.env.NODE_ENV === 'development',
            config => config.devtool('cheap-source-map')
          )
  }
}