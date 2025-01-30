import {FC, HtmlHTMLAttributes} from 'react'
import {ErrorMessage, Field} from 'formik'

import stylesForErrors from '../styles/errors.module.css'
import stylesForTextarea from '../styles/textarea.module.css'
import {BasicTextarea} from '../../../../../Shared'

type BasicTextareaProps = HtmlHTMLAttributes<HTMLTextAreaElement>

interface BasicFormTextareaProps {
  name: string
  placeholder: string
}

const BasicFormTextarea: FC<BasicFormTextareaProps & BasicTextareaProps> = ({
  name,
  placeholder,
  className = '',
  ...props
}) => {
  return (
    <div className={`${stylesForTextarea.textarea}`}>
      <Field
        {...props}
        name={name}
        as={BasicTextarea}
        placeholder={placeholder}
        className={`rounded-xl h-11 border-theme border-2 text-lg w-full pb-1 ${className}`}
      />
      <ErrorMessage
        name={name}
        component="span"
        className={`${stylesForErrors.error}`}
      />
    </div>
  )
}

export default BasicFormTextarea
