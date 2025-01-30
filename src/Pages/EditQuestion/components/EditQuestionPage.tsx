import {FC, useLayoutEffect, useState} from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {useParams} from 'react-router-dom'

import {DownloadMask, Editor} from '../../../Widgets'
import {
  BasicFormInput,
  BasicFormTextarea,
  BasicFormWrapper,
  SubmitButton,
} from '../../../Features'
import {useEditQuestionMutation, useLazyGetQuestionQuery} from '../../../Shared'

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
  const [getQuestion, {isLoading: fetchingQuestion}] = useLazyGetQuestionQuery()
  const [formValuesState, setFormValue] =
    useState<DataForCreatingQuestion>(initialValues)

  const handleSubmit = async (formData: DataForCreatingQuestion) => {
    try {
      await editQuestion({
        id: Number(params.questionId),
        ...formData,
      }).unwrap()
    } catch (error) {
      console.error(error)
    }
  }

  useLayoutEffect(() => {
    const getLazyQuestion = async () => {
      try {
        const response = await getQuestion({
          id: Number(params.questionId),
        }).unwrap()
        setFormValue({
          title: response.data.title,
          description: response.data.description,
          attachedCode: response.data.attachedCode,
        })
      } catch (error) {
        console.error(error)
      }
    }
    getLazyQuestion()
  }, [getQuestion, params.questionId])

  if (fetchingQuestion) {
    return <DownloadMask />
  }

  return (
    <div className="w-full p-6 flex-center flex-col">
      <h1 className="mb-5 text-3xl">Edit your question</h1>
      <Formik
        validationSchema={validationSchema}
        initialValues={formValuesState}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({setFieldValue, isValid}) => (
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
            <Editor
              language="javascript"
              className="mb-3"
              code={formValuesState.attachedCode}
              onChange={(_editor, _data, value) => {
                setFieldValue('attachedCode', value)
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
