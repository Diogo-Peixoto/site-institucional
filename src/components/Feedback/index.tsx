import { Title2 } from '../Title2'
import { CardFeedback } from './cardFeedback'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { feedback } from './data'

export const Feedback = () => {
  return (
    <section className="container m-auto flex flex-col gap-3  items-center max-sm:px-0">
      <Title2>
        Mulheres que <span className="text-[#60503E]">recomendam</span>
      </Title2>

      <Carousel
        opts={{
          align: 'start',
        }}
        className="bg-[#F8F4EF] flex  justify-center gap-3 p-7  max-w-screen-xl max-2xl:w-4/5 max-sm:p-4 max-sm:w-full "
      >
        <CarouselContent>
          {feedback.map((element, index) => (
            <CardFeedback
              name={element.name}
              text={element.text}
              img={element.img}
              key={index}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
