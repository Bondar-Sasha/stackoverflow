import { Form } from 'formik'
import { FC, ReactNode } from 'react'

interface BasicFormWrapperProps {
  children: ReactNode
  className?: string
}

const BasicFormWrapper: FC<BasicFormWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <Form className={`text-ordinary-text flex flex-col w-full ${className}`}>
      {children}
    </Form>
  )
}

export default BasicFormWrapper
