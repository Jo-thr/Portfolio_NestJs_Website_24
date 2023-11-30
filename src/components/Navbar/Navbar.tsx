'use client'
import Image from 'next/image'
import {
  useParams,
  usePathname,
  useRouter,
  useSelectedLayoutSegments,
} from 'next/navigation'
import LogoWhite from '@public/images/Logo-white.svg'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IconType } from '../Icons/Icons'
import Button from '../Button/Button'
import Switcher from '../Switcher/Switcher'

export interface NavbarProps {
  dataSummary: {
    id: string
    title: string
    link: string
  }[]
}

const Navbar = ({ dataSummary }: NavbarProps) => {
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
    <div className={`${(pathname === '/' || pathname === '/en') && 'hidden'}`}>
      <div
        className={`${
          isOpen
            ? 'rounded-[2rem] bg-black-dark'
            : 'rounded-[3rem] bg-black-dark/50'
        } fixed bottom-[5vh] left-[3vw] z-50 w-[94vw] transform border border-black-medium bg-black-dark/50 backdrop-blur-md transition-all duration-500 ease-in-out`}
      >
        <div
          className={`${
            isOpen ? 'opacity-100 ' : 'opacity-0'
          } text-white-lighten absolute left-1/2 -mt-10 w-max translate-x-[-50%] font-koulen tracking-widest transition-opacity  delay-500 duration-500`}
        >
          - Menu -
        </div>
        <div className="relative flex flex-row items-center justify-between p-2">
          <div className="ml-3 flex flex-row items-center justify-start gap-4">
            <Link href={`/${locale}`}>
              <Image src={LogoWhite} alt={'Logo'} />
            </Link>
            <h5
              className={`font-koulen ${
                isOpen && 'opacity-10'
              } transform transition-all duration-500 ease-in-out`}
            >
              {urlSegments}
            </h5>
          </div>
          <div className="flex flex-row items-center justify-end gap-10">
            <Switcher />
            <Button
              title={isOpen ? 'FERMER' : 'MENU'}
              icon={IconType[isOpen ? 'CROSS' : 'CHEVRON_UP']}
              onClick={handleMenu}
              className={
                'transform font-koulen transition-all duration-500 ease-in-out'
              }
            />
          </div>
        </div>
        {isOpen && (
          <div className="relative mt-1 w-full border-t border-black-medium p-6 ">
            <h5 className={`font-koulen text-lg`}>Pages</h5>
            <div className="flex flex-row gap-4">
              {dataSummary?.map((item: any) => (
                <div key={item.id}>{item.link}</div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div
        className={`bg-black fixed transition duration-500  ${
          isOpen
            ? 'z-40 h-screen  w-screen opacity-70 !backdrop-blur-sm'
            : 'h-0 w-0 opacity-0'
        }`}
      />
    </div>
  )
}

export default Navbar
