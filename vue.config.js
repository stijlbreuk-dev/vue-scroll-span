module.exports = {
  css: {
    extract: false
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    },
    devtool: process.env.NODE_ENV === 'development' ? 'eval-source-map' : 'source-map'
  }
};
