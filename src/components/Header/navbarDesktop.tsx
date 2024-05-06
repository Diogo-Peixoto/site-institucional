import Link from 'next/link'
import menuData from './menuData'

export const NavbarDesktop = () => {
  return (
    <div className="max-lg flex justify-center max-md:hidden ">
      {menuData.map((element) => {
        return (
          <Link
            href=""
            className={`py-2 px-6 rounded-full ${element.active && 'bg-[#987f6146]'} max-h-10  max-lg:px-2.5 text-nowrap  max-lg:text-sm`}
            key={element.id}
          >
            {element.title}
          </Link>
        )
      })}
    </div>
  )
}
