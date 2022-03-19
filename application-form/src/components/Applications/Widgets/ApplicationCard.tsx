import React, { useState } from 'react'
import {
  IonCard,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonInput,
  useIonAlert,
} from '@ionic/react'
import {} from 'ionicons/icons'
import styles from '../Applications.module.scss'
import {
  personCircle,
  callOutline,
  createOutline,
  trashOutline,
} from 'ionicons/icons'
import { DownloadAttachment } from '../../AttachmentController/DownloadAttachment'
import { IApplication } from '../../../interfaces/IApplication'
import useApplicaiontController from '../../../hooks/useApplicaiontController'
import { UtilConsts } from '../../../helpers'
import { Select } from '../../General/Select/Select'

interface IProps {
  applicationInfo: IApplication
}

export const ApplicationCard: React.FC<IProps> = ({ applicationInfo }) => {
  const { id, jobTitle, status, candidateInfo } = applicationInfo
  const [isViewMode, setIsViewMode] = useState(true)
  const [applicationStatus, setApplicationStatus] = useState(status)
  const [name, setName] = useState(candidateInfo.name)
  const [phone, setPhone] = useState(candidateInfo.phone)
  const {
    handleApplicationEdit,
    handleApplicationDelete,
  } = useApplicaiontController()
  const [present] = useIonAlert()
  const {
    created,
    completed,
    accepted,
    rejected,
  } = UtilConsts.ApplicationStatus()
  const statusOpts = [created, completed, accepted, rejected]

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
  return (
    <div className={styles['container']}>
      <IonCard>
        <IonItem>
          <IonLabel>{jobTitle}</IonLabel>

          <Select
            selectedOpt={applicationStatus}
            options={statusOpts}
            setNewOpt={setApplicationStatus}
            isDisabled={isViewMode}
          />

          {isViewMode ? (
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
                    message:
                      'Are you sure you want to delete this application?',
                    buttons: [
                      'Cancel',
                      {
                        text: 'Ok',
                        handler: (d) => handleApplicationDelete(id),
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
          )}
        </IonItem>

        <IonCardContent>
          <div style={{ display: 'flex' }}>
            <IonItem>
              <IonIcon icon={personCircle} slot="start" />
              <IonInput
                type="text"
                disabled={isViewMode}
                value={name}
                onIonChange={(e) => {
                  setName(e.detail.value!)
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonIcon icon={callOutline} slot="start" />
              <IonInput
                type="text"
                disabled={isViewMode}
                value={phone}
                onIonChange={(e) => {
                  setPhone(e.detail.value!)
                }}
              ></IonInput>
            </IonItem>
          </div>
          {isViewMode && <DownloadAttachment />}
        </IonCardContent>
      </IonCard>
    </div>
  )
}
