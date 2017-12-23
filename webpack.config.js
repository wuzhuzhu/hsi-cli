/* eslint-disable no-param-reassign */
import webpack from 'webpack'
import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin.js'

module.exports = function (webpackConfig, env) {
  // 对roadhog默认配置进行操作，比如：
  if (env === 'production') {
    webpackConfig.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
    webpackConfig.entry.vendor = [
      'react',
      'react-dom',
      'react-helmet',
      // 'react-i18next',
      // 'i18next',
      // 'i18next-browser-languagedetector',
      // 'i18next-xhr-backend',
      'moment',
      // 'lodash',
      // 'localforage',
      'rc-form',
      // 'redux-persist',
      // 'isomorphic-fetch',
      // 'classnames',
      'reselect',

      // 已经确认的会增加拆解后总和体积的package, 不要把下列pack放入vendor里
      // 'socket.io',
      // 'socket.io-client',
      // 'axios',
    ]
    webpackConfig.plugins.push(new CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: Infinity,
    }))
   /* webpackConfig.entry = {
      index: './src/index.js',
      vendor: [
        'react',
        'react-dom',
      ],
    }
    webpackConfig.plugins.push(new CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: Infinity,
    }))*/
  }
  return webpackConfig;
}
