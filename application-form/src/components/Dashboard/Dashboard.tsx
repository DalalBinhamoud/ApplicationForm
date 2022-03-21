// import './ExploreContainer.css'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
} from '@ionic/react'
import React, { useState } from 'react'
import { ChartContainer } from '../Charts/chartContainer'
interface ContainerProps {}

const Dashboard: React.FC<ContainerProps> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ChartContainer />
      </IonContent>
    </IonPage>
  )
}

export default Dashboard
