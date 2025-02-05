import {BasicButton, BasicInput, Spinner} from '../../../../Shared'
import {ChangeEventHandler, FC} from 'react'

interface CreateCommentFormProps {
  onSubmit: () => void
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  isFetching: boolean
}

const CreateCommentForm: FC<CreateCommentFormProps> = ({
  onChange,
  onSubmit,
  value,
  isFetching,
}) => {
  return (
    <div className="w-full flex flex-col mb-3">
      <span className="text-xl mb-2">Write comment:</span>
      <BasicInput
        onChange={onChange}
        value={value}
        placeholder="comment content"
        className="border-2 border-theme p-2 text-lg mb-2"
      />
      <BasicButton
        disabled={isFetching}
        onClick={onSubmit}
        className={`flex items-center justify-center bg-theme h-11 max-w-24 text-osseous-theme`}
      >
        <span>save</span> {isFetching && <Spinner className="ml-2" />}
      </BasicButton>
    </div>
  )
}

export default CreateCommentForm
