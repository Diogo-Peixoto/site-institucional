import { FaStar } from 'react-icons/fa'

import Image from 'next/image'
import { SimpleText } from '../SimpleText'

interface ICardFeedbackProps {
  name: string
  text: string
  img: string
}

export const CardFeedback = ({ name, text, img }: ICardFeedbackProps) => {
  return (
    <div className="bg-white min-w-96 mx-1 p-10 flex flex-col gap-4 text-[#987F61] h-80 max-2xl:p-5 max-sm:min-w-72">
      <div className="flex items-center gap-1">
        5,0 <FaStar color="#F0AD4E" />
      </div>
      <div className="flex gap-5">
        <Image
          src={img}
          alt="Usuario"
          width={56}
          height={60}
          className="w-14 h-14 max-sm:max-w-10 max-sm:max-h-10"
        />
        <div>
          <p className="font-medium">{name}</p>
          <p className="font-light">Cliente</p>
        </div>
      </div>
      <SimpleText className="text-sm">{text}</SimpleText>
    </div>
  )
}
