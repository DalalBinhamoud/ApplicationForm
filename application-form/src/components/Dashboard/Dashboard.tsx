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
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ChartContainer chartData={[{ key: '1', value: '10' }]} />
      </IonContent>
    </IonPage>
  )
}

export default Dashboard
