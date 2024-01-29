'use client'
import Button from '@/components/Button/Button'
import { IconType } from '@/components/Icons/Icons'
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
        } fixed bottom-[5vh] left-[3vw] z-50 w-[94vw] transform border border-black-medium bg-black-dark/50 backdrop-blur-md transition-all duration-500 ease-in-out`}
      >
        <div
          className={`${
            isOpen ? 'opacity-100 ' : 'opacity-0'
          } text-white-lighten absolute left-1/2 z-40 -mt-10 w-max translate-x-[-50%] font-allison tracking-widest transition-opacity delay-150 duration-500`}
        >
          - {content.menu} -
        </div>
        <div className="relative flex flex-row items-center justify-between p-2">
          <div className="ml-3 flex flex-row items-center justify-start gap-4">
            <Link href={`/${locale}`}>
              <Image src={MinLogo} alt={'Logo'} className="h-8 max-w-[2rem]" />
            </Link>
            <h5
              className={`font-poppins ${
                isOpen && 'opacity-10'
              } transform text-xl transition-all duration-500 ease-in-out`}
            >
              {urlSegments.slice(-1)}
            </h5>
          </div>
          <div className="flex flex-row items-center justify-end gap-10">
            <Switcher
              className={`${
                isOpen && 'opacity-10'
              } relative transform transition-all duration-500 ease-in-out`}
            />
            <Button
              title={isOpen ? content.close : content.menu}
              icon={IconType[isOpen ? 'CROSS' : 'CHEVRON_UP']}
              onClick={handleMenu}
              className={
                'transform font-poppins transition-all duration-500 ease-in-out'
              }
            />
          </div>
        </div>
        {isOpen && (
          <div className="relative mt-1 w-full border-t border-black-medium p-6 ">
            <h5 className={`font-poppins text-lg`}>Pages</h5>
            <div className="flex flex-row gap-4">
              {dataSummary?.map((item: any) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className={`${
                    pathname.includes(item.link) && 'line-through opacity-20'
                  }`}
                  onClick={handleMenu}
                >
                  {item.link}
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
