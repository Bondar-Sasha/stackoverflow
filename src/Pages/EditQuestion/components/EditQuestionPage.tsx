import {FC} from 'react'
import {useParams} from 'react-router-dom'
import {toast} from 'react-toastify'

import {
  DownloadMask,
  GeneralQuestionForm,
  NotFoundMask,
  QuestionFormData,
} from '@/Widgets'
import {
  isPositiveInteger,
  useEditQuestionMutation,
  useGetQuestionQuery,
} from '@/Shared'
import {Params} from '@/Processes'

const EditQuestionPage: FC = () => {
  const params = useParams<Params>()
  const [editQuestion, {isLoading}] = useEditQuestionMutation()

  const {isLoading: fetchingQuestion, data} = useGetQuestionQuery(
    {
      id: Number(params.questionId),
    },
    {skip: !isPositiveInteger(params.questionId)}
  )

  const handleSubmit = async (formData: QuestionFormData) => {
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
      toast('error', {
        type: 'error',
        autoClose: 1800,
      })
      console.error(error)
    }
  }
  if (!data) {
    return <NotFoundMask label="There is no such question" />
  }

  if (fetchingQuestion) {
    return <DownloadMask />
  }

  const initValues: QuestionFormData = {
    title: data.data.title,
    description: data.data.description,
    attachedCode: data.data.attachedCode,
  }

  return (
    <div className="w-3/4 p-6 flex-center flex-col">
      <GeneralQuestionForm
        isFetching={isLoading}
        onSubmit={handleSubmit}
        formName="Edit your question:"
        submitButtonLabel="commit changes"
        initValues={initValues}
      />
    </div>
  )
}

export default EditQuestionPage
