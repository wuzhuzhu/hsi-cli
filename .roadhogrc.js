const pxtorem = require('postcss-pxtorem');

export default {
  entry: "src/index.js",
  hash: true,
  env: {
    extraBabelPlugins: [
      "extraBabelPlugins",
      "transform-runtime",
      [
        "import",
        {
          "libraryName": "antd",
          "style": true
        }
      ],
    ],
    development: {
      "extraBabelPlugins": [
        "dva-hmr",
      ],
    },
    production: {
      "extraBabelPlugins": [
        // "transform-runtime"
      ]
    }
  },
  define: {
    'process.env': {},
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.TEST': process.env.TEST,
  },
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 100,
      minPixelValue: 2,
      selectorBlackList: ['am'],  // 屏蔽pxtorem对antd.mobile的影响 https://github.com/cuth/postcss-pxtorem#options
      propWhiteList: [],
    }),
  ],
  autoprefixer: {
    browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
  },
   dllPlugin: {
    exclude: ["babel-runtime", "roadhog", "better-npm-run"],
    include: ["dva/router", "dva/saga", "dva/fetch"]
  },
  proxy: {
    "/api": {
      target: process.env.API_HOST,
      changeOrigin: true,
      pathRewrite: {"^/api": ""}
    },
    "/jdapi": {
      target: "http://cygame.jd.com",
      changeOrigin: true,
      pathRewrite: {"^/jdapi": ""}
    }
  }
}