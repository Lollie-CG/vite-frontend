import ImageSlot from './ImageSlot'
import welcomeImage from '../assets/images/ppp.jpg'

export default function About() {
  return (
    <section className="welcome-section" aria-labelledby="welcome-title">
      <div className="welcome-copy">
        <span className="eyebrow">You belong here</span>
        <h2 id="welcome-title">No question is too small.</h2>
        <p>
          Bodies and feelings change at different times for everyone. This is a friendly place to learn
          the basics, take things at your own pace, and remember that you can always ask a trusted grown-up
          for help.
        </p>
      </div>
      <ImageSlot
        src={welcomeImage}
        alt="A welcoming illustration for girls learning about growing up"
        label="Welcome"
      />
      <p className="gentle-note">
        Everyone grows in their own way. There is no single “right” way to look or feel.
      </p>
    </section>
  )
}
