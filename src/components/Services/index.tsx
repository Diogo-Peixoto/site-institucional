import { Title2 } from '../Title2'

import { CardServices } from './cardServices'

export const Services = () => {
  return (
    <section className="flex items-center justify-center container m-auto flex-col gap-3 my-14 px-3">
      <Title2 className="text-center">
        Descubra os <span className="text-[#60503E]">serviços prestados!</span>
      </Title2>

      <ul className="w-full grid grid-cols-4 gap-5 justify-items-center max-lg:grid-cols-2 max-sm:grid-cols-1">
        <CardServices
          image="/images/services/divorce-icon.svg"
          title="Divórcio"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        />
        <CardServices
          image="/images/services/family-icon.svg"
          title="Guarda de Filhos"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        />
        <CardServices
          image="/images/services/balance-icon.svg"
          title="Guarda Compartilhada"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        />
        <CardServices
          image="/images/services/food-icone.svg"
          title="Pensão Alimentícia"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        />
      </ul>
    </section>
  )
}
