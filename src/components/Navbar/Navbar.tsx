'use client'
import { ImageSVG } from '@/components/Icons/Icons'
import Switcher from '@/components/Switcher/Switcher'
import MinLogo from '@public/images/LOGO-POINT.svg'
import Image from 'next/image'
import Link from 'next/link'
import {
  useParams,
  usePathname,
  useSelectedLayoutSegments,
} from 'next/navigation'
import { useEffect, useState } from 'react'

export interface NavbarProps {
  content: any
  dataSummary: {
    id: string
    title: string
    link: string
  }[]
}

const Navbar = ({ dataSummary, content }: NavbarProps) => {
  const urlSegments = useSelectedLayoutSegments()

  const locale = useParams()?.locale
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const targetElement = document.getElementById('Grid')

    if (targetElement) {
      if (isOpen) {
        targetElement.classList.add('no-scroll')
      } else {
        targetElement.classList.remove('no-scroll')
      }
    }
  }, [isOpen])

  const handleMenu = () => {
    const body = document.querySelector('body')
    if (body && !isOpen) {
      body.style.overflow = 'hidden'
    } else if (body && isOpen) {
      body.style.overflow = 'visible'
    }
    setIsOpen(!isOpen)
  }

  return (
    <nav className="absolute z-40 animate-appear opacity-0">
      <div
        className={`${
          isOpen
            ? 'rounded-[2rem] border bg-black-dark bg-gradient-to-br from-teal-300 via-pink-400 to-orange-500 bg-clip-border'
            : 'rounded-[3rem] bg-black-dark/50'
        } fixed bottom-[2vh] left-[3vw] z-50 w-[94vw] transform border border-black-medium bg-black-dark/50 backdrop-blur-md transition-all duration-500 ease-in-out sm:bottom-[5vh]`}
      >
        <div className="relative flex flex-row items-center justify-between p-2">
          <div
            className={`${
              pathname === '/' ? 'ml-3' : 'sm:ml-3'
            } flex flex-row items-center justify-start gap-4`}
          >
            <Link href={`/${locale}`}>
              <Image
                src={MinLogo}
                alt={'Logo'}
                className={`${
                  pathname === '/' ? 'block' : 'hidden'
                } h-8 max-w-[2rem] sm:block`}
              />
            </Link>
            <h5
              className={`font-poppins ${
                isOpen && 'opacity-10'
              } transform text-base transition-all duration-500 ease-in-out sm:text-xl`}
            >
              {urlSegments.slice(-1)}
            </h5>
          </div>
          <div
            title={isOpen ? content.close : content.menu}
            onClick={handleMenu}
            className={`${
              isOpen ? 'border-white-base' : 'border-transparent'
            } transform items-center justify-center rounded-full border border-transparent bg-gradient-to-br from-teal-300 via-pink-400 to-orange-500 bg-clip-border p-1.5 hover:cursor-pointer sm:hidden`}
          >
            {ImageSVG[isOpen ? 'CROSS' : 'CHEVRON_UP']}
          </div>
          <div className="mr-3 flex flex-row items-center justify-end gap-10 sm:mr-0">
            <Switcher
              className={`${
                isOpen && 'opacity-10'
              } relative transform transition-all duration-500 ease-in-out`}
            />
            <button
              className={`${
                isOpen ? 'border-white-base' : 'border-transparent'
              } hidden flex-row items-center justify-center gap-3 rounded-full border border-transparent bg-gradient-to-br from-teal-300 via-pink-400 to-orange-500 bg-clip-border hover:cursor-pointer sm:flex`}
              onClick={handleMenu}
            >
              <div
                className={`${
                  isOpen ? 'bg-transparent' : 'bg-black-dark'
                } flex flex-row items-center justify-center gap-3 rounded-full px-4 py-2 sm:px-6 sm:py-3`}
              >
                <h5>{isOpen ? content.close : content.menu}</h5>
                {ImageSVG[isOpen ? 'CROSS' : 'CHEVRON_UP']}
              </div>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="relative mt-1 w-full border-t border-black-medium p-6 ">
            <h5 className={`hidden font-poppins text-lg sm:block`}>Pages</h5>
            <div className="grid grid-cols-2 flex-col gap-2 whitespace-nowrap text-sm sm:flex sm:flex-row sm:gap-4 sm:text-base">
              {dataSummary?.map((item: any) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className={`${
                    pathname.includes(item.link) && 'line-through opacity-20'
                  }`}
                  onClick={handleMenu}
                >
                  /{item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <div
        className={`fixed top-0 left-0 bg-black-base transition duration-500  ${
          isOpen
            ? 'z-40 h-screen  w-full opacity-80 !backdrop-blur-sm'
            : 'h-0 w-0 opacity-0'
        }`}
      />
    </nav>
  )
}

export default Navbar
