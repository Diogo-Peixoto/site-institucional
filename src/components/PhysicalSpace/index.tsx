import Image from 'next/image'
import { SimpleText } from '../SimpleText'
import Link from 'next/link'
import { FaMapLocationDot } from 'react-icons/fa6'

export const PhysicalSpace = () => {
  return (
    <section className="grid grid-cols-2 my-8 py-12 gap-20 bg-[#FDFAF7] max-xl:gap-7 max-md:grid-cols-1 max-md:justify-center">
      <div className="flex items-center justify-end max-md:max-w-[470px]">
        <div className="flex flex-col items-end gap-10 max-w-[470px] max-lg:max-w-full max-lg:ps-5">
          <h2 className="text-5xl font-medium max-xl:text-3xl">
            Venha conhecer o{' '}
            <span className="text-[#60503E]">nosso espaço</span>
          </h2>
          <SimpleText className="text-[#60503E]">
            Estamos localizados na Rua Teotino Tibiriçá Pimenta, nº199 – Centro,
            Caraguatatuba – SP, clique em saiba como chegar.
          </SimpleText>
          <div className="w-full flex justify-start">
            <Link
              target="_blank"
              href="https://www.google.com/maps/place/Advocacia+Damatta/@-16.7637044,-43.876864,15z/data=!4m10!1m2!2m1!1sadvocacia!3m6!1s0xab5500652d40f1:0x55137a3c2c987dc5!8m2!3d-16.7626129!4d-43.8646874!15sCglhZHZvY2FjaWFaCyIJYWR2b2NhY2lhkgEGbGF3eWVy4AEA!16s%2Fg%2F11txgk6yhq?entry=ttu"
              className="h-12 w-80 text-white bg-[#987F61] flex items-center justify-center gap-3 rounded-full text-lg max-md:h-10 max-md:w-56 max-md:text-sm"
            >
              Saiba como chegar <FaMapLocationDot />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[320px_320px] grid-rows-2 gap-5 max-2xl:grid-cols-[240px_240px] max-xl:grid-cols-[200px_200px] max-lg:gap-2 max-lg:grid-cols-[180px_180px]">
        <Image
          width={320}
          height={180}
          src="/images/physicalSpace/space1.jpg"
          alt="Escritório"
        />
        <Image
          width={320}
          height={180}
          src="/images/physicalSpace/space2.jpg"
          alt="Escritório"
        />
        <Image
          width={320}
          height={180}
          src="/images/physicalSpace/space3.jpg"
          alt="Escritório"
        />
      </div>
    </section>
  )
}
