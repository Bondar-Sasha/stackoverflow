import {FC} from 'react'
import {ErrorMessage, Field} from 'formik'

import stylesForInput from '../../styles/input.module.css'
import {BasicInput, BasicTextarea} from '@/Shared'
import {PasswordInput} from '@/Entities'

interface FormInputProps {
  inputType?: 'text' | 'password' | 'textarea'
  name: string
  placeholder: string
  autoComplete?: string
}

const inputs = {
  password: PasswordInput,
  text: BasicInput,
  textarea: BasicTextarea,
}

const FormInput: FC<FormInputProps> = ({
  name,
  placeholder,
  inputType = 'text',
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
        className={`${stylesForInput.error}`}
      />
    </div>
  )
}

export default FormInput
