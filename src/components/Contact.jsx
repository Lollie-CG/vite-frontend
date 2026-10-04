import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <section className="talk-cta" aria-labelledby="talk-title">
      <span className="eyebrow">You do not have to figure it out alone</span>
      <h2 id="talk-title">Want help starting a conversation?</h2>
      <p>Try a few simple prompts for talking privately with a trusted adult.</p>
      <Link className="button-link button-link-light" to="/reach-out">
        Find words to start
        <span aria-hidden="true"> →</span>
      </Link>
    </section>
  )
}
