import React from 'react';
import { connect } from 'dva';

import styles from './IndexPage.less';

function TestPage() {
  return (
    <div className={styles.normal}>
     ThisIsATest
    </div>
  );
}

TestPage.propTypes = {
};

export default connect()(TestPage);
