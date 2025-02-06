import {FC} from 'react'
import {FormikHelpers} from 'formik'
import {toast} from 'react-toastify'

import {GeneraPostForm, PostFormData} from '../../../Widgets'
import {useCreatePostMutation} from '../../../Shared'

const CreatePostPage: FC = () => {
  const [createPost, {isLoading}] = useCreatePostMutation()
  const handleSubmit = async (
    formData: PostFormData,
    {resetForm}: FormikHelpers<PostFormData>
  ) => {
    try {
      await createPost(formData).unwrap()
      toast('Post was created', {
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
      <GeneraPostForm
        isFetching={isLoading}
        onSubmit={handleSubmit}
        formName="Create new post:"
        submitButtonLabel="create"
      />
    </div>
  )
}

export default CreatePostPage
