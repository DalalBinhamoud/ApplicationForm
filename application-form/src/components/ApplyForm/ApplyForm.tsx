import React, { useState } from 'react'
import {
  IonLabel,
  IonBackButton,
  IonButtons,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonSelect,
  IonSelectOption,
} from '@ionic/react'
import { useForm, Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import * as RegularConstants from '../../helpers/RegularExpressionConstants'
import styles from './ApplyForm.module.scss'

const ApplyForm: React.FunctionComponent = () => {
  const {
    handleSubmit,
    control,
    setValue,
    register,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      job: '',
      skills: [],
      file: null,
    },
  })

  const preDefinedSkills = ['teamwork', 'communication', 'problem solving']

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Apply Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput
              placeholder="enter name"
              {...register('name', {
                required: 'required field',
                pattern: {
                  value: RegularConstants.ENGLISH_LETTERS,
                  message: 'name should contain letters only',
                },
              })}
            />
          </IonItem>
          <ErrorMessage
            errors={errors}
            name="name"
            as={<div style={{ color: 'red' }} />}
          />
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              placeholder="enter email"
              {...register('email', {
                required: 'required field',
                pattern: {
                  value: RegularConstants.EMAIL_REGEX,
                  message: 'invalid email address',
                },
              })}
            />
          </IonItem>
          <ErrorMessage
            errors={errors}
            name="email"
            as={<div style={{ color: 'red' }} />}
          />
          <IonItem>
            <IonLabel>Select Desired Job</IonLabel>
            <Controller
              render={({ field }) => (
                <IonSelect
                  value={field.value}
                  placeholder="Select a job"
                  onIonChange={(e) => setValue('job', e.detail.value)}
                >
                  <IonSelectOption value="FEMALE">Female</IonSelectOption>
                  <IonSelectOption value="MALE">Male</IonSelectOption>
                </IonSelect>
              )}
              control={control}
              name="job"
              rules={{ required: 'required field' }}
            />
          </IonItem>
          <ErrorMessage
            errors={errors}
            name="job"
            as={<div style={{ color: 'red' }} />}
          />

          <IonItem>
            <IonLabel>Select Skills</IonLabel>
            <Controller
              render={({ field }) => (
                <IonSelect
                  placeholder="Select skills"
                  value={field.value}
                  multiple={true}
                  onIonChange={(e) => {
                    setValue('skills', e.detail.value)
                  }}
                >
                  {preDefinedSkills.map((skill, index) => {
                    return (
                      <IonSelectOption value={skill} key={index}>
                        {skill}
                      </IonSelectOption>
                    )
                  })}
                </IonSelect>
              )}
              control={control}
              name="skills"
              rules={{ required: false }}
            />
          </IonItem>
          <ErrorMessage
            errors={errors}
            name="skills"
            as={<div style={{ color: 'red' }} />}
          />

          <div>
            <p>Upload CV</p>
            <IonItem>
              <input
                {...register}
                type="file"
                onChange={(e) => {
                  console.log('e=', e)
                  // setValue('file', e)
                }}
              />
            </IonItem>
          </div>

          <div className={styles['submit-btn']}>
            <IonButton type="submit">submit</IonButton>
          </div>
        </form>
      </IonContent>
    </>
  )
}

export default ApplyForm
