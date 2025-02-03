import { FC, useState } from 'react'
import { Editor } from '../../../Widgets'

const HomePage: FC = () => {
  const [s, sets] = useState('')
  return (
    <div className="w-full">
      <Editor
        language="javascript"
        code={s}
        onChange={(editor, data, value) => {
          sets(value)
        }}
      />
    </div>
  )
}

export default HomePage
