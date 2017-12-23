import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'antd-mobile';

import styles from './event.less';
import Nav from '../../../components/nav-bar'
import ContentList from './content-list'
import ProjectList from './project-list'
import { browserHistory } from '../../../index'

const EventPage = () => {
  // const { counterMsg } = msgs
  return (
    <div className={styles.normal}>
      <Nav />
      <div className={styles.content}>
        <ContentList />
      </div>
      <div className={styles.bottom}>
        <Button
          type="primary"
          icon="check-circle-o"
          style={{ borderRadius: 0 }}
          onClick={() => browserHistory.push('/event/asq')}
        >
          填写客户问卷
        </Button>
      </div>
    </div>
  );
};

export default EventPage;
