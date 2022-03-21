import React from 'react'
import { render } from '@testing-library/react'
import ApplyForm from './ApplyForm'

test('page should have a title of Ionic React Apply Form', async () => {
  const { findByText } = render(<ApplyForm />)
  await findByText('Apply Form')
})
