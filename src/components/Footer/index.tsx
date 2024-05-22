import { FaFacebookSquare, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { SimpleText } from '../SimpleText'

export const Footer = () => {
  return (
    <section className="bg-[#A69581] pt-7 pb-14">
      <div className="container flex  justify-between gap-4  m-auto max-sm:flex-col">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl text-white max-sm:text-3xl">Dra. Maria</h3>
            <SimpleText className="text-white">
              Cuidando da sua auto-estima com amor e carinho.
            </SimpleText>
            <div className="h-[3px] w-56 bg-[#60503E]" />
          </div>
          <figure className="flex gap-5">
            <FaFacebookSquare className="w-[40px] h-[40px]" color="white" />
            <FaWhatsapp className="w-[40px] h-[40px]" color="white" />
            <FaInstagram className="w-[40px] h-[40px]" color="white" />
          </figure>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg text-white">Links Úteis</p>
          <div className="h-[3px] w-32 bg-[#60503E]" />
          <ul className="flex flex-col gap-4 text-white">
            <SimpleText>Quem sou eu</SimpleText>
            <SimpleText>Procedimentos</SimpleText>
            <SimpleText>Depoimentos</SimpleText>
            <SimpleText>Nosso Espaço</SimpleText>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg text-white">Contato</p>
          <div className="h-[3px] w-32 bg-[#60503E]" />
          <ul className="flex flex-col gap-4 text-white">
            <SimpleText>Telefone: (99) 9999 - 9999</SimpleText>
            <SimpleText>E-mail: contato@maria.com.br</SimpleText>
          </ul>
        </div>
      </div>
    </section>
  )
}
