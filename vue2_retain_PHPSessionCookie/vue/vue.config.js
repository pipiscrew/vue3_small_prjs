//https://cli.vuejs.org/config/#devserver
//https://stackoverflow.com/a/52817464

//productionSourceMap false= disable source map files on PROD build
module.exports = {
  productionSourceMap: false, 
  publicPath: process.env.VUE_APP_BASE_URL,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost',
        // ws: true,
        // changeOrigin: true
      }
    }
  }
}