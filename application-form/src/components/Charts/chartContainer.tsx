import React, { useEffect } from 'react'
import LineChart from './  LineChart'
import { PieChart } from './PieChart'
import { IonRow, IonCol } from '@ionic/react'
import { IResume } from '../../interfaces/IResume'
import { useDashboardService } from '../../services/dashboard.service'

interface IProps {
  chartData: any
}

export const ChartContainer = () => {
  const { getResumes, resumes } = useDashboardService()

  useEffect(() => {
    getResumes()
  }, [])
  const mockData: IResume[] = [
    {
      id: 1,
      overallScore: 80,
      firstName: 'test',
      lastName: 'test',
      resumeLink: 'test.test.com',
      LinkedInLink: 'test.test.com',
      status: 'accepted',
    },
    {
      id: 2,
      overallScore: 77,
      firstName: 'test2',
      lastName: 'test2',
      resumeLink: 'test2.test.com',
      LinkedInLink: 'test2.test.com',
      status: 'accepted',
    },
    {
      id: 3,
      overallScore: 50,
      firstName: 'test3',
      lastName: 'test3',
      resumeLink: 'test3.test.com',
      LinkedInLink: 'test3.test.com',
      status: 'rejected',
    },
  ]

  return (
    <>
      <IonRow>
        <IonCol>
          <p>Statistics</p>
          <PieChart chartData={mockData} />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <p>Overall scores</p>
          <LineChart chartData={mockData} />
        </IonCol>
      </IonRow>
    </>
  )
}
