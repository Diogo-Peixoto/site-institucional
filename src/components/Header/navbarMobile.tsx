import Link from 'next/link'
import { IoMdMenu } from 'react-icons/io'
import menuData from './menuData'
import { useState } from 'react'

export const NavbarMobile = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <div className="md:hidden">
      <IoMdMenu className="w-8 h-8" onClick={navbarToggleHandler} />
      {navbarOpen && (
        <div className="w-full bg-white flex flex-col absolute left-0 top-16">
          {menuData.map((element) => {
            return (
              <Link
                href=""
                className="px-7 py-3 hover:bg-slate-100 text-sm font-semibold border-t"
                key={element.id}
              >
                {element.title}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
