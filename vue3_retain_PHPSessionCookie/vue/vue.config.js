//https://cli.vuejs.org/config/#devserver
//https://stackoverflow.com/a/52817464

//productionSourceMap false= disable source map files on PROD build
module.exports = {
  productionSourceMap: false, 
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