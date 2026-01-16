import { Link } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <>
      <div style={{
        padding: "24px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        height: "40px",

        minHeight: "40px",
        border: "1px solid var(--color-border)",
        borderRadius: "20px",
        boxSizing: "border-box",
        boxShadow: "0 16px 40px var(--color-shadow)",
      }}>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </div >
    </>
  )
}
