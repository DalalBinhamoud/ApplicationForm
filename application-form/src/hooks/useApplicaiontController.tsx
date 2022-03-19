import React from 'react'
import { IApplication } from '../interfaces/IApplication'

export default function useApplicaiontController() {
  const handleApplicationEdit = (
    setIsViewMode: React.Dispatch<React.SetStateAction<boolean>>,
    newData: IApplication,
  ) => {
    console.log(newData)
    setIsViewMode(true)
    // return ''

    // confirm({
    //   title: (
    //     <div className={styles['confirm-title']}>
    //       <span className={styles['confirm-icon']}>
    //         <ExclamationCircleFilled style={{ color: '#ECA300' }} />
    //       </span>
    //       {`${t('DELETE_ASSIGNMENT_CONFIRMATION_MSG')} "${name}"`}
    //     </div>
    //   ),
    //   icon: null,
    //   okText: indexLabels.YES_TEXT,
    //   okType: 'primary',
    //   okButtonProps: { danger: true },
    //   cancelText: indexLabels.NO_TEXT,
    //   onOk() {
    //     assignmentService.deleteAssignment(id)
    //   },
    // })
  }
  const handleApplicationDelete = (id: number) => {
    // return ''
    // confirm({
    //   title: (
    //     <div className={styles['confirm-title']}>
    //       <span className={styles['confirm-icon']}>
    //         <ExclamationCircleFilled style={{ color: '#ECA300' }} />
    //       </span>
    //       {`${t('DELETE_ASSIGNMENT_CONFIRMATION_MSG')} "${name}"`}
    //     </div>
    //   ),
    //   icon: null,
    //   okText: indexLabels.YES_TEXT,
    //   okType: 'primary',
    //   okButtonProps: { danger: true },
    //   cancelText: indexLabels.NO_TEXT,
    //   onOk() {
    //     assignmentService.deleteAssignment(id)
    //   },
    // })
  }

  return { handleApplicationEdit, handleApplicationDelete }
}
