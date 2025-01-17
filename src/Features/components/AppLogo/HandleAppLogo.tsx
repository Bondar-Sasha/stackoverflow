import { useNavigate } from 'react-router-dom'

import { AppLogo } from '../../../Shared'

const HandleAppLogo: typeof AppLogo = (props) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return <AppLogo onClick={handleClick} {...props} />
}

export default HandleAppLogo
