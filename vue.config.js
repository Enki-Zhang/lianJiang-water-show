const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  transpileDependencies: ['@xdh/my'],
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('$ui', '@xdh/my/ui/lib')
  },
}