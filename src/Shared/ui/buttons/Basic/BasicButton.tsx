import { ButtonHTMLAttributes, FC } from 'react'

import styles from './styles/common.module.css'
import { getSize, getVariant } from './utils'

interface BasicButtonCustomProps {
  size?: 'small' | 'medium' | 'large'
  variant?: 'text' | 'contained' | 'outlined'
}

export type BasicButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  BasicButtonCustomProps

const BasicButton: FC<BasicButtonProps> = ({
  className = '',
  size = 'medium',
  variant = 'contained',
  ...props
}) => {
  const classes = [
    styles.common,
    getSize(size),
    getVariant(variant),
    className,
  ].join(' ')

  return <button {...props} className={classes}></button>
}

export default BasicButton
