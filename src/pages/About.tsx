import { Link } from "react-router-dom"

export default function About() {

  return (
    <>
      <h1>ABOUT</h1>
      <p>
        At UTSC Game Development club, we provide a safe place for:
      </p>
      <ul>
        <li>artists</li>
        <li>composers</li>
        <li>game developers</li>
        <li>anyone with cool game ideas</li>
      </ul>
      <p>
        To collaborate, learn together, and build games they choose — from ideas to completion.
      </p>

      <h2>How does the Club Operate?</h2>
      <p>
        The general process will be:
      </p>
      <ul>
        <li>We provide a space for members to share and discuss the games you want to make.</li>
        <li>Experienced game developers in the club will support and mentor you throughout the development process.</li>
        <li>During development, you'll be working with people in other fields of interest (art/music/coding) to bring your ideas to life.</li>
      </ul>

      <h2>Target Game Genres</h2>
      <p>
        The game genres we will be making is decided by you!
      </p>
      <p>
        In this club, club members are encouraged to chat with one another, share ideas, to decide which games they want to collaborate on.
      </p>
      <p>
        The only requirement we have on games is that they must remain <strong>small in scope</strong>. This guideline comes from two lessons we’ve learned through past game development experience:

      </p>
      <ul>
        <li>Games often take a lot longer to complete than initially expected.</li>
        <li>Starting with overly large game dev projects usually leads to unfinished or abandoned work.</li>
      </ul>
      <p>Thus, although members can fully decide whatever they want to make, we will be majorly encouraging {"&"} targetting smaller sized games.</p>

      <h2>Core Values</h2>
      <p>Our club has the following basic core values</p>
      <ul>
        <li>Enjoying the development process more than the final product.</li>
        <li>Making a space for everyone to contribute together — artists, musicians, programmers, or people with game ideas.</li>
        <li>Valuing ideas and learning over polished implementation.</li>
      </ul>

      <h2>Current State</h2>
      <p>The club is relatively new, we are still in the stage of gathering up more people and networking. In the mean time, feel free to join the Discord server under <Link to="/Contact">CONTACT</Link>!</p>
    </>
  )
}
