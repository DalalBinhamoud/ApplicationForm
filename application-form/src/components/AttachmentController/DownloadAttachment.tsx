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

// async writeFile() {
//     if (this.downloadedFile == null) return;
//     var filename = 'myDownloadedPdfFile3.pdf';
//     await this.createFile(filename);
//     await this.writeToFile(filename);
//   }

//   async createFile(filename) {
//     return this.file.createFile(this.file.externalRootDirectory, filename, false).catch(err => {
//       console.error(err);
//     })
//   }

//   writeToFile(filename) {
//     return this.file.writeFile(this.file.externalRootDirectory, filename, this.downloadedFile, { replace: true, append: false }).then(createdFile => {
//       console.log('File written successfully.');
//       console.log(createdFile)
//     }).catch(err => {
//       console.error(err);
//     });
//   }
// }

export const DownloadAttachment = () => {
  const downloadFile = () => {
    const url = 'http://africau.edu/images/default/sample.pdf'
    // this.http
    //   .sendRequest(url, { method: 'get', responseType: 'arraybuffer' })
    //   .then((httpResponse) => {
    //     console.log('File dowloaded successfully')
    //     this.downloadedFile = new Blob([httpResponse.data], {
    //       type: 'application/pdf',
    //     })
    //   })
    //   .catch((err) => {
    //     console.error(err)
    //   })
  }

  return <IonButton onClick={downloadFile}>Download Resume</IonButton>
}
