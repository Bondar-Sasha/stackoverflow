import {FC} from 'react'
import * as Yup from 'yup'
import {Field, Formik, FormikHelpers} from 'formik'
import {SingleValue} from 'react-select'

import {BasicFormWrapper, SubmitButton} from '../../../../../Features'
import {Editor} from '../../../../../Entities'
import {OptionItem, ProgLangSelect} from '../../../../../Entities'
import {ProgrammingLanguages} from '../../../../../Shared'

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
          <BasicFormWrapper>
            <Field
              as={ProgLangSelect}
              name="language"
              className="mb-3"
              value={values.language}
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

            <SubmitButton isLoading={isFetching} isValid={isValid}>
              {submitButtonLabel}
            </SubmitButton>
          </BasicFormWrapper>
        )}
      </Formik>
    </>
  )
}

export default GeneraPostForm
