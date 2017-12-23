/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types'
import { Route, Switch, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic'
import MainLayout from './components/layouts/main-layouts'

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
      path: '/',
      component: () => import('./routes/event/containers/171224.js'),
    },
    {
      path: '/event/asq/result',
      component: () => import('./routes/event/components/asq-result.js'),
    },
    {
      path: '/event/asq',
      models: () => [import('./routes/event/models')],
      component: () => import('./routes/event/containers/asq.js'),
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
          {/* <Route exact path="/" render={() => (<Redirect to="/event/171224" />)} /> */}
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route
                key={`route-${key}`}
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
