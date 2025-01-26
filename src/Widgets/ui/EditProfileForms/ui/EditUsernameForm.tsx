import { FC } from 'react'
import { Formik } from 'formik'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import {
  FormAuthInput,
  FormAuthWrapper,
  SubmitButton,
} from '../../../../Features'
import { Errors, usePatchMeMutation } from '../../../../Shared'

interface FormData {
  username: string
}

const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .min(5, 'Username must be at least 5 characters')
    .matches(
      /^[A-Za-z0-9]+$/,
      'Username must contain only Latin letters and numbers'
    ),
})

const initialValues: FormData = {
  username: '',
}

const EditUsernameForm: FC = () => {
  const [patchMe, { isLoading }] = usePatchMeMutation()
  const submitForm = async (formData: FormData) => {
    try {
      const response = await patchMe(formData).unwrap()

      toast(response.message, {
        type: 'success',
        autoClose: 1800,
      })
    } catch (err) {
      toast((err as Errors.ErrorWithData).data.message, {
        type: 'error',
        autoClose: 1800,
      })
    }
  }
  return (
    <div className="flex flex-col w-2/6">
      <p className="mb-2">Change your username:</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {({ isValid }) => (
          <FormAuthWrapper>
            <FormAuthInput
              placeholder="new username"
              name="username"
              inputType="text"
            />
            <SubmitButton isValid={isValid} isLoading={isLoading}>
              Save
            </SubmitButton>
          </FormAuthWrapper>
        )}
      </Formik>
    </div>
  )
}

export default EditUsernameForm
