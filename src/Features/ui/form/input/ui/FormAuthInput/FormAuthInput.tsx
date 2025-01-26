import { ComponentProps, FC } from 'react'
import { ErrorMessage, Field } from 'formik'

import stylesForErrors from '../../styles/errors.module.css'
import stylesForInput from '../../styles/input.module.css'
import { BasicInput } from '../../../../../../Shared'
import { PasswordInput } from '../../../../../../Entities'

type BasicInputProps = ComponentProps<typeof BasicInput>

interface FormAuthInputProps {
  inputType: 'text' | 'password'
  name: string
  placeholder: string
}

const inputs = {
  password: PasswordInput,
  text: BasicInput,
}

const FormAuthInput: FC<FormAuthInputProps & BasicInputProps> = ({
  name,
  placeholder,
  inputType,
  ...props
}) => {
  return (
    <div className={`${stylesForInput.input}`}>
      <Field
        {...props}
        name={name}
        as={inputs[inputType]}
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

export default FormAuthInput
