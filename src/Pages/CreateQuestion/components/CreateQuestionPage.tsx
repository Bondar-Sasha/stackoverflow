import { FC, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { Editor } from '../../../Widgets'
import { BasicFormWrapper, SubmitButton } from '../../../Features'

interface DataForCreatingQuestion {
  title: string
  description: string
  code: string
}

const validationSchema = Yup.object({
  title: Yup.string().required('question title is required'),
})

const initialValues: DataForCreatingQuestion = {
  title: '',
  description: '',
  code: '',
}
const CreateQuestionPage: FC = () => {
  const [s, sets] = useState('')

  const handleSubmit = (formData: DataForCreatingQuestion) => {
    console.log(formData)
  }

  return (
    <div className="w-full p-6">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <BasicFormWrapper>
            {' '}
            <Editor
              language="javascript"
              code={s}
              onChange={(editor, data, value) => {
                sets(value)
              }}
            />
            <SubmitButton isLoading={false} isValid={isValid}>
              create question
            </SubmitButton>
          </BasicFormWrapper>
        )}
      </Formik>
    </div>
  )
}

export default CreateQuestionPage
