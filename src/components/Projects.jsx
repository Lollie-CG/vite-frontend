import { Link } from 'react-router-dom'

function TopicIcon({ name }) {
  const sharedProps = {
    'aria-hidden': true,
    fill: 'none',
    height: 22,
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.5,
    viewBox: '0 0 24 24',
    width: 22,
  }

  switch (name) {
    case 'heart':
      return (
        <svg {...sharedProps}>
          <path d="M20.8 8.7c0 5-8.8 10.1-8.8 10.1S3.2 13.7 3.2 8.7a4.5 4.5 0 0 1 8.8-1.3 4.5 4.5 0 0 1 8.8 1.3Z" />
        </svg>
      )
    case 'cloud':
      return (
        <svg {...sharedProps}>
          <path d="M7.2 18h9.5a4.3 4.3 0 0 0 .4-8.6A6 6 0 0 0 5.6 8a5 5 0 0 0 1.6 10Z" />
          <path d="m9 12 2.1 2 4-4" />
        </svg>
      )
    case 'sprout':
      return (
        <svg {...sharedProps}>
          <path d="M12 20v-8" />
          <path d="M12 13c-5.2 0-7.2-2.7-7.2-6.5C8.8 6.5 12 8.5 12 13Z" />
          <path d="M12 10.5c0-4 2.6-6.5 7.2-6.5 0 3.9-2.1 6.5-7.2 6.5Z" />
          <path d="M8.5 20h7" />
        </svg>
      )
    case 'calendar':
      return (
        <svg {...sharedProps}>
          <rect x="4" y="6" width="16" height="14" rx="2" />
          <path d="M8 4v4m8-4v4M4 10h16" />
          <path d="M8 14h2m4 0h2m-8 3h2" />
        </svg>
      )
    case 'star':
      return (
        <svg {...sharedProps}>
          <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
        </svg>
      )
    default:
      return null
  }
}

const topics = [
  {
    title: 'Self-care',
    path: '/self-care',
    description: 'Little ways to look after your body and give yourself a kind moment.',
    icon: 'heart',
  },
  {
    title: 'Big feelings',
    path: '/feelings',
    description: 'Understand emotions and find healthy ways to work through them.',
    icon: 'cloud',
  },
  {
    title: 'Growing up',
    path: '/growing-up',
    description: 'Learn about hormones and the changes puberty can bring.',
    icon: 'sprout',
  },
  {
    title: 'Periods & health',
    path: '/periods',
    description: 'Friendly facts about periods, supplies, and when to ask for help.',
    icon: 'calendar',
  },
  {
    title: 'Ambition',
    path: '/ambition',
    description: 'Explore interests, imagine possibilities, and learn about different kinds of work.',
    icon: 'star',
  },
]

export default function Projects() {
  return (
    <section className="topic-section" aria-labelledby="topics-title">
      <div className="topic-section-heading">
        <span className="eyebrow">Choose what you need today</span>
        <h2 id="topics-title">Explore the topics</h2>
        <p>Explore at your own pace and find the information that feels helpful to you today.</p>
      </div>
      <div className="topic-grid">
        {topics.map((topic) => (
          <article className="topic-card" key={topic.path}>
            <div className="topic-card-heading">
              <span className="topic-icon">
                <TopicIcon name={topic.icon} />
              </span>
              <h3>{topic.title}</h3>
            </div>
            <p className="topic-description">{topic.description}</p>
            <Link className="text-link" to={topic.path} aria-label={`Learn more about ${topic.title}`}>
              <span>Learn more</span>
              <span className="text-link-arrow" aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
