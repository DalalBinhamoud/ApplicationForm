import React, { useState } from 'react'
import {
  IonMenu,
  IonContent,
  IonList,
  IonMenuToggle,
  IonIcon,
  IonLabel,
  IonItem,
  IonButton,
} from '@ionic/react'
import { RouteComponentProps, useHistory, withRouter } from 'react-router'
import { ADMIN_PANEL, APPLCATIONS, DASHBOARD } from '../../router/routePaths'
import { statsChartOutline } from 'ionicons/icons'

interface Page {
  title: string
  path: string
  icon: any
}

const pages: Page[] = [
  {
    title: 'Dashboard',
    path: `${ADMIN_PANEL}${DASHBOARD}`,
    icon: statsChartOutline,
  },
  {
    title: 'Applications',
    path: `${ADMIN_PANEL}${APPLCATIONS}`,
    icon: statsChartOutline,
  },
]

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
          <IonIcon icon={page.icon} />
          <IonLabel>{page.title}</IonLabel>
        </IonItem>
      </IonMenuToggle>
    ))
  }

  const navigateToPage = (page: Page) => {
    history.push(page.path)
    setActivePage(page.title)
  }

  return (
    <IonMenu
      contentId="main"
      // style={{ zIndex: '2' }}
      // hidden={!isLoggedIn}
    >
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
        </IonMenuToggle>
      </IonContent>
    </IonMenu>
  )
}

export default withRouter(Layout)

// export default Layout
