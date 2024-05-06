import Image from 'next/image'
import { SimpleText } from '../SimpleText'
import { FaEye } from 'react-icons/fa'

interface ICardServices {
  image: string
  title: string
  text: string
}

export const CardServices = ({ image, title, text }: ICardServices) => {
  return (
    <li className="max-w-80 bg-[#F8F4EF] p-5 flex flex-col items-center gap-3  text-center rounded-lg max-sm:max-w-72">
      <Image
        src={image}
        alt="Divórcio"
        className="h-24 max-sm:h-16"
        width={100}
        height={100}
      />
      <h3 className="text-3xl h-20 flex items-center text-[#60503E] max-sm:text-xl max-sm:h-10">
        {title}
      </h3>
      <SimpleText className="max-xl:h-[183px] max-lg:h-[100px]">
        {text}
      </SimpleText>
      <button className="h-12 w-full text-white bg-[#987F61] flex items-center justify-center gap-6 rounded-full text-lg max-md:h-10  max-md:text-sm mt-5 ">
        Ver Detalhes <FaEye />
      </button>
    </li>
  )
}
