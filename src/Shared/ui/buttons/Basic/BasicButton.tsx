import {ButtonHTMLAttributes, FC} from 'react'

import styles from './styles/common.module.css'
import {getSize, getVariant} from './utils'
import {Spinner} from '../../loaders'

interface BasicButtonCustomProps {
  size?: 'small' | 'medium' | 'large'
  isLoading?: boolean
  variant?: 'text' | 'contained' | 'outlined'
}

export type BasicButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  BasicButtonCustomProps

const BasicButton: FC<BasicButtonProps> = ({
  isLoading,
  className = '',
  size = 'medium',
  variant = 'contained',
  children,
  ...props
}) => {
  const classes = [
    styles.common,
    getSize(size),
    getVariant(variant),
    className,
  ].join(' ')

  return (
    <button {...props} className={classes}>
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

export default BasicButton
