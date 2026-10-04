import TopicPage from '../components/TopicPage'
import careerImage from '../assets/images/car3.jpg'
import pathsImage from '../assets/images/car4.jpg'
import curiosityImage from '../assets/images/car5.jpg'

const sections = [
  {
    title: 'What is a career?',
    image: careerImage,
    imageAlt: 'Exploring career possibilities',
    text: 'A career is the work someone does over time. People can learn new skills, try different jobs, and change direction as their interests grow. You do not need to choose your whole future right now.',
  },
  {
    title: 'Many paths to explore',
    image: pathsImage,
    imageAlt: 'Different paths to explore for the future',
    items: [
      'Help people: teaching, caring for animals, health, or community work.',
      'Make and create: art, music, writing, design, cooking, or building.',
      'Ask questions: science, nature, technology, space, or finding solutions.',
      'Organize and lead: planning events, running a shop, teamwork, or helping a project succeed.',
    ],
  },
  {
    title: 'Follow your curiosity',
    image: curiosityImage,
    imageAlt: 'Exploring an interest with curiosity',
    text: 'Notice what you enjoy doing, what you like learning about, and what problems you would like to help solve. There are lots of ways to use the same interest.',
    items: [
      'Try a library book, school club, activity, or small project.',
      'Ask a trusted adult what their work is like and how they learned to do it.',
      'Remember that every kind of job can be for people of any gender.',
    ],
  },
]

export default function Ambition() {
  return (
    <TopicPage
      eyebrow="Dream, discover, try"
      title="Explore future possibilities"
      intro="There are many interesting ways to learn, make things, solve problems, and help others. Exploring careers can be fun—there is no need to have everything figured out."
      sections={sections}
      note="Your interests can change as you grow. Being curious and trying new things is a great place to start."
    />
  )
}
