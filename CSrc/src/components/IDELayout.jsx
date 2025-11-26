import { useState, useEffect, useRef } from 'react'
import Editor from '@monaco-editor/react'
import './IDELayout.css'

function IDELayout({ program }) {
  const [code, setCode] = useState(program.cCode || '')
  const [output, setOutput] = useState('')
  const [isCompiling, setIsCompiling] = useState(false)
  const [error, setError] = useState(null)
  const editorRef = useRef(null)

  useEffect(() => {
    setCode(program.cCode || '')
    setOutput('')
    setError(null)
  }, [program])

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard!')
    })
  }

  const compileAndRun = async () => {
    console.log('[Compile] clicked')

    setIsCompiling(true)
    setError(null)
    setOutput('')

    try {
      const response = await fetch('https://wandbox.org/api/compile.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          compiler: 'gcc-head',
          code: code,
          options: '',
          stdin: '',
          'compiler-option-raw': '-Wall -O2',
          'runtime-option-raw': ''
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      console.log('[Compile] result:', result)

      // Combine compiler output and program output
      let fullOutput = ''

      if (result.compiler_error) {
        fullOutput += '=== Compiler Errors ===\n' + result.compiler_error + '\n\n'
      }

      if (result.compiler_message) {
        fullOutput += '=== Compiler Messages ===\n' + result.compiler_message + '\n\n'
      }

      if (result.program_output) {
        fullOutput += '=== Program Output ===\n' + result.program_output + '\n'
      }

      if (result.program_error) {
        fullOutput += '=== Runtime Errors ===\n' + result.program_error + '\n'
      }

      if (!fullOutput) {
        fullOutput = 'Compilation completed successfully (no output)'
      }

      setOutput(fullOutput)

      // Set error if compilation failed
      if (result.status !== '0') {
        setError('Compilation or execution failed. See output for details.')
      }

    } catch (err) {
      console.error('[Compile] error:', err)
      setError(err.toString())
      setOutput('Failed to connect to Wandbox API. Please try again.')
    } finally {
      console.log('[Compile] finally: setIsCompiling(false)')
      setIsCompiling(false)
    }
  }

  return (
    <div className="ide-layout">
      <div className="ide-left-panel">
        {/* Code Editor Section */}
        <div className="ide-code-container">
          <div className="ide-code-header">
            <span className="ide-code-title">
              C Code Editor (GCC Compiler)
            </span>
            <button
              onClick={copyToClipboard}
              className="ide-copy-button"
            >
              Copy
            </button>
          </div>

          <div className="monaco-editor-wrapper">
            <Editor
              height="500px"
              defaultLanguage="c"
              value={code}
              onChange={(value) => setCode(value || '')}
              onMount={handleEditorDidMount}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2,
                wordWrap: 'on'
              }}
            />
          </div>
        </div>

        {/* Program Info Section */}
        {program.description && (
          <div className="ide-info-section">
            <div className="ide-info-header">About This Program</div>
            <p className="ide-info-text">{program.description}</p>
            {program.chapter && (
              <p className="ide-info-chapter">Chapter {program.chapter}</p>
            )}
          </div>
        )}

        {/* Compile Button */}
        <div className="ide-run-section">
          <button
            onClick={compileAndRun}
            disabled={isCompiling}
            className="ide-run-button"
          >
            {isCompiling ? 'Compiling & Running...' : 'Compile & Run (GCC)'}
          </button>
          <p className="ide-run-hint">
            Using Wandbox API with gcc-head compiler
          </p>
        </div>
      </div>

      <div className="ide-right-panel">
        {/* Output Section */}
        <div className="ide-output-header">Compilation & Execution Output</div>

        {error && (
          <div className="ide-error">
            <strong>Error:</strong>
            <pre>{error}</pre>
          </div>
        )}

        {output && (
          <div className="ide-output">
            <pre>{output}</pre>
          </div>
        )}

        {!error && !output && !isCompiling && (
          <div className="ide-no-output">
            <p>Click "Compile & Run" to execute the C program</p>
            <p className="ide-hint">
              Output will appear here (compiler messages, program output, or errors)
            </p>
          </div>
        )}

        {isCompiling && (
          <div className="ide-loading">
            <div className="loading-spinner"></div>
            <p>Compiling and running your C code...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default IDELayout
