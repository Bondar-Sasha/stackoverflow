import {FC} from 'react'
import MonacoEditor from '@monaco-editor/react'
import {ProgrammingLanguages} from '../../../Shared'

interface EditorProps {
  language: Lowercase<ProgrammingLanguages>
  value: string
  onChange?: (newValue: string | undefined) => void
  readOnly?: boolean
  name?: string
  className?: string
}

const Editor: FC<EditorProps> = ({
  language,
  className = '',
  readOnly = false,
  ...props
}) => {
  return (
    <div className={`h-44 border-2 border-theme p-2 ${className}`}>
      <MonacoEditor
        {...props}
        language={language}
        height="100%"
        width="100%"
        options={{
          readOnly,
          selectOnLineNumbers: true,
          automaticLayout: true,
          theme: 'github',
          minimap: {
            enabled: false,
          },
          scrollBeyondLastLine: false,
        }}
      />
    </div>
  )
}

export default Editor
