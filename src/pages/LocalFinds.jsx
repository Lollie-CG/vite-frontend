import { Link } from 'react-router-dom'

export default function LocalFinds() {
  return (
    <main className="project-page">
      <article className="project-content">
        <Link className="project-back-link" to="/">
          Back to home
        </Link>

        <span className="eyebrow">Project</span>
        <h1>Local Finds</h1>
        <p className="project-lead">
          A simple guide to discovering independent shops, cafes, and hidden gems nearby.
        </p>

        <div
          className="project-preview"
          role="img"
          aria-label="Illustration placeholder for the Local Finds project"
        >
          <span className="project-preview-label">Local Finds</span>
          <span className="project-preview-line"></span>
          <span className="project-preview-line"></span>
          <span className="project-preview-line short"></span>
        </div>

        <section className="project-detail" aria-labelledby="local-finds-does">
          <h2 id="local-finds-does">What it does</h2>
          <p>
            Local Finds helps people browse nearby independent businesses and discover places worth
            visiting.
          </p>
        </section>

        <section className="project-detail" aria-labelledby="local-finds-tools">
          <h2 id="local-finds-tools">What I used</h2>
          <p>React, Vite, and CSS.</p>
        </section>

        <section className="project-detail" aria-labelledby="local-finds-challenge">
          <h2 id="local-finds-challenge">What was hard</h2>
          <p>
            Organizing useful local recommendations so people can quickly find places that match what
            they are looking for.
          </p>
        </section>
      </article>
    </main>
  )
}
