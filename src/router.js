import React from 'react';
import PropTypes from 'prop-types'
import { Router, Route, Switch, Redirect, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic'
import MainLayout from './components/layouts/main-layouts'

import IndexPage from './routes/IndexPage';

const { ConnectedRouter } = routerRedux

function Routers({ history, app }) {
  const error = dynamic({
    app,
    component: () => import('./routes/error'),
  })
  const routes = [
    {
      path: '/game/portal',
      models: () => [import('./models/example.js')],
      component: () => import('./routes/IndexPage.js'),
    },
    {
      path: '/sample',
      models: () => [import('./routes/sample/models')],
      component: () => import('./routes/sample/containers'),
    },
    // {
    //   path: '/game/portal',
    //   models: () => [import('./routes/game/game-portal/models')],
    //   component: () => import('./routes/game/game-portal/'),
    // }
  ]
  return (
    <ConnectedRouter history={history}>
      <MainLayout>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/game/portal" />)} />
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route key={key}
                     exact
                     path={path}
                     component={dynamic({
                       app,
                       ...dynamics,
                     })}
              />
            ))
          }
          <Route component={error} />
        </Switch>
      </MainLayout>
    </ConnectedRouter>
  )
}

Routers.propTyps = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers;
