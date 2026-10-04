import TopicPage from '../components/TopicPage'
import periodBasicsImage from '../assets/images/per5.jpg'
import gettingReadyImage from '../assets/images/per4.jpg'
import cycleImage from '../assets/images/per1.jpg'

const sections = [
  {
    title: 'What is a period?',
    image: periodBasicsImage,
    imageAlt: 'Period health information',
    text: 'A period is when blood and tissue leave the uterus through the vagina. It is a normal body process and does not mean you are hurt or dirty.',
  },
  {
    title: 'Getting ready',
    image: gettingReadyImage,
    imageAlt: 'Preparing period supplies',
    items: ['A trusted adult can help you choose period supplies, such as pads.', 'Keep a spare pad and underwear in a small pouch if that helps you feel prepared.', 'Change pads regularly and wash your hands before and after.', 'Ask an adult or school nurse if you need supplies or help at school.'],
  },
  {
    title: 'Your cycle can vary',
    image: cycleImage,
    imageAlt: 'A visual about menstrual cycles',
    text: 'Periods may not come on a perfect schedule, especially when they first begin. Writing down dates with a trusted adult can help you notice your own pattern.',
  },
]

export default function Periods() {
  return (
    <TopicPage
      eyebrow="Body health"
      title="Periods: the basics"
      intro="A period is a normal part of growing up for many people. Here are a few simple facts to help you feel prepared."
      sections={sections}
      note="Tell a trusted adult if you have strong pain, feel unwell, bleed a lot, or have any concern. A doctor or nurse can help."
    />
  )
}
