import {
  IonButton,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonItemSliding,
} from '@ionic/react'
import React, { useState } from 'react'
import { IApplication } from '../../interfaces/IApplication'
import { ApplicationCard } from './Widgets/ApplicationCard'

const Applications: React.FC = () => {
  const [data, setData] = useState<IApplication[]>([])
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(true)

  const pushData = () => {
    const max = data.length + 20
    const min = max - 20
    const newData = []
    if (data.length <= 100) {
      for (let i = min; i < max; i++) {
        newData.push({
          id: i,
          jobTitle: 'Senior Frontend Developer',
          status: 'Created',
          resumeId: i,
          candidateInfo: { id: i, name: 'test', phone: 'test' },
        })
      }
    }

    setData([...data, ...newData])
  }
  const loadData = (ev: any) => {
    setTimeout(() => {
      pushData()
      console.log('Loaded data')
      ev.target.complete()
      if (data.length === 100) {
        setInfiniteDisabled(true)
      }
    }, 500)
  }

  useIonViewWillEnter(() => {
    pushData()
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Applications</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Applications</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton
          onClick={() => setInfiniteDisabled(!isInfiniteDisabled)}
          expand="block"
        >
          Scroll
        </IonButton>

        <IonList>
          {data.map((item, index) => {
            return (
              <IonItemSliding>
                <IonItem key={index}>
                  <ApplicationCard applicationInfo={item} key={index} />
                </IonItem>
              </IonItemSliding>
            )
          })}
        </IonList>

        <IonInfiniteScroll
          onIonInfinite={loadData}
          // threshold="100px"
          disabled={isInfiniteDisabled}
        >
          <IonInfiniteScrollContent
            loadingSpinner="bubbles"
            loadingText="Loading more data..."
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  )
}

export default Applications
