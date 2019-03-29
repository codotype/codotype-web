const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

let outputDir = path.resolve(__dirname, 'dist')

module.exports = {
  chainWebpack: config => config.resolve.symlinks(false),
  outputDir: outputDir,
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/api/': { target: `http://localhost:${process.env.PORT || '3000'}` },
    }
  },
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: outputDir,
        routes: [
          '/',
          '/about'
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.txt$/i,
          use: 'raw-loader',
        },
      ],
    }
  }
}

