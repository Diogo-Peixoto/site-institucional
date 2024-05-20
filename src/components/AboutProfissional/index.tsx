import Image from 'next/image'

import { Title2 } from '../Title2'
import { SimpleText } from '../SimpleText'

export const AboutProfissional = () => {
  return (
    <section className="container mx-auto py-24 px-3 flex gap-9 items-center justify-center max-sm:flex-col">
      <Image
        src="/images/whyChoose/profissional.png"
        alt="Dra. Maria"
        className="rounded-lg max-sm:max-w-72 max-lg:max-w-[400px]"
        width={600}
        height={430}
      />
      <div className="max-w-[600px] flex flex-col gap-5 max-sm:text-center max-sm:max-w-[400px]">
        <Title2>
          <span className="text-[#60503E]">Quem é a</span> Dra. Maria?
        </Title2>
        <SimpleText>
          A Dra. Maria é uma advogada experiente, especializada em questões
          delicadas como divórcio e guarda de filhos.
        </SimpleText>
        <SimpleText>
          Com uma abordagem centrada no cliente, ela oferece orientação
          personalizada e soluções criativas para casos complexos. Reconhecida
          por sua ética profissional e compromisso com seus clientes, a Dra.
        </SimpleText>
        <SimpleText>
          Maria está pronta para representá-los com integridade e competência,
          sempre colocando seus interesses em primeiro lugar. Conheça mais sobre
          como ela pode ajudá-lo a enfrentar desafios legais com confiança e
          segurança.
        </SimpleText>
      </div>
    </section>
  )
}
