import React from 'react'
import { IonSelect, IonSelectOption } from '@ionic/react'

interface IProps {
  selectedOpt: string
  options: string[]
  setNewOpt: React.Dispatch<React.SetStateAction<string>>
  isDisabled: boolean
}

export const Select: React.FC<IProps> = ({
  selectedOpt,
  options,
  setNewOpt,
  isDisabled,
}) => {
  return (
    <IonSelect
      value={selectedOpt}
      disabled={isDisabled}
      onIonChange={(e) => {
        setNewOpt(e.detail.value)
      }}
    >
      {options.map((option, index) => {
        return (
          <IonSelectOption key={index} value={option}>
            {option}
          </IonSelectOption>
        )
      })}
    </IonSelect>
  )
}
