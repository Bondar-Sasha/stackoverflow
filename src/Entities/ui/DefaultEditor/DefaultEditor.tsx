import {FC} from 'react'
import {Controlled} from 'react-codemirror2'
import {Editor as EditorType, EditorChange} from 'codemirror'

interface DefaultEditorProps {
  language: 'javascript' | 'go' | 'css' | 'rust' | 'python'
  code: string
  onChange: (editor: EditorType, data: EditorChange, value: string) => void
  readOnly?: boolean
  className?: string
}

const DefaultEditor: FC<DefaultEditorProps> = ({
  language,
  code,
  onChange,
  readOnly = false,
  className = '',
}) => {
  return (
    <Controlled
      value={code}
      className={`border-2 border-solid border-#e5e7eb ${className}`}
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
