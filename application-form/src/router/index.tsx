import React, { lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LOGIN, CAREER_PAGE, ADMIN_PANEL, DASHBOARD } from './routePaths'
import Login from '../components/Login/Login'
import AdminPanel from '../pages/AdminPanel'
import CareerPage from '../pages/CareerPage'
import { UtilConsts, getItem } from '../helpers'

// const Login = lazy(() => import('../components/Login/Login'))

const RouterOutlet = () => {
  return (
    <Switch>
      <Route path={LOGIN} component={Login} />
      <Route exact path="/" component={Login} />
      {/* the below route is for candidite user - no need to login*/}
      <Route path={CAREER_PAGE} component={CareerPage} />
      <Route path={ADMIN_PANEL} component={AdminPanel} />
      <Page404 />
    </Switch>
  )
}

const Page404 = () => {
  const { token } = UtilConsts.storageKeyNames()
  const tokenVal = ''

  //   : any = getItem(token) ? getItem(token) : ''
  return tokenVal.length > 0 ? (
    <Route render={() => <Redirect to={`${ADMIN_PANEL}${DASHBOARD}`} />} />
  ) : (
    <Route render={() => <Redirect to={LOGIN} />} />
  )
}

export { RouterOutlet, Page404 }
