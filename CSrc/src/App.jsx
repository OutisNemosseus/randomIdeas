import { Routes, Route, useParams, Link, Navigate } from 'react-router-dom'
import ProgramList from './components/ProgramList'
import IDELayout from './components/IDELayout'
import programs from './data/c-programs.js'
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ProgramList />} />
        <Route path="/program/:programId" element={<ProgramPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

function ProgramPage() {
  const { programId } = useParams()
  const program = programs.find(p => p.id === programId)

  if (!program) {
    return (
      <div className="program-not-found">
        <h2>Program not found</h2>
        <Link to="/" className="back-link">← Back to list</Link>
      </div>
    )
  }

  return (
    <div className="program-page">
      <div className="program-header">
        <Link to="/" className="back-link">← Back to list</Link>
        <h1>{program.displayName || program.title}</h1>
        {program.description && <p className="subtitle">{program.description}</p>}
      </div>
      <IDELayout program={program} />
    </div>
  )
}

export default App
