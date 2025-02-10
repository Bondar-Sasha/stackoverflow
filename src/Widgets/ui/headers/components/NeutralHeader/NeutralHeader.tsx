import {FC} from 'react'
import {useNavigate} from 'react-router-dom'

import {HeaderWrapper} from '@/Features'
import {BasicButton} from '@/Shared'

interface NeutralHeaderProps {
  asideHandler?: () => void
}

const NeutralHeader: FC<NeutralHeaderProps> = () => {
  const navigate = useNavigate()

  return (
    <HeaderWrapper>
      <BasicButton
        onClick={() => {
          navigate('/')
        }}
        className="bg-osseous-theme rounded-full w-28 ordinary-text-theme hover:bg-gray-200"
      >
        Home
      </BasicButton>
    </HeaderWrapper>
  )
}

export default NeutralHeader
