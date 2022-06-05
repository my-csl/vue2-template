const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  // 对node_modules中的包进行babel转译，也可以传入正则或者包名数组选择性转移
  transpileDependencies: true
})
