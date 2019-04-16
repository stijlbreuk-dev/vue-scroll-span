module.exports = {
  css: {
    extract: false
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    },
    devtool: 'source-map'
  }
};
