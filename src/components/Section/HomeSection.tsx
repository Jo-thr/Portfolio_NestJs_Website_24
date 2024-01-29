'use client'

import Desktop from '@public/images/desktop.jpg'
import DesktopOnly from '@public/images/desktopOnly.png'
import LogoAnimation from '@public/images/logo-animation.png'
import Image from 'next/image'
import { useParams } from 'next/navigation'

export type HomeSectionProps = {
  data: { me: string; dev: string; autodidacte: string }
}

const HomeSection = ({ data }: HomeSectionProps) => {
  const params = useParams()

  return (
    <div>
      <div className="absolute z-50 flex h-[80vh] w-full transform animate-deappear items-center justify-center bg-[#000000] transition-all duration-500 ease-in-out sm:h-screen">
        <Image src={LogoAnimation} alt="DesktopOnly" className="z-20 w-1/4" />
      </div>
      <div className="relative flex h-[80vh] w-full flex-col items-center justify-center overflow-hidden sm:h-screen">
        <Image
          src={DesktopOnly}
          alt="DesktopOnly"
          className="absolute top-1/2 z-20 sm:top-0"
        />
        <h5
          className="relative z-10 mb-6 -rotate-3 transform bg-gradient-to-r from-teal-300 via-pink-600
to-orange-500 bg-clip-text font-allison text-4xl text-transparent transition-all sm:bottom-72 sm:left-32"
        >
          {data.me}
        </h5>
        <h1
          className={`flex flex-col ${
            params.locale === 'fr' ? 'flex-col-reverse' : 'flex-col'
          } relative z-10 text-center sm:-left-32 sm:bottom-36 sm:max-w-[50%]`}
        >
          <div className={`${params.locale === 'en' ? 'ml-0' : 'sm:ml-96'}`}>
            {data.autodidacte}
          </div>
          <div className={`${params.locale === 'fr' ? 'ml-0' : 'sm:ml-80'}`}>
            {data.dev}
          </div>
        </h1>
        <Image
          src={Desktop}
          alt="Desktop"
          className="absolute top-1/2 z-0 sm:top-0"
        />
      </div>

      <div className="absolute bottom-[15vh] z-20 h-60 w-full bg-gradient-to-t from-[#000] to-transparent sm:bottom-0 sm:h-96" />
    </div>
  )
}

export default HomeSection
