import React, { lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CAREER_PAGE, ADMIN_PANEL, APPLY } from './routePaths'
import AdminPanel from '../pages/AdminPanel'
import CareerPage from '../pages/CareerPage'

const Login = lazy(() => import('../components/Login/Login'))

const RouterOutlet = () => {
  return (
    <Switch>
      {/* <Route path={LOGIN} component={Login} />
      <Route exact path="/" component={Login} /> */}
      {/* the below route is for candidite user - no need to login*/}
      <Route exact path="/" component={Login} />
      <Route path={CAREER_PAGE} component={CareerPage} />
      <Route path={ADMIN_PANEL} component={AdminPanel} />
      <Page404 />
    </Switch>
  )
}

const Page404 = () => {
  // return isAuth ? (
  return <Route render={() => <Redirect to={`${CAREER_PAGE}${APPLY}`} />} />
  // ) : (
  //   <Route render={() => <Redirect to={LOGIN} />} />
  // )
}

export { RouterOutlet, Page404 }
