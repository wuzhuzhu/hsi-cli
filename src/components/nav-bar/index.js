import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import styles from './index.less'
import { browserHistory } from '../../index'

function Nav() {
  return (
    <div className={styles.wrapper}>
      <NavBar
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={() => browserHistory.push('/')}
        // rightContent={[
        //   <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        //   <Icon key="1" type="ellipsis" />,
        // ]}
      >学习型中国-世纪成功论坛
      </NavBar>
    </div>
  )
}

export default Nav
