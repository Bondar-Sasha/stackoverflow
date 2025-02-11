import {FC} from 'react'
import {TextLoader} from '@/Shared'

const DownloadMask: FC = () => {
  return (
    <div className="stretching flex-center">
      <TextLoader className="text-2xl" label="Loading..." />
    </div>
  )
}

export default DownloadMask
