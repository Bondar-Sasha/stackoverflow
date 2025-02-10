import {FC} from 'react'

import {useParams} from 'react-router-dom'
import {toast} from 'react-toastify'

import {
  DownloadMask,
  GeneraPostForm,
  NotFoundMask,
  PostFormData,
} from '@/Widgets'
import {isPositiveInteger, useEditPostMutation, useGetPostQuery} from '@/Shared'
import {Params} from '@/Processes'

const EditPostPage: FC = () => {
  const params = useParams<Params>()
  const [editPost, {isLoading}] = useEditPostMutation()
  const {isLoading: fetchingPost, data} = useGetPostQuery(
    {
      id: Number(params.postId),
    },
    {skip: !isPositiveInteger(params.postId)}
  )

  const handleSubmit = async (formData: PostFormData) => {
    try {
      await editPost({
        id: Number(params.postId),
        ...formData,
      }).unwrap()
      toast('Post was edited', {
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
  if (fetchingPost) {
    return <DownloadMask />
  }

  if (!data) {
    return <NotFoundMask label="There is no such post" />
  }

  const initValues: PostFormData = {
    language: data.language,
    code: data.code,
  }

  return (
    <div className="w-3/4 p-6 flex-center flex-col">
      <GeneraPostForm
        isFetching={isLoading}
        onSubmit={handleSubmit}
        formName="Edit your post:"
        submitButtonLabel="commit changes"
        initValues={initValues}
      />
    </div>
  )
}

export default EditPostPage
