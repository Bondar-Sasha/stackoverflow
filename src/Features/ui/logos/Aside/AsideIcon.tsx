import {FC, ReactNode} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {AsideItemWrapper} from '../../../../Entities'

interface IconsDataItem {
  controlledPath: string
  label: string
  icon: ReactNode
  onClick?: () => void
}

const AsideIcon: FC<IconsDataItem> = ({
  controlledPath,
  label,
  icon,
  onClick,
}) => {
  const navigate = useNavigate()
  const location = useLocation()

  const isDesiredLocation = location.pathname === controlledPath

  const handleClick = () => {
    navigate(controlledPath)
    onClick?.()
  }
  return (
    <AsideItemWrapper
      label={label}
      onClick={handleClick}
      isChosen={isDesiredLocation}
    >
      {icon}
    </AsideItemWrapper>
  )
}

export default AsideIcon
