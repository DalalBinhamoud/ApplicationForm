import React from 'react'
import { IonIcon, IonButton, useIonAlert } from '@ionic/react'
import {} from 'ionicons/icons'
import styles from '../Applications.module.scss'
import { createOutline, trashOutline } from 'ionicons/icons'
import { IApplication } from '../../../interfaces/IApplication'
import useApplicaiontController from '../../../hooks/useApplicaiontController'

interface IProps {
  applicationInfo: IApplication
  isViewMode: boolean
  setIsViewMode: React.Dispatch<React.SetStateAction<boolean>>
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  phone: string
  setPhone: React.Dispatch<React.SetStateAction<string>>
  applicationStatus: string
  setApplicationStatus: React.Dispatch<React.SetStateAction<string>>
}

export const ActionBtns: React.FC<IProps> = ({
  applicationInfo,
  isViewMode,
  setIsViewMode,
  name,
  setName,
  phone,
  setPhone,
  applicationStatus,
  setApplicationStatus,
}) => {
  const {
    handleApplicationEdit,
    handleApplicationDelete,
  } = useApplicaiontController()
  const [present] = useIonAlert()

  const saveChanges = () => {
    applicationInfo.candidateInfo.name = name
    applicationInfo.candidateInfo.phone = phone
    applicationInfo.status = applicationStatus
    handleApplicationEdit(setIsViewMode, applicationInfo)
  }

  const cancelChanges = () => {
    setName(applicationInfo.candidateInfo.name)
    setPhone(applicationInfo.candidateInfo.phone)
    setApplicationStatus(status)
    setIsViewMode(true)
  }

  return isViewMode ? (
    <>
      <IonButton
        fill="outline"
        slot="end"
        className={styles['action-btn']}
        onClick={() => setIsViewMode(false)}
      >
        <IonIcon icon={createOutline} slot="start" />
      </IonButton>

      <IonButton
        fill="outline"
        slot="end"
        className={styles['action-btn']}
        onClick={() =>
          present({
            header: 'Delete Application',
            message: 'Are you sure you want to delete this application?',
            buttons: [
              'Cancel',
              {
                text: 'Ok',
                handler: (d) => handleApplicationDelete(applicationInfo.id),
              },
            ],
            onDidDismiss: (e) => console.log('did dismiss'),
          })
        }
      >
        <IonIcon icon={trashOutline} slot="start" />
      </IonButton>
    </>
  ) : (
    <>
      <IonButton fill="outline" slot="end" onClick={cancelChanges}>
        cancel
      </IonButton>
      <IonButton fill="outline" slot="end" onClick={saveChanges}>
        Save
      </IonButton>
    </>
  )
}
