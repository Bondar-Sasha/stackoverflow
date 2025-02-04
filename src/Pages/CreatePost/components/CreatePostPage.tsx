import {FC} from 'react'
import {Field, Formik} from 'formik'
import * as Yup from 'yup'

import {Editor} from '../../../Widgets'
import {
  BasicFormInput,
  BasicFormTextarea,
  BasicFormWrapper,
  SubmitButton,
} from '../../../Features'
import {} from '../../../Shared'
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
  language: '',
  description: '',
  attachedCode: '',
}
const CreatePostPage: FC = () => {
  const [createQuestion, {isLoading}] = useCreateQuestionMutation()
  const handleSubmit = async (formData: DataForCreatingQuestion) => {
    try {
      console.log(formData)
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
      <h1 className="mb-5 text-3xl">Create a new post</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({isValid, setFieldValue}) => (
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
            <Field
              as={Editor}
              className="mb-3 h-52"
              language="javascript"
              name="attachedCode"
              onChange={(newValue: string) => {
                setFieldValue('attachedCode', newValue)
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

export default CreatePostPage
