import { Form } from 'formik'
import { FC, ReactNode } from 'react'

interface FormAuthWrapperProps {
  children: ReactNode
  className?: string
}

const FormAuthWrapper: FC<FormAuthWrapperProps> = ({ children, className }) => {
  return (
    <Form className={`text-ordinary-text flex flex-col w-full ${className}`}>
      {children}
    </Form>
  )
}

export default FormAuthWrapper
