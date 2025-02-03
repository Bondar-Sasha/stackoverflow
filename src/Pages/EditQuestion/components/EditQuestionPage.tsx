import {FC} from 'react'
import {Field, Formik} from 'formik'
import * as Yup from 'yup'
import {useParams} from 'react-router-dom'
import {toast} from 'react-toastify'

import {DownloadMask, Editor} from '../../../Widgets'
import {
  BasicFormInput,
  BasicFormTextarea,
  BasicFormWrapper,
  SubmitButton,
} from '../../../Features'
import {useEditQuestionMutation, useGetQuestionQuery} from '../../../Shared'

interface DataForCreatingQuestion {
  title: string
  description: string
  attachedCode: string
}

const validationSchema = Yup.object({
  title: Yup.string().required('Question title is required'),
  description: Yup.string(),
  attachedCode: Yup.string(),
})

const initialValues: DataForCreatingQuestion = {
  title: '',
  description: '',
  attachedCode: '',
}

interface Params {
  questionId: string
  [key: string]: string
}

const EditQuestionPage: FC = () => {
  const params = useParams<Params>()
  const [editQuestion, {isLoading}] = useEditQuestionMutation()
  const {isLoading: fetchingQuestion, data} = useGetQuestionQuery({
    id: Number(params.questionId),
  })

  const handleSubmit = async (formData: DataForCreatingQuestion) => {
    try {
      await editQuestion({
        id: Number(params.questionId),
        ...formData,
      }).unwrap()
      toast('Question was edited', {
        type: 'success',
        autoClose: 1800,
      })
    } catch (error) {
      console.error(error)
    }
  }

  if (fetchingQuestion) {
    return <DownloadMask />
  }

  return (
    <div className="w-full p-6 flex-center flex-col">
      <h1 className="mb-5 text-3xl">Edit your question</h1>
      <Formik
        validationSchema={validationSchema}
        initialValues={data?.data ?? initialValues}
        enableReinitialize
        onSubmit={handleSubmit}
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
            <SubmitButton isLoading={isLoading} isValid={isValid}>
              Commit changes
            </SubmitButton>
          </BasicFormWrapper>
        )}
      </Formik>
    </div>
  )
}

export default EditQuestionPage
