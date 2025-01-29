import { FC } from 'react'
import { Controlled } from 'react-codemirror2'
import { Editor as EditorType, EditorChange } from 'codemirror'

interface DefaultEditorProps {
  language: 'javascript' | 'go' | 'css' | 'rust' | 'python'
  code: string
  onChange: (editor: EditorType, data: EditorChange, value: string) => void
  readOnly?: boolean
}

const DefaultEditor: FC<DefaultEditorProps> = ({
  language,
  code,
  onChange,
  readOnly = false,
}) => {
  return (
    <Controlled
      value={code}
      options={{
        readOnly,
        lineNumbers: true,
        lineWrapping: true,
        mode: language,
        theme: 'default',
      }}
      onBeforeChange={onChange}
    />
  )
}

export default DefaultEditor
