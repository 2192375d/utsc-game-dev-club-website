import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <h1>UTSC Game Development Club</h1>
      <p>
        Welcome! UTSC Game Development Club is a new club in UTSC; dedicated to create a safe space for students with similar interests to collaborate together to build their own games!
      </p>
      <p>
        Go to <Link to="/about">ABOUT</Link> to find more!
      </p>

    </>
  )
}
