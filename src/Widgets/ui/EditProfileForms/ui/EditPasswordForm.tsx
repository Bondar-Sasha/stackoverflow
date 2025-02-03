import {FC} from 'react'
import {Formik} from 'formik'
import {toast} from 'react-toastify'
import * as Yup from 'yup'

import {
  AuthFormInput,
  BasicFormWrapper,
  SubmitButton,
} from '../../../../Features'
import {Errors, usePatchMyPasswordMutation} from '../../../../Shared'

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
          <BasicFormWrapper>
            <AuthFormInput
              placeholder="old password"
              name="oldPassword"
              inputType="password"
              autoComplete="current-password"
            />
            <AuthFormInput
              placeholder="new password"
              name="newPassword"
              inputType="password"
              autoComplete="new-password"
            />
            <AuthFormInput
              placeholder="confirm password"
              name="confirmPassword"
              inputType="password"
              autoComplete="new-password"
            />
            <SubmitButton isValid={isValid} isLoading={isLoading}>
              Change password
            </SubmitButton>
          </BasicFormWrapper>
        )}
      </Formik>
    </div>
  )
}

export default EditPasswordForm
