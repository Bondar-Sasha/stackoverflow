import { InputHTMLAttributes, FC } from 'react'

import styles from './styles/common.module.css'

// interface BasicInputCustomProps {}

export type BasicInputProps = InputHTMLAttributes<HTMLInputElement>

const BasicInput: FC<BasicInputProps> = ({ className = '', ...props }) => {
  const classes = [styles.common, className].join(' ')

  return <input {...props} className={classes} />
}

export default BasicInput
