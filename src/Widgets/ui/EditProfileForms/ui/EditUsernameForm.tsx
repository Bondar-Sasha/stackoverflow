import {FC} from 'react'
import {Form, Formik} from 'formik'
import {toast} from 'react-toastify'
import * as Yup from 'yup'

import {BasicButton, Errors, Spinner, usePatchMeMutation} from '@/Shared'
import {FormInput} from '@/Features'

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
  const [patchMe, {isLoading}] = usePatchMeMutation()
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
    <div className="flex flex-col w-2/6 min-w-fit mb-2">
      <p className="mb-2">Change your username:</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {({isValid}) => (
          <Form>
            <FormInput
              placeholder="new username"
              name="username"
              inputType="text"
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

export default EditUsernameForm
