import React, { Component } from 'react';
// import { I18nextProvider } from 'react-i18next';
import { connect } from 'dva';
import Error from './error';

// @connect(null, mapDispatchToProps)
class ErrorContainer extends Component {
  render() {
    return (
      <div>
        <Error {...this.props} />
      </div>
    );
  }
}

export default ErrorContainer;
