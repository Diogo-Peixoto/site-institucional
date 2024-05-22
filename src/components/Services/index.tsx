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
          text="O divórcio é um procedimento legal cuja finalidade é encerrar o vínculo matrimonial entre duas pessoas, terminando em definitivo com o casamento."
        />
        <CardServices
          image="/images/services/family-icon.svg"
          title="Guarda de Filhos"
          text="A guarda dos filhos é, ao mesmo tempo, direito e dever dos pais. O termo “guarda” é utilizado para designar genericamente vigilância, proteção e cuidado."
        />
        <CardServices
          image="/images/services/balance-icon.svg"
          title="Guarda Compartilhada"
          text="A guarda compartilhada é o ideal a ser buscado entre os pais separados, ainda que, para isso seja necessária a reorganização de hábitos das novas famílias."
        />
        <CardServices
          image="/images/services/food-icone.svg"
          title="Pensão Alimentícia"
          text="A pensão alimentícia deve ser suficiente para custear não apenas a alimentação, mas também o vestuário, cal- çado, moradia, transporte, saúde, educação e lazer."
        />
      </ul>
    </section>
  )
}
