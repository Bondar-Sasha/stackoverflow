import { ComponentProps, FC } from 'react'
import { ErrorMessage, Field } from 'formik'

import stylesForErrors from '../../styles/errors.module.css'
import stylesForInput from '../../styles/input.module.css'
import { BasicInput } from '../../../../../../Shared'

type BasicInputProps = ComponentProps<typeof BasicInput>

interface BasicFormInputProps {
  name: string
  placeholder: string
}

const BasicFormInput: FC<BasicFormInputProps & BasicInputProps> = ({
  name,
  placeholder,
  ...props
}) => {
  return (
    <div className={`${stylesForInput.input}`}>
      <Field
        {...props}
        name={name}
        as={BasicInput}
        placeholder={placeholder}
        className="rounded-full h-11 border-theme border-2 text-lg w-full pb-1"
      />
      <ErrorMessage
        name={name}
        component="span"
        className={`${stylesForErrors.error}`}
      />
    </div>
  )
}

export default BasicFormInput
