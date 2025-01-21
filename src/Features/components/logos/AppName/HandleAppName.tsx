import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const HandleAppName: FC = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <h1
      onClick={handleClick}
      className="text-osseous-theme hover:text-color-for-color"
    >
      CODELANG
    </h1>
  )
}

export default HandleAppName
