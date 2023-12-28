import React, { useCallback, useState } from 'react'
import './assets/app.css'
import Editor from './components/Editor'
import Preview from './components/Preview'

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Hello, World!\n')

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc)
  }, [])

  return (
    <div className="app">
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <Preview doc={doc} />
    </div>
  )
}

export default App
