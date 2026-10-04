import { Link } from 'react-router-dom'

export default function MorningNotes() {
  return (
    <main className="project-page">
      <article className="project-content">
        <Link className="project-back-link" to="/">
          Back to home
        </Link>

        <span className="eyebrow">Project</span>
        <h1>Morning Notes</h1>
        <p className="project-lead">
          A calm space for collecting thoughts and small daily wins.
        </p>

        <div className="project-preview" role="img" aria-label="Morning Notes project preview">
          <span className="project-preview-label">Morning Notes</span>
          <span className="project-preview-line"></span>
          <span className="project-preview-line"></span>
          <span className="project-preview-line short"></span>
        </div>

        <section className="project-detail" aria-labelledby="morning-notes-does">
          <h2 id="morning-notes-does">What it does</h2>
          <p>
            Morning Notes offers a quiet place to write down thoughts, keep track of small daily wins,
            and start the day with a little more intention.
          </p>
        </section>

        <section className="project-detail" aria-labelledby="morning-notes-tools">
          <h2 id="morning-notes-tools">What I used</h2>
          <p>React, Vite, and CSS.</p>
        </section>

        <section className="project-detail" aria-labelledby="morning-notes-challenge">
          <h2 id="morning-notes-challenge">What was hard</h2>
          <p>
            Making a calm, uncluttered writing experience while keeping common actions easy to find.
          </p>
        </section>
      </article>
    </main>
  )
}
