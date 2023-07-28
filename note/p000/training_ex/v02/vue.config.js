const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/v1/inference': {
        target: 'https://api.kakaobrain.com',
        chageOrigin: true
      }
    }
  }
})