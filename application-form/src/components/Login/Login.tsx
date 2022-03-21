import React from 'react'
import {
  IonContent,
  IonRow,
  IonCol,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
} from '@ionic/react'
import { personCircle } from 'ionicons/icons'
import styles from './Login.module.scss'
import { useAuthenticationService } from '../../services/authentication.service'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

interface ContainerProps {}

const Login: React.FC<ContainerProps> = () => {
  const { login } = useAuthenticationService()

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    },
  })

  const handleLogin = () => {
    const loginData = {
      email: getValues('email'),
      password: getValues('password'),
    }
    login(loginData)
  }
  return (
    <>
      <IonContent fullscreen>
        <IonRow class="ion-text-center">
          <IonCol>
            <IonIcon className={styles['avatar']} icon={personCircle} />
          </IonCol>
        </IonRow>
        <form className="ion-padding" onSubmit={handleSubmit(handleLogin)}>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput
                  value={getValues('email')}
                  placeholder="enter email"
                  {...register('email', {
                    required: 'required field',
                  })}
                />
              </IonItem>
              <ErrorMessage
                errors={errors}
                name="email"
                as={<div style={{ color: 'red' }} />}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput
                  value={getValues('password')}
                  placeholder="enter password"
                  {...register('password', {
                    required: 'required field',
                  })}
                />
              </IonItem>
              <ErrorMessage
                errors={errors}
                name="password"
                as={<div style={{ color: 'red' }} />}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand="block" type="submit">
                Login
              </IonButton>
            </IonCol>
          </IonRow>
        </form>
      </IonContent>
    </>
  )
}

export default Login
