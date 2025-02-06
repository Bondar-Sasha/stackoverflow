import {FC, TextareaHTMLAttributes} from 'react'

import styles from './styles/common.module.css'

export type BasicTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

const BasicTextarea: FC<BasicTextareaProps> = ({className = '', ...props}) => {
  const classes = [styles.common, className].join(' ')

  return <textarea {...props} className={classes} />
}

export default BasicTextarea
