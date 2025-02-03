import {ComponentProps, FC} from 'react'
import {toast} from 'react-toastify'

import {BasicButton, Spinner} from '../../../../Shared'

type BasicButtonType = ComponentProps<typeof BasicButton>

interface SubmitButtonProps extends BasicButtonType {
  isLoading: boolean
  isValid: boolean
}

const SubmitButton: FC<SubmitButtonProps> = ({
  isLoading,
  isValid,
  children,
  className = '',
  ...props
}) => {
  return (
    <BasicButton
      {...props}
      type="submit"
      disabled={isLoading}
      onClick={() => {
        if (!isValid) {
          toast('Fill out the form correctly', {
            autoClose: 2000,
            type: 'warning',
          })
        }
      }}
      className={`flex items-center justify-center bg-theme h-11 rounded-full w-full text-osseous-theme ${className}`}
    >
      <span>{children}</span> {isLoading && <Spinner className="ml-2" />}
    </BasicButton>
  )
}

export default SubmitButton
