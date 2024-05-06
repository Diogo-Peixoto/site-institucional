'use client'

import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import { NavbarDesktop } from './navbarDesktop'
import { NavbarMobile } from './navbarMobile'

export const Header = () => {
  const [sticky, setSticky] = useState(false)
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar)
  }, [])

  return (
    <header
      className={` bg-white/30 min-w-full flex justify-center sticky top-0 ${sticky && 'backdrop-blur-md'} `}
    >
      <nav className="flex items-center justify-between h-16 w-9/12 max-lg:w-10/12 max-md:justify-end gap-4">
        <NavbarDesktop />
        <NavbarMobile />

        <a
          href=""
          className="py-3 px-8 bg-[#987F61] rounded-full text-white flex items-center gap-2 hover:bg-[#7e6950] max-md:py-2 max-md:px-6 max-md:text-sm"
        >
          <FaWhatsapp width={18} height={18} />
          Whatsapp
        </a>
      </nav>
    </header>
  )
}
