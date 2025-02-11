import {FC} from 'react'
import {Form, Formik} from 'formik'
import * as Yup from 'yup'
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

import {BasicButton, Errors, Spinner, useRegisterMutation} from '@/Shared'
import {FormInput} from '@/Features'

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
    .min(6, 'Password must be at least 6 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(/[\W_]/, 'Password must contain at least one special character')
    .matches(
      /^[A-Za-z0-9\W_]+$/,
      'Password must contain only valid characters'
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
  const [register, {isLoading}] = useRegisterMutation()
  const onSubmit = async (values: RegisterFormData) => {
    try {
      await register(values).unwrap()
      navigate('/auth/login')
      toast('Now login to new account', {
        type: 'success',
        autoClose: 2300,
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
      <h2 className="text-2xl text-ordinary-text mb-3">Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({isValid}) => (
          <Form className={`text-ordinary-text flex flex-col w-full`}>
            <FormInput
              placeholder="username"
              name="username"
              inputType="text"
            />
            <FormInput
              placeholder="password"
              name="password"
              inputType="password"
            />
            <FormInput
              autoComplete="new-password"
              placeholder="confirm password"
              name="confirmPassword"
              inputType="password"
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
              {isLoading ? <Spinner /> : 'Sing up'}
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
