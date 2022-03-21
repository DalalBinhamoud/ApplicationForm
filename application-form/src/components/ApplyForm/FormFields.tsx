import React from 'react'
import * as RegularConstants from '../../helpers/RegularExpressionConstants'

const FormFields = () => {
  const applyFields = [
    {
      formItemLabel: 'Name',
      formItemName: 'name',
      formItemPlaceholder: 'enter name',
      formItemType: 'input',
      formItemRegister: {
        required: 'required field',
        pattern: {
          value: RegularConstants.ENGLISH_LETTERS,
          message: 'name should contain letters only',
        },
      },
    },
    {
      formItemLabel: 'Email',
      formItemName: 'email',
      formItemPlaceholder: 'enter email',
      formItemType: 'input',
      formItemRegister: {
        required: 'required field',
        pattern: {
          value: RegularConstants.EMAIL_REGEX,
          message: 'invalid email address',
        },
      },
    },
    {
      formItemLabel: 'Select Desired Job',
      formItemName: 'job',
      formItemType: 'select',
      multipleSelect: false,
      formItemRegister: {
        required: 'required field',
      },
    },
    {
      formItemLabel: 'Skills',
      formItemName: 'skills',
      formItemType: 'select',
      multipleSelect: true,
      formItemRegister: {
        required: false,
      },
    },
  ]

  return {
    applyFields,
  }
}

export default FormFields
