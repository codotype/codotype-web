const path = require('path');
let outputDir = path.resolve(__dirname, 'dist')

module.exports = {
  chainWebpack: config => config.resolve.symlinks(false),
  outputDir: outputDir,
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/api/': { target: `http://localhost:${process.env.PORT || '4000'}` },
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.html$/i,
          use: 'raw-loader',
        },
      ],
    }
  }
}

