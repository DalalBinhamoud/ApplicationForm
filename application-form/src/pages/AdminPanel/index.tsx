import React, { FC } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { APPLCATIONS, DASHBOARD } from '../../router/routePaths'
import { Page404 } from '../../router'
import Dashboard from '../../components/Dashboard/Dashboard'
import Applications from '../../components/Applications/Applications'

const RouterOutlet: FC = () => {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={`${path}${DASHBOARD}`} component={Dashboard} />
      <Route path={`${path}${APPLCATIONS}`} component={Applications} />
      <Page404 />
    </Switch>
  )
}

export default RouterOutlet
