import { SimpleText } from '../SimpleText'

interface ICardWhyChooseProps {
  number: number
  title: string
  text: string
}

export const CardWhyChoose = ({ number, title, text }: ICardWhyChooseProps) => {
  return (
    <li className="max-w-72 text-[#60503E] flex flex-col gap-3 text-center">
      <span className="text-[#60503E] text-7xl font-semibold max-lg:text-5xl max-md:text-4xl">
        <span className="text-[#987F61]">+</span>
        {number}
      </span>
      <p className="text-2xl max-lg:text-xl max-md:text-lg">{title}</p>
      <SimpleText>{text}</SimpleText>
    </li>
  )
}
