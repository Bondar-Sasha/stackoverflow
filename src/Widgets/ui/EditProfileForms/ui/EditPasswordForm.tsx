import {FC} from 'react'
import {Form, Formik} from 'formik'
import {toast} from 'react-toastify'
import * as Yup from 'yup'

import {
  BasicButton,
  Errors,
  Spinner,
  usePatchMyPasswordMutation,
} from '@/Shared'
import {FormInput} from '@/Features'

interface FormData {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

const validationSchema = Yup.object({
  oldPassword: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^[A-Za-z0-9]+$/,
      'Password must contain only Latin letters and numbers'
    ),
  newPassword: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^[A-Za-z0-9]+$/,
      'Password must contain only Latin letters and numbers'
    ),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
})

const initialValues: FormData = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
}

const EditPasswordForm: FC = () => {
  const [changePassword, {isLoading}] = usePatchMyPasswordMutation()

  const submitForm = async ({oldPassword, newPassword}: FormData) => {
    try {
      const response = await changePassword({
        oldPassword,
        newPassword,
      }).unwrap()
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
    <div className="flex flex-col w-2/6 min-w-fit">
      <p className="mb-2">Change your password:</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {({isValid}) => (
          <Form>
            <FormInput
              placeholder="old password"
              name="oldPassword"
              inputType="password"
              autoComplete="current-password"
            />
            <FormInput
              placeholder="new password"
              name="newPassword"
              inputType="password"
              autoComplete="new-password"
            />
            <FormInput
              placeholder="confirm password"
              name="confirmPassword"
              inputType="password"
              autoComplete="new-password"
            />
            <BasicButton
              type="submit"
              disabled={isLoading}
              onClick={() => {
                if (!isValid) {
                  toast('Fill out the form correctly', {
                    autoClose: 2000,
                    type: 'warning',
                  })
                }
              }}
              className="flex items-center justify-center bg-theme h-11 rounded-full w-full text-osseous-theme"
            >
              {isLoading ? <Spinner /> : 'Change password'}
            </BasicButton>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default EditPasswordForm
