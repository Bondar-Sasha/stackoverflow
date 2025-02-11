import {FC} from 'react'
import * as Yup from 'yup'
import {Field, Form, Formik, FormikHelpers} from 'formik'
import {SingleValue} from 'react-select'
import Select from 'react-select/base'

import {Editor} from '@/Entities'
import {ProgrammingLanguages, Spinner} from '@/Shared'
import {BasicButton} from 'custom-components-lib-test-react'
import {toast} from 'react-toastify'

export interface PostFormData {
  language: ProgrammingLanguages
  code: string
}
interface GeneraPostFormProps {
  submitButtonLabel: string
  formName: string
  isFetching: boolean
  onSubmit(
    formData: PostFormData,
    formikHelpers: FormikHelpers<PostFormData>
  ): Promise<void>
  initValues?: PostFormData
}

const validationSchema = Yup.object({
  language: Yup.string().required('Post programming language is required'),
  code: Yup.string().required('Post code is required'),
})
export interface OptionItem {
  value: ProgrammingLanguages
  label: Lowercase<ProgrammingLanguages>
}

const options: OptionItem[] = [
  {value: 'JavaScript', label: 'javascript'},
  {value: 'Ruby', label: 'ruby'},
  {value: 'C#', label: 'c#'},
  {value: 'Python', label: 'python'},
  {value: 'Java', label: 'java'},
  {value: 'C/C++', label: 'c/c++'},
  {value: 'Go', label: 'go'},
  {value: 'Kotlin', label: 'kotlin'},
]

const initialValues: PostFormData = {
  language: 'JavaScript',
  code: '',
}
const GeneraPostForm: FC<GeneraPostFormProps> = ({
  submitButtonLabel,
  initValues,
  onSubmit,
  formName,
  isFetching,
}) => {
  return (
    <>
      <h1 className="mb-5 text-3xl">{formName}</h1>
      <Formik
        initialValues={initValues ?? initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({isValid, values, setFieldValue}) => (
          <Form>
            <Field
              as={Select}
              name="language"
              className="mb-3"
              options={options}
              placeholder="language"
              onChange={(newValue: SingleValue<OptionItem>) => {
                setFieldValue('language', newValue?.value)
              }}
            />
            <Field
              as={Editor}
              className="mb-3 h-52"
              name="code"
              value={values.code}
              language={values.language.toLowerCase()}
              onChange={(newValue: string) => {
                setFieldValue('code', newValue)
              }}
            />
            <BasicButton
              type="submit"
              disabled={isFetching}
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
              {isFetching ? <Spinner /> : submitButtonLabel}
            </BasicButton>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default GeneraPostForm
