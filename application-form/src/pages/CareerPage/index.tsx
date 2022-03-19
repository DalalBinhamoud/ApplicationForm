import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import { APPLY } from '../../router/routePaths'
import { Page404 } from '../../router'
import ApplyForm from '../../components/ApplyForm/ApplyForm'

const RouterOutlet: FC = () => {
  return (
    <Switch>
      <Route path={APPLY} component={ApplyForm} />
      <Page404 />
    </Switch>
  )
}

export default RouterOutlet
