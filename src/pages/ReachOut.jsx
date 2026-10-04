import TopicPage from '../components/TopicPage'
import retryImage from '../assets/images/slot2.jpg'
import speakImage from '../assets/images/speak1.jpg'
import conversationImage from '../assets/images/speak2.jpg'

const sections = [
  {
    title: 'Choose a trusted grown-up',
    image: speakImage,
    imageAlt: 'Talking with a trusted grown-up',
    text: 'You could talk with a parent or caregiver, a relative, teacher, school counselor, nurse, or another adult who helps you feel safe.',
  },
  {
    title: 'Borrow these words',
    image: conversationImage,
    imageAlt: 'Words to help start a conversation',
    items: ['“Can we talk somewhere private? I have a question.”', '“Something has been on my mind. Can you listen?”', '“I am not sure how to explain it, but I need some help.”', '“Could you help me find a nurse or doctor to ask?”'],
  },
  {
    title: 'You can try again',
    image: retryImage,
    imageAlt: 'Finding another trusted person to talk to',
    text: 'If the first grown-up is busy or does not understand, try another trusted adult. You deserve to be listened to and helped.',
  },
]

export default function ReachOut() {
  return (
    <TopicPage
      eyebrow="A private next step"
      title="Talk to someone you trust"
      intro="This page does not send or save messages. It is here to help you find words for a real conversation with a safe grown-up."
      sections={sections}
      note="Do not share your full name, address, school, phone number, or private pictures with strangers online. If you are in immediate danger, go to a safe grown-up nearby and ask for help now."
    />
  )
}
