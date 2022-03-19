// import './ExploreContainer.css'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonAlert,
} from '@ionic/react'
import React, { useState } from 'react'
import { personCircle } from 'ionicons/icons'
import styles from './Login.module.scss'
import { useAuthenticationService } from '../../services/authentication.service'
import { useForm } from 'react-hook-form'

interface ContainerProps {}

const Login: React.FC<ContainerProps> = () => {
  const [email, setEmail] = useState('eve.holt@reqres.in')
  const [password, setPassword] = useState('cityslicka')
  const [showAlert, setShowAlert] = useState(false)
  const { login } = useAuthenticationService()
  const { handleSubmit } = useForm()

  const handleLogin = () => {
    const loginData = {
      // "email": "eve.holt@reqres.in",
      // "password": "cityslicka"
      email: email,
      password: password,
    }
    login(loginData)
  }
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
            <IonIcon
              className={styles['avatar']}
              // position={'center'}

              icon={personCircle}
            />
          </IonCol>
        </IonRow>
        <form className="ion-padding" onSubmit={handleSubmit(handleLogin)}>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput
                  type="email"
                  value={email}
                  required={true}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand="block" onClick={handleLogin}>
                Login
              </IonButton>
              {/* <p style={{ fontSize: 'medium' }}>
                Don't have an account? <a href="comming soon"></a>
                <IonButton
                  expand="block"
                  className={styles['alert-btn']}
                  onClick={() => setShowAlert(true)}
                >
                  Sign up!
                </IonButton>
              </p>

              <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                header={'Comming soon'}
                buttons={['OK']}
              /> */}
            </IonCol>
          </IonRow>
        </form>
      </IonContent>
    </IonPage>
  )
}

export default Login
