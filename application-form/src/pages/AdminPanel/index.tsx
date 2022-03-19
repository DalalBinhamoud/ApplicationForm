import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import { APPLCATIONS, DASHBOARD } from '../../router/routePaths'
import { Page404 } from '../../router'
import Dashboard from '../../components/Dashboard/Dashboard'
import Applications from '../../components/Applications/Applications'

const RouterOutlet: FC = () => {
  return (
    <Switch>
      <Route path={APPLCATIONS} component={Applications} />
      <Route path={DASHBOARD} component={Dashboard} />
      <Page404 />
    </Switch>
  )
}

export default RouterOutlet
