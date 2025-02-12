import { FC } from 'react'
import { CgSpinner } from 'react-icons/cg'

interface SpinnerProps {
  className?: string
}

const Spinner: FC<SpinnerProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <CgSpinner className="animate-spin color-inherit" />
    </div>
  )
}

export default Spinner
