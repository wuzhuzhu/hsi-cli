import React from 'react';
import { connect } from 'dva';
import { get } from 'lodash';
// import { translate } from 'react-i18next';

import Asq from '../components/asq';
import { fetchAsqList } from '../models/actions'
// import { makeMultiedCounter } from '../models/selector'

// 通过装饰器传递命名空间，使用t function将命名空间内的key对应翻译文案统一传入msgs
// @translate('sample')
@connect(mapStateToProps, {
  fetchAsqList,
})
class Container extends React.Component {
  componentDidMount() {
    this.props.fetchAsqList()
  }

  render() {
    return <Asq {...this.props} />
  }
}

function mapStateToProps(state) {
  return {
    // loadingSample: get(state, 'loading.models.sample'),
    // multiedCounter: makeMultiedCounter(state),
  };
}

export default Container;
