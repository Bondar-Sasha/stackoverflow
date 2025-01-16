import { FC } from 'react'

interface LoaderProps {
  label?: string
  className?: string
}

const TextLoader: FC<LoaderProps> = ({
  className = '',
  label = 'loading...',
}) => {
  return (
    <div className={`loader ${className}`}>
      <span>{label}</span>
    </div>
  )
}

export default TextLoader
