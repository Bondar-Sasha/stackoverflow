import {FC} from 'react'
import * as Yup from 'yup'
import {Field, Formik, FormikHelpers} from 'formik'

import {
  BasicFormInput,
  BasicFormTextarea,
  BasicFormWrapper,
  SubmitButton,
} from '../../../../Features'
import {Editor} from '../../../../Entities'

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
          <BasicFormWrapper>
            <BasicFormInput
              placeholder="Question title"
              name="title"
              className="mb-5"
            />
            <BasicFormTextarea
              placeholder="Question description"
              name="description"
            />
            <Field
              as={Editor}
              className="mb-3 h-52"
              language="javascript"
              name="attachedCode"
              onChange={(newValue: string) => {
                setFieldValue('attachedCode', newValue)
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

export default GeneralQuestionForm
