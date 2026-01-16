import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact'
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

        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
