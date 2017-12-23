import dva from 'dva';
import moment from 'moment'
import 'antd-mobile/dist/antd-mobile.css';
import createLoading from 'dva-loading'
import createHistory from 'history/createBrowserHistory'
import adaptive from 'adaptive.js'
import { Toast } from 'antd-mobile'
import AV from 'leancloud-storage'

import './index.css';

export const browserHistory = createHistory()

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  history: browserHistory,
  onError(error) {
    // console.error(error)
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

// 7. leanCloud
const appId = 'ryBVDeMNRKzgGigb09UT7OnC-gzGzoHsz';
const appKey = 'oSWB9ovSDQREP2QaqB637WnS';
AV.init({ appId, appKey });

/*
var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
*/
