import React, { useState } from 'react'
import {
  IonCard,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonInput,
} from '@ionic/react'
import {} from 'ionicons/icons'
import styles from '../Applications.module.scss'
import { personCircle, callOutline } from 'ionicons/icons'
import { DownloadAttachment } from '../../AttachmentController/DownloadAttachment'
import { IApplication } from '../../../interfaces/IApplication'
import { UtilConsts } from '../../../helpers'
import { Select } from '../../General/Select/Select'
import { ActionBtns } from './ActionBtns'

interface IProps {
  applicationInfo: IApplication
}

export const ApplicationCard: React.FC<IProps> = ({ applicationInfo }) => {
  const { jobTitle, status, candidateInfo } = applicationInfo
  const [isViewMode, setIsViewMode] = useState(true)
  const [applicationStatus, setApplicationStatus] = useState(status)
  const [name, setName] = useState(candidateInfo.name)
  const [phone, setPhone] = useState(candidateInfo.phone)
  const {
    created,
    completed,
    accepted,
    rejected,
  } = UtilConsts.ApplicationStatus()
  const statusOpts = [created, completed, accepted, rejected]

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

          <ActionBtns
            applicationInfo={applicationInfo}
            isViewMode={isViewMode}
            setIsViewMode={setIsViewMode}
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            applicationStatus={applicationStatus}
            setApplicationStatus={setApplicationStatus}
          />
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
