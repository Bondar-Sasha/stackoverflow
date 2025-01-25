import { FC } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'

import { BasicButton, BasicInput, Spinner } from '../../../Shared'
import { PasswordInput } from '../../../Entities'
import stylesForErrors from '../styles/errors.module.css'
import stylesForInput from '../styles/input.module.css'
import { toast } from 'react-toastify'
import { useRegisterMutation } from '../../../Features'

interface RegisterFormData {
  username: string
  password: string
  confirmPassword: string
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
    .min(5, 'Password must be at least 5 characters')
    .matches(
      /^[A-Za-z0-9]+$/,
      'Password must contain only Latin letters and numbers'
    ),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
})

const initialValues: RegisterFormData = {
  username: '',
  password: '',
  confirmPassword: '',
}

const RegisterPage: FC = () => {
  const navigate = useNavigate()
  const [register, { isLoading }] = useRegisterMutation()
  const onSubmit = async (values: RegisterFormData) => {
    try {
      await register(values)
      navigate('/auth/login')
      toast('Now login to new account', {
        type: 'success',
        autoClose: 2300,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex flex-col items-center m-6 max-w-96 w-full">
      <h2 className="text-2xl text-ordinary-text mb-3">Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isValid }) => (
          <Form className="text-ordinary-text flex flex-col w-full">
            <div className={`${stylesForInput.input}`}>
              <Field
                name="username"
                as={BasicInput}
                type="text"
                placeholder="username"
                className="rounded-full h-11 border-theme border-2 text-lg w-full pb-1"
              />
              <ErrorMessage
                name="username"
                component="span"
                className={`${stylesForErrors.error}`}
              />
            </div>

            <div className={`flex flex-col w-full ${stylesForInput.input}`}>
              <Field
                name="password"
                as={PasswordInput}
                placeholder="password"
                className="rounded-full h-11 border-theme border-2 text-lg w-full pb-1"
              />
              <ErrorMessage
                name="password"
                component="span"
                className={`${stylesForErrors.error}`}
              />
            </div>

            <div className={`${stylesForInput.input}`}>
              <Field
                name="confirmPassword"
                as={PasswordInput}
                autoComplete="new-password"
                placeholder="confirm password"
                className="rounded-full h-11 border-theme border-2 text-lg w-full pb-1"
              />
              <ErrorMessage
                name="confirmPassword"
                component="span"
                className={`${stylesForErrors.error}`}
              />
            </div>

            <BasicButton
              type="submit"
              onClick={() => {
                if (!isValid) {
                  toast('Fill out the form correctly', {
                    autoClose: 2000,
                    type: 'warning',
                  })
                }
              }}
              className="bg-theme h-11 rounded-full w-full"
            >
              <span>Sing up</span> {isLoading && <Spinner className="ml-2" />}
            </BasicButton>
          </Form>
        )}
      </Formik>
      <div className="mt-4 flex justify-between w-full">
        <span>Already have an account</span>
        <Link to="/auth/login" className="text-theme hover:underline">
          log in
        </Link>
      </div>
    </div>
  )
}

export default RegisterPage
