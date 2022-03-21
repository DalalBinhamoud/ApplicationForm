import React, { FC } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { APPLY } from '../../router/routePaths'
import { Page404 } from '../../router'
import ApplyForm from '../../components/ApplyForm/ApplyForm'

const RouterOutlet: FC = () => {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={`${path}${APPLY}`} component={ApplyForm} />
      <Page404 />
    </Switch>
  )
}

export default RouterOutlet
