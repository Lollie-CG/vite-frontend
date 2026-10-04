import TopicPage from '../components/TopicPage'
import counselImage from '../assets/images/counsel.jpg'
import speakImage from '../assets/images/speak.jpg'
import resetImage from '../assets/images/slot1.jpg'

const sections = [
  {
    title: 'All feelings are allowed',
    image: speakImage,
    imageAlt: 'A person speaking about their feelings',
    text: 'Happy, sad, mad, nervous, excited, and mixed-up feelings are all part of being human. Feelings are clues, not something you need to be ashamed of.',
  },
  {
    title: 'Try a small reset',
    image: resetImage,
    imageAlt: 'Taking a moment for a calming reset',
    items: ['Name the feeling: “I feel ___.”', 'Take a few slow breaths or get a drink of water.', 'Draw, write, stretch, or sit somewhere calm.', 'Ask someone kind to listen.'],
  },
  {
    title: 'When to get help',
    image: counselImage,
    imageAlt: 'A trusted counselor offering support',
    text: 'If a worry sticks around, feels too big to handle, or makes it hard to do everyday things, tell a trusted adult. You deserve support.',
  },
]

export default function Feelings() {
  return (
    <TopicPage
      title="Understanding big feelings"
      intro="Feelings can change from day to day, and sometimes a feeling can seem extra big. You do not have to work it all out by yourself."
      sections={sections}
      note="If you feel unsafe or think someone may hurt you, tell a trusted grown-up right away. If the first person cannot help, keep telling safe adults until someone does."
    />
  )
}
