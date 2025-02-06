import {useNavigate} from 'react-router-dom'

import {AppLogo} from '../../../../Entities'

const HandleAppLogo: typeof AppLogo = (props) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return <AppLogo {...props} onClick={handleClick} />
}

export default HandleAppLogo
