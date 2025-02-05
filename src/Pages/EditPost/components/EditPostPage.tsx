import {FC} from 'react'
import {Field, Formik} from 'formik'
import * as Yup from 'yup'
import {useParams} from 'react-router-dom'
import {toast} from 'react-toastify'

import {DownloadMask, Editor} from '../../../Widgets'
import {BasicFormWrapper, SubmitButton} from '../../../Features'
import {
  ProgrammingLanguages,
  useEditPostMutation,
  useGetPostQuery,
} from '../../../Shared'
import {Params} from '../../../Processes'
import {OptionItem, ProgLangSelect} from '../../../Entities'
import {SingleValue} from 'react-select'

interface DataForEditingPost {
  language: ProgrammingLanguages
  code: string
}

const validationSchema = Yup.object({
  language: Yup.string().required('Post programming language is required'),
  code: Yup.string().required('Post code is required'),
})

const initialValues: DataForEditingPost = {
  language: 'JavaScript',
  code: '',
}
const EditPostPage: FC = () => {
  const params = useParams<Params>()
  const [editPost, {isLoading}] = useEditPostMutation()
  const {isLoading: fetchingPost, data} = useGetPostQuery({
    id: Number(params.postId),
  })

  const handleSubmit = async (formData: DataForEditingPost) => {
    try {
      await editPost({
        id: Number(params.PostId),
        ...formData,
      }).unwrap()
      toast('Post was edited', {
        type: 'success',
        autoClose: 1800,
      })
    } catch (error) {
      console.error(error)
    }
  }

  if (fetchingPost) {
    return <DownloadMask />
  }

  return (
    <div className="w-3/4 p-6 flex-center flex-col">
      <h1 className="mb-5 text-3xl">Create a new post</h1>
      <Formik
        initialValues={data ?? initialValues}
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
              edit post
            </SubmitButton>
          </BasicFormWrapper>
        )}
      </Formik>
    </div>
  )
}

export default EditPostPage
