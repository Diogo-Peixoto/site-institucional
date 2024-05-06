import { Title2 } from '../Title2'
import { CardFeedback } from './cardFeedback'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export const Feedback = () => {
  return (
    <section className="container m-auto flex flex-col gap-3  items-center">
      <Title2>
        Mulheres que <span className="text-[#60503E]">recomendam</span>
      </Title2>

      <Carousel
        opts={{
          align: 'start',
        }}
        className="bg-[#F8F4EF] flex  justify-center gap-3 p-7  max-w-screen-xl max-2xl:w-4/5 "
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CardFeedback key={index} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
