import {FC} from 'react'
import {toast} from 'react-toastify'
import {FormikHelpers} from 'formik'

import {useCreateQuestionMutation} from '@/Shared'
import {GeneralQuestionForm, QuestionFormData} from '@/Widgets'

const CreateQuestionPage: FC = () => {
  const [createQuestion, {isLoading}] = useCreateQuestionMutation()

  const handleSubmit = async (
    formData: QuestionFormData,
    {resetForm}: FormikHelpers<QuestionFormData>
  ) => {
    try {
      await createQuestion(formData).unwrap()
      toast('Question was created', {
        type: 'success',
        autoClose: 1800,
      })
      resetForm()
    } catch (error) {
      toast('error', {
        type: 'error',
        autoClose: 1800,
      })
      console.error(error)
    }
  }

  return (
    <div className="w-3/4 p-6 flex-center flex-col">
      <GeneralQuestionForm
        isFetching={isLoading}
        onSubmit={handleSubmit}
        formName="Ask a question:"
        submitButtonLabel="create"
      />
    </div>
  )
}

export default CreateQuestionPage
