import dva from 'dva';
import moment from 'moment'
import 'antd-mobile/dist/antd-mobile.css';
import createLoading from 'dva-loading'
import createHistory from 'history/createBrowserHistory'
import adaptive from 'adaptive.js'
import { Toast } from 'antd-mobile'

import './index.css';

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  history: createHistory(),
  onError (error) {
    console.error(error)
    Toast.fail(error.message)
  },
})

// 2. Plugins
// app.use({});
moment.locale('zh-cn'); // moment设置中文

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

// 6. 高清解决方案
adaptive.desinWidth = 640;
adaptive.maxWidth = 640;
adaptive.baseFont = 24;
adaptive.scaleType = 1;
adaptive.init();
