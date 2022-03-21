import React, { useEffect, useState, FC } from 'react'
import LineChart from './  LineChart'
import { PieChart } from './PieChart'
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

interface IProps {
  chartData: any
}

export const ChartContainer: FC<IProps> = ({ chartData }) => {
  const [complianceAvg, setComplianceAvg] = useState(0)

  useEffect(() => {
    if (chartData) {
      let complianceResults = 0
      let numOfEntities = 0
    }
  }, [chartData])

  return (
    <div style={{ marginTop: '5rem' }}>
      {chartData && (
        <IonRow style={{ flexDirection: 'column' }}>
          <>
            <IonCol>
              <p>NUM_OF_VERSION</p>
              <PieChart chartData={chartData} chartType={'numOfVersions'} />
            </IonCol>

            <IonCol>
              <LineChart chartData={chartData} />
            </IonCol>
          </>
        </IonRow>
      )}
    </div>
  )
}
