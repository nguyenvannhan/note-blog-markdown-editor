import React, { useCallback, useEffect, useState } from 'react'
import './assets/app.css'
import Editor from './components/Editor'

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Hello, World!\n')

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc)
  }, [])

  useEffect(() => {
    console.log(doc)
  }, [doc])

  return (
    <div className="app">
      <Editor onChange={handleDocChange} initialDoc={doc} />
    </div>
  )
}

export default App
