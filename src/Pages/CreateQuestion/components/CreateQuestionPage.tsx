import {FC} from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'

import {Editor} from '../../../Widgets'
import {
  BasicFormInput,
  BasicFormTextarea,
  BasicFormWrapper,
  SubmitButton,
} from '../../../Features'
import {useCreateQuestionMutation} from '../../../Shared'
import {toast} from 'react-toastify'

interface DataForCreatingQuestion {
  title: string
  description: string
  attachedCode: string
}

const validationSchema = Yup.object({
  title: Yup.string().required('question title is required'),
  description: Yup.string(),
  attachedCode: Yup.string(),
})

const initialValues: DataForCreatingQuestion = {
  title: '',
  description: '',
  attachedCode: '',
}
const CreateQuestionPage: FC = () => {
  const [createQuestion, {isLoading}] = useCreateQuestionMutation()
  const handleSubmit = async (formData: DataForCreatingQuestion) => {
    try {
      await createQuestion(formData).unwrap()
      toast('Question was created', {
        type: 'success',
        autoClose: 1800,
      })
    } catch (err) {
      toast('server error', {
        type: 'success',
        autoClose: 1800,
      })
      console.error(err)
    }
  }

  return (
    <div className="w-full p-6 flex-center flex-col">
      <h1 className="mb-5 text-3xl">Ask a question</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({values, setFieldValue, isValid}) => (
          <BasicFormWrapper>
            <BasicFormInput
              placeholder="question title"
              name="title"
              className="mb-5"
            />
            <BasicFormTextarea
              placeholder="question description"
              name="description"
            />
            <Editor
              language="javascript"
              className="mb-3"
              code={values.attachedCode}
              onChange={(_editor, _data, value) => {
                setFieldValue('attachedCode', value)
              }}
            />
            <SubmitButton isLoading={isLoading} isValid={isValid}>
              create question
            </SubmitButton>
          </BasicFormWrapper>
        )}
      </Formik>
    </div>
  )
}

export default CreateQuestionPage
