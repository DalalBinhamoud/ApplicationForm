import React, { useState } from 'react'
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonIcon,
  IonLabel,
  IonItem,
  IonButton,
  IonButtons,
} from '@ionic/react'
import { RouteComponentProps, useHistory, withRouter } from 'react-router'
import { APPLCATIONS, DASHBOARD } from '../../router/routePaths'

interface Page {
  title: string
  path: string
  icon: string
}

const pages: Page[] = [
  { title: 'Dashboard', path: DASHBOARD, icon: 'home' },
  { title: 'Applications', path: APPLCATIONS, icon: 'information' },
]

type Props = RouteComponentProps<{}>

const Layout = () => {
  const [activePage, setActivePage] = useState(pages[0].title)
  const [hide, setHide] = useState(false)
  const history = useHistory()

  const renderMenuItems = (): JSX.Element[] => {
    return pages.map((page: Page) => (
      <IonMenuToggle key={page.title} auto-hide="false">
        <IonItem
          button
          color={page.title === activePage ? 'primary' : ''}
          onClick={() => navigateToPage(page)}
        >
          <IonIcon slot="start" name={page.icon}></IonIcon>
          <IonLabel>{page.title}</IonLabel>
        </IonItem>
      </IonMenuToggle>
    ))
  }

  const navigateToPage = (page: Page) => {
    console.log('page=', page)
    history.push(page.path)
    setActivePage(page.title)
  }

  return (
    <IonMenu contentId="main">
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar> */}
      {/* <IonContent>
          <IonMenuToggle autoHide={false}>
            <IonButton>Toggle Menu</IonButton>
          </IonMenuToggle>
        </IonContent> */}

      {/* <IonToolbar>
          <IonButtons slot="start">
           
              <IonButton>
                <IonIcon slot="icon-only" name="menu"></IonIcon>
              </IonButton>
            </IonMenuToggle>
          </IonButtons>
          <IonTitle>Header</IonTitle>
        </IonToolbar>
      </IonHeader> */}

      <IonContent>
        <IonButton onClick={() => setHide(!hide)}>
          <IonIcon slot="icon-only" name="menu"></IonIcon>
        </IonButton>
        <IonMenuToggle
          autoHide={hide}
          //   onClick={() => {
          //     setHide(!hide)
          //   }}
        >
          <IonList>{renderMenuItems()}</IonList>

          {/* //           <IonButtons slot="start">
//             <IonMenuToggle>
//               <IonButton>
//                 <IonIcon slot="icon-only" name="menu"></IonIcon>
//               </IonButton>
//             </IonMenuToggle>
//           </IonButtons> */}
        </IonMenuToggle>
      </IonContent>
    </IonMenu>
  )
}

// export default withRouter(Layout)

export default Layout
