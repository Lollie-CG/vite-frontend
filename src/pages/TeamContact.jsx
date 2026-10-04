import { Link } from 'react-router-dom'
import amariImage from '../assets/images/Amari.jpg'
import esinamImage from '../assets/images/Esinam.jpg'
import gazitaImage from '../assets/images/Gazita.jpg'
import kukuaImage from '../assets/images/Kukua.jpg'
import toffeImage from '../assets/images/Toffe.jpg'

const teamLeads = [
  {
    name: 'Kukua Eddison',
    role: 'Self-care specialist',
    phone: '0592800675',
    image: kukuaImage,
  },
  {
    name: 'Amari Mcmillan',
    role: 'Psychologist',
    phone: '0234765908',
    image: amariImage,
  },
  {
    name: 'Esinam Amenuveve',
    role: 'Gynecologist',
    phone: '0588675749',
    image: esinamImage,
  },
  {
    name: 'Toffee Bobby-Skate',
    role: 'Career counselor',
    phone: '0546784356',
    image: toffeImage,
  },
  {
    name: 'Gazita Asante',
    role: 'Therapist',
    phone: '0574659122',
    image: gazitaImage,
  },
]

export default function TeamContact() {
  return (
    <main className="contact-page">
      <div className="contact-page-heading">
        <Link className="back-home-link" to="/">
          <span aria-hidden="true">←</span> Back home
        </Link>
        <span className="eyebrow">Get in touch</span>
        <h1>Meet the team</h1>
        <p>
          Our team is here to help make this a kind and supportive place. Team lead names and contact
          details can be added below.
        </p>
      </div>

      <section className="team-lead-grid" aria-label="Team lead contacts">
        {teamLeads.map((lead) => (
          <article className="team-lead-card" key={lead.name}>
            {lead.image ? (
              <img className="team-lead-image" src={lead.image} alt={`Portrait of ${lead.name}`} />
            ) : (
              <span className="team-lead-mark" aria-hidden="true">
                {lead.name.replace('Team lead ', '')}
              </span>
            )}
            <div>
              <h2>{lead.name}</h2>
              <p>{lead.role}</p>
              {lead.phone ? (
                <p className="contact-placeholder">
                  <a href={`tel:${lead.phone}`}>{lead.phone}</a>
                </p>
              ) : (
                <p className="contact-placeholder">Add contact details</p>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="your-contact" aria-labelledby="your-contact-title">
        <span className="eyebrow">Site contact</span>
        <h2 id="your-contact-title">Contact CEO</h2>
        <p>Miss Charlotte Klu</p>
        <ul>
          <li>
            Email: <a href="mailto:klucharlotte39@gmail.com">klucharlotte39@gmail.com</a>
          </li>
          <li>Instagram: @lollie840</li>
          <li>
            LinkedIn: <a href="https://www.linkedin.com/in/charlottek/">/in/charlottek</a>
          </li>
        </ul>
        <p className="contact-safety-note">
          If you are under 13, ask a trusted grown-up before contacting someone online. Do not share
          private information with people you do not know.
        </p>
      </section>
    </main>
  )
}
