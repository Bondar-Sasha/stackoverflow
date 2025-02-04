import {FC} from 'react'
import {Field, Formik} from 'formik'
import * as Yup from 'yup'
import {toast} from 'react-toastify'

import {Editor} from '../../../Widgets'
import {BasicFormWrapper, SubmitButton} from '../../../Features'
import {ProgrammingLanguages, useCreatePostMutation} from '../../../Shared'
import {OptionItem, ProgLangSelect} from '../../../Entities'
import {SingleValue} from 'react-select'

interface DataForCreatingPost {
  language: ProgrammingLanguages
  code: string
}

const validationSchema = Yup.object({
  language: Yup.string().required('Post programming language is required'),
  code: Yup.string().required('Post code is required'),
})

const initialValues: DataForCreatingPost = {
  language: 'JavaScript',
  code: '',
}
const CreatePostPage: FC = () => {
  const [createPost, {isLoading}] = useCreatePostMutation()
  const handleSubmit = async (formData: DataForCreatingPost) => {
    try {
      await createPost(formData).unwrap()
      toast('Post was created', {
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
    <div className="w-3/4 p-6 flex-center flex-col">
      <h1 className="mb-5 text-3xl">Create a new post</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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

            <SubmitButton isLoading={isLoading} isValid={isValid}>
              create post
            </SubmitButton>
          </BasicFormWrapper>
        )}
      </Formik>
    </div>
  )
}

export default CreatePostPage
