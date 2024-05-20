import { FaStar } from 'react-icons/fa'

import Image from 'next/image'
import { SimpleText } from '../SimpleText'

export const CardFeedback = () => {
  return (
    <div className="bg-white min-w-96 mx-1 p-10 flex flex-col gap-4 text-[#987F61] h-80 max-2xl:p-5 max-sm:min-w-72">
      <div className="flex items-center gap-1">
        5,0 <FaStar color="#F0AD4E" />
      </div>
      <div className="flex gap-5">
        <Image
          src="/images/feedback/feedback-image.png"
          alt="Usuario"
          width={56}
          height={60}
          className='w-14 h-14 max-sm:max-w-10 max-sm:max-h-10'
        />
        <div>
          <p className="font-medium">Gabriela Germano</p>
          <p className="font-light">Cliente</p>
        </div>
      </div>
      <SimpleText className="text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when
      </SimpleText>
    </div>
  )
}
