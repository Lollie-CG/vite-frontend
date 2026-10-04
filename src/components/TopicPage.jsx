import { Link } from 'react-router-dom'
import ImageSlot from './ImageSlot'

export default function TopicPage({ eyebrow = 'Learn at your own pace', title, intro, sections, note }) {
  return (
    <main className="topic-page">
      <article className="topic-article">
        <Link className="back-home-link" to="/">
          <span aria-hidden="true">←</span> Back home
        </Link>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="topic-intro">{intro}</p>

        <div className="topic-detail-grid">
          {sections.map((section) => (
            <section className="topic-detail-card" key={section.title}>
              <div className="topic-detail-copy">
                <h2>{section.title}</h2>
                {section.text && <p>{section.text}</p>}
                {section.items && (
                  <ul>
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </div>
              <ImageSlot
                src={section.image}
                alt={section.imageAlt}
                label={section.imageLabel || section.title}
              />
            </section>
          ))}
        </div>

        {note && <p className="topic-note">{note}</p>}

        <p className="topic-support">
          Not sure what to do? You can talk to a parent, caregiver, school nurse, teacher, or another
          grown-up you trust.
        </p>
      </article>
    </main>
  )
}
