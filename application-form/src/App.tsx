import React from 'react'
import {
  IonApp,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { RouterOutlet } from './router'

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
import { getItem } from './helpers'

setupIonicReact()

const App: React.FC = () => {
  //const isLoggedin = getItem('token') ? true : false
  const isLoggedin = 'open'
  return (
    <IonApp>
      <IonSplitPane contentId="main">
        {/* expose layout if user is logged-in */}
        {isLoggedin.length > 0 && <Layout />}
        <IonPage id="main">
          <IonReactRouter>
            <IonRouterOutlet>
              <RouterOutlet />
            </IonRouterOutlet>
          </IonReactRouter>
        </IonPage>
      </IonSplitPane>
    </IonApp>
  )
}

export default App
