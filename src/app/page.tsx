import { AboutProfissional } from '@/components/AboutProfissional'
import { Feedback } from '@/components/Feedback'
import { Presentation } from '@/components/Presentation'
import { Services } from '@/components/Services'
import { WhyChoose } from '@/components/WhyChoose'

export default function Home() {
  return (
    <>
      <Presentation />
      <WhyChoose />
      <AboutProfissional />
      <Services />
      <Feedback />
    </>
  )
}
