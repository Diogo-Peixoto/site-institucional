import Image from 'next/image'
import Link from 'next/link'

export const Presentation = () => {
  return (
    <main className="flex items-center justify-center min-h-screen container m-auto max-sm:flex-col ">
      <div className="w-[575.4px] flex flex-col gap-8 max-xl:px-3 max-xl:min-w-[400px] max-md:min-w-[200px] pt-10 max-sm:items-start max-sm:w-auto">
        <h1 className="text-6xl text-[#414141] max-xl:text-5xl max-md:text-3xl max-sm:max-w-96">
          Especialista em Divórcio <span className="text-[#987F61]">& </span>
          Guarda de Filhos
        </h1>
        <p className="text-[#60503E] text-base max-md:text-sm max-sm:max-w-96">
          Minha missão é trazer clareza e empoderamento para mulheres que
          enfrentam o desafio do divórcio e da disputa pela guarda dos
          filhos.Conte comigo para fortalecer sua confiança e tranquilidade
          durante esse período delicado
        </p>

        <Link
          href=""
          className="h-12 w-80 text-white bg-[#987F61] flex items-center justify-center rounded-full text-lg max-md:h-10 max-md:w-56 max-md:text-sm"
        >
          Chamada para ação
        </Link>
      </div>
      <div className="w-full max-w-96 max-sm:py-5">
        <Image
          src="images/presentation/advogada.svg"
          alt="Dra. Pessaoa"
          className="max-sm:max-w-80"
          width={574}
          height={564}
        />
      </div>
    </main>
  )
}
