import { Link } from 'react-router-dom'
import heroImage from '../assets/images/pk.jpg'

export default function Hero() {
  return (
    <section
      className="hero-section"
      aria-labelledby="hero-title"
      style={{ backgroundImage: `url("${heroImage}")` }}
    >
      <div className="hero-copy">
        <h1 id="hero-title">
          <span>Elevate</span>
          <span>Your Brand</span>
        </h1>
        <p className="hero-subtitle">with style &amp; elegance</p>
        <Link className="button-link" to="/self-care">
          Explore
        </Link>
      </div>
    </section>
  )
}
