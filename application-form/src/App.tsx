import React, { useEffect, useState } from 'react'
import {
  IonApp,
  IonContent,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { RouterOutlet } from './router'
import {
  Route,
  RouteComponentProps,
  useHistory,
  useLocation,
  withRouter,
} from 'react-router'
import {
  ADMIN_PANEL,
  APPLCATIONS,
  CAREER_PAGE,
  DASHBOARD,
} from './router/routePaths'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import Layout from './components/Layout'

setupIonicReact()

const App: React.FC = () => {
  // const [isLoggedIn, setIsLoggedin] = useState(false)

  //http://localhost:8100/admin-panel/dashboard
  //http://localhost:8100/admin-panel/applications
  //http://localhost:8100/career-page/apply
  //http://localhost:8100/login

  return (
    <IonApp>
      {/* expose layout if user is logged-in */}
      {/* {isLoggedin && <Layout />} */}

      <IonPage id="main">
        <IonReactRouter>
          {/* <IonSplitPane contentId="main"> */}
          {/* <Layout /> */}
          <IonRouterOutlet>
            {/* <div
                style={{
                  background: 'green',
                  marginRight: '20%',
                  width: '50%',
                }}
              > */}
            <RouterOutlet />
            {/* </div> */}
          </IonRouterOutlet>
          {/* </IonSplitPane> */}
        </IonReactRouter>
      </IonPage>
    </IonApp>
  )
}

export default App
