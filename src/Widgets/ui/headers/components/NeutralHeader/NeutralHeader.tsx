import { FC } from 'react'
import { HeaderWrapper, HomeButton } from '../../../../../Features'

interface NeutralHeaderProps {
  asideHandler?: () => void
}

const NeutralHeader: FC<NeutralHeaderProps> = () => {
  return (
    <HeaderWrapper isAsideBurger={false}>
      <HomeButton />
    </HeaderWrapper>
  )
}

export default NeutralHeader
