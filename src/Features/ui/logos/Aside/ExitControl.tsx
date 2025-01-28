import { FC } from 'react'
import { RxCross2 } from 'react-icons/rx'

interface ExitControlProps {
  onClick: () => void
  className?: string
}

const ExitControl: FC<ExitControlProps> = ({ onClick, className = '' }) => {
  return (
    <div
      className={`flex items-center mr-10 w-full h-11 justify-end text-osseous-theme transition duration-100 ease-in-out ${className}`}
    >
      {' '}
      <RxCross2 onClick={onClick} className="text-xl" />
    </div>
  )
}

export default ExitControl
