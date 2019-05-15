module.exports = {
  configureWebpack:{
    externals: {
      'BMap': 'BMap'
    }
  },

  devServer: {
    // open: true,
    // host: 'localhost',
    // port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:4000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  },
};
