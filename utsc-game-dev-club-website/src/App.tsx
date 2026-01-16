import { Routes, Route } from "react-router-dom";
import Home from './pages/home'
import './App.css'

function App() {

  return (
    <>
      <div style={{
        width: "1000px",
        minHeight: "2000px",
        margin: "0.5px auto",
        padding: "clamp(24px, 4vw, 48px)",
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "20px",
        boxShadow: "0 16px 40px var(--color-shadow)",
        boxSizing: "border-box"
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
