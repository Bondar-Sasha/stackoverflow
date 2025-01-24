import { FC } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

import { BasicButton, BasicInput, Spinner } from '../../../Shared'
import { PasswordInput } from '../../../Entities'
import stylesForErrors from '../styles/errors.module.css'
import stylesForInput from '../styles/input.module.css'
import { toast } from 'react-toastify'
import { userApiController } from '../../../Features'

const { loginControls } = userApiController

interface LoginFormData {
  username: string
  password: string
}

const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .min(5, 'Username must be at least 5 characters')
    .matches(/^[A-Za-z]+$/, 'Username must contain only Latin letters'),
  password: Yup.string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters')
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
  const [login, { isLoading }] = loginControls()
  const onSubmit = async (formData: LoginFormData) => {
    try {
      await login(formData)
      toast('You have successfully logged in', {
        type: 'success',
        autoClose: 1800,
      })
    } catch (error) {
      console.error(error)
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
        {() => (
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
            <BasicButton
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center bg-theme h-11 rounded-full w-full"
            >
              <span>Log in</span> {isLoading && <Spinner className="ml-2" />}
            </BasicButton>
          </Form>
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
