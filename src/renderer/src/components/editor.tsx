import useCodeMirror from '@renderer/use-codemirror'
import '../assets/editor.css'
import { useCallback, useEffect } from 'react'
import { EditorState } from '@codemirror/state'

interface Props {
  initialDoc: string
  onChange: (doc: string) => void
}

const Editor: React.FC<Props> = (props) => {
  const { onChange, initialDoc } = props
  const handleChange = useCallback((state: EditorState) => onChange(state.doc.toString()), [])
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange
  })

  useEffect(() => {
    console.log('123')
    if (editorView) {
      // Do nothing for now
    }
  }, [editorView])

  return <div className="editor-wrapper" ref={refContainer}></div>
}

export default Editor
