import { FC } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Errors, useLoginMutation } from '../../../Shared'

import {
  AuthFormInput,
  BasicFormWrapper,
  SubmitButton,
} from '../../../Features'

interface LoginFormData {
  username: string
  password: string
}

const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .min(5, 'Username must be at least 5 characters')
    .matches(
      /^[A-Za-z0-9]+$/,
      'Username must contain only Latin letters and numbers'
    ),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^[A-Za-z0-9]+$/,
      'Password must contain only Latin letters and numbers'
    ),
})

const initialValues: LoginFormData = {
  username: '',
  password: '',
}

const LoginPage: FC = () => {
  const [login, { isLoading }] = useLoginMutation()
  const onSubmit = async (formData: LoginFormData) => {
    try {
      const response = await login(formData).unwrap()
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
    <div className="flex flex-col items-center m-6 max-w-96 w-full">
      <h2 className="text-2xl text-ordinary-text mb-3">Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isValid }) => (
          <BasicFormWrapper>
            {' '}
            <AuthFormInput
              placeholder="username"
              name="username"
              inputType="text"
            />
            <AuthFormInput
              placeholder="password"
              name="password"
              inputType="password"
            />
            <SubmitButton isLoading={isLoading} isValid={isValid}>
              Log in
            </SubmitButton>
          </BasicFormWrapper>
        )}
      </Formik>
      <div className="mt-4 flex justify-between w-full">
        <span>I do not have an account</span>
        <Link to="/auth/registration" className="text-theme hover:underline">
          sing up
        </Link>
      </div>
    </div>
  )
}

export default LoginPage
