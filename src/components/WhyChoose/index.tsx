import { Title2 } from '../Title2'
import { CardWhyChoose } from './cardWhyChoose'

export const WhyChoose = () => {
  return (
    <section className="flex items-center justify-center container m-auto flex-col gap-3 my-14 px-3">
      <Title2>
        Porque escolher a <span className="text-[#60503E]">Dra. Maria?</span>
      </Title2>
      <ul className="bg-[#F8F4EF]  py-3 px-2  grid grid-cols-3 gap-5 max-sm:grid-cols-1 max-sm:gap-7  max-sm:container max-sm:justify-items-center">
        <CardWhyChoose
          number={5}
          title="ANOS DE EXPERIÊNCIA"
          text="om mais de 5 anos de experiência dedicados ao campo jurídico, temos
            o conhecimento e a habilidade necessários para oferecer soluções
            legais de qualidade e resultados duradouros."
        />
        <CardWhyChoose
          number={70}
          title="CASOS REALIZADOS"
          text="Temos um histórico de sucesso comprovado, com mais de 70 casos jurídicos conduzidos com excelência e resultados extraordinários em cada um deles."
        />
        <CardWhyChoose
          number={108}
          title="CLIENTES ATENDIDOS"
          text="Já ajudamos a recuperar a confiança e a tranquilidade de mais de 500 clientes, oferecendo orientação jurídica personalizada e resultados surpreendentes."
        />
      </ul>
    </section>
  )
}
