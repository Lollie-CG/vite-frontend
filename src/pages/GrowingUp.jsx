import TopicPage from '../components/TopicPage'
import acneImage from '../assets/images/acne.jpg'
import hormonesImage from '../assets/images/slot3.jpg'
import timingImage from '../assets/images/per2.jpg'

const sections = [
  {
    title: 'What are hormones?',
    image: hormonesImage,
    imageAlt: 'Learning about hormones and body changes',
    text: 'Hormones are messages your body makes. During puberty, they help your body grow and change. Puberty starts at different times for different people.',
  },
  {
    title: 'Changes can happen',
    image: acneImage,
    imageAlt: 'A visual about skin changes during puberty',
    items: ['You may grow taller or change shape.', 'Breasts may begin to develop, and body hair may grow.', 'Skin or hair may get oilier, and sweating may change.', 'You might notice new feelings or want more privacy.'],
  },
  {
    title: 'Your timing is your own',
    image: timingImage,
    imageAlt: 'A visual about individual timing during puberty',
    text: 'People do not all change at the same time or in the same order. Comparing your body with someone else’s can be confusing—your own trusted adult or doctor can answer personal questions.',
  },
]

export default function GrowingUp() {
  return (
    <TopicPage
      eyebrow="Body changes"
      title="Growing and changing"
      intro="Puberty is one part of growing up. Learning what may happen can make changes feel less surprising."
      sections={sections}
      note="If a change worries you or you have questions about your own body, talk with a parent, caregiver, school nurse, or doctor."
    />
  )
}
