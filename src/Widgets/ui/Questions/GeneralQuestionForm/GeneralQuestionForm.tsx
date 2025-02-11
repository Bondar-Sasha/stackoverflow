import {FC} from 'react'
import * as Yup from 'yup'
import {Field, Form, Formik, FormikHelpers} from 'formik'
import {toast} from 'react-toastify'

import {Editor} from '@/Entities'
import {FormInput} from '@/Features'
import {BasicButton, Spinner} from '@/Shared'

export interface QuestionFormData {
  title: string
  description: string
  attachedCode: string
}
interface GeneralQuestionFormProps {
  submitButtonLabel: string
  formName: string
  isFetching: boolean
  onSubmit(
    formData: QuestionFormData,
    formikHelpers: FormikHelpers<QuestionFormData>
  ): Promise<void>
  initValues?: QuestionFormData
}

const validationSchema = Yup.object({
  title: Yup.string().required('Question title is required'),
  description: Yup.string(),
  attachedCode: Yup.string(),
})

const initialValues: QuestionFormData = {
  title: '',
  description: '',
  attachedCode: '',
}
const GeneralQuestionForm: FC<GeneralQuestionFormProps> = ({
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
        validationSchema={validationSchema}
        initialValues={initValues ?? initialValues}
        enableReinitialize
        onSubmit={onSubmit}
      >
        {({isValid, setFieldValue}) => (
          <Form>
            <FormInput
              placeholder="Question title"
              name="title"
              className="mb-5"
            />

            <FormInput placeholder="Question description" name="description" />
            <Field
              as={Editor}
              className="mb-3 h-52"
              language="javascript"
              name="attachedCode"
              onChange={(newValue: string) => {
                setFieldValue('attachedCode', newValue)
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

export default GeneralQuestionForm
