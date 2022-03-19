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
        <IonRow class="ion-text-center">
          <IonCol>
            <p style={{ fontSize: 'medium' }}>
              Don't have an account? <a href="comming soon">Sign up!</a>
            </p>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  )
}

export default Dashboard

/**
 * import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default ExploreContainer;

 */
