import React from 'react'
import { Result, Icon } from 'antd-mobile';
import { browserHistory } from '../../index'

import Styles from './index.less'

const ResultPage = ({
  title = '成功',
  iconType = 'check-circle',
  iconColor = '#f16d84',
  message = '操作成功',
  redirectTo = '',
  redirectDelay = 3000,
}) => {
  if (redirectTo) {
    setTimeout(() => browserHistory.push(redirectTo), redirectDelay)
  }
  return (
    <div className={Styles['result-wrapper']}>
      <Result
        img={<Icon type={iconType} className={Styles.icon} style={{ fill: iconColor }} />}
        title={title}
        message={message}
      />
    </div>
  )
}

export default ResultPage
