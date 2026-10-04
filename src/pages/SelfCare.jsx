import TopicPage from '../components/TopicPage'
import careForBodyImage from '../assets/images/cc.jpg'
import restAndResetImage from '../assets/images/rr.jpg'
import feelGoodImage from '../assets/images/ssk.jpg'

const sections = [
  {
    title: 'Care for your body',
    image: careForBodyImage,
    imageAlt: 'Self-care and looking after your body',
    text: 'Small everyday habits can help you feel your best. You do not have to do everything perfectly.',
    items: ['Drink water when you are thirsty.', 'Eat regular meals and snacks that give you energy.', 'Move in a way that feels fun and comfortable.'],
  },
  {
    title: 'Rest and reset',
    image: restAndResetImage,
    imageAlt: 'A peaceful moment to rest and recharge',
    text: 'Rest is important for growing bodies and busy minds.',
    items: ['Try a calming bedtime routine.', 'Take a quiet break when you feel overwhelmed.', 'Breathe in slowly and let your breath out gently.'],
  },
  {
    title: 'Feel good in your own skin',
    image: feelGoodImage,
    imageAlt: 'Friends celebrating confidence and feeling good in their own skin',
    text: 'Your body deserves care and respect just as it is.',
    items: ['Wear clothes that feel comfortable.', 'Wash your body and change into clean clothes when you need to.', 'Ask a trusted adult for help with anything that feels confusing.'],
  },
]

export default function SelfCare() {
  return (
    <TopicPage
      title="Taking care of you"
      intro="Self-care is made of small things that help your body and mind feel looked after. Pick one idea that feels right today."
      sections={sections}
      note="There is no perfect self-care routine. If something hurts or worries you, let a trusted adult know."
    />
  )
}
