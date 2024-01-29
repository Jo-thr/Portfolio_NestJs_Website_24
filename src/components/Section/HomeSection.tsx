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
      <div className="absolute z-50 flex h-screen w-full transform animate-deappear items-center justify-center bg-[#000000] transition-all duration-500 ease-in-out">
        <Image src={LogoAnimation} alt="DesktopOnly" className="z-20 w-1/4" />
      </div>
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <Image
          src={DesktopOnly}
          alt="DesktopOnly"
          className="absolute top-0 z-20"
        />
        <h5 className="relative bottom-72 left-32 z-10 -rotate-3 transform font-allison text-4xl  transition-all">
          {data.me}
        </h5>
        <h1
          className={`flex flex-col ${
            params.locale === 'fr' ? 'flex-col-reverse' : 'flex-col'
          } relative bottom-36 -left-32 z-10 max-w-[50%] text-center`}
        >
          <div className={`${params.locale === 'en' ? 'ml-0' : 'ml-96'}`}>
            {data.autodidacte}
          </div>
          <div className={`${params.locale === 'fr' ? 'ml-0' : 'ml-80'}`}>
            {data.dev}
          </div>
        </h1>
        <Image src={Desktop} alt="Desktop" className="absolute top-0 z-0" />
      </div>

      <div className="absolute bottom-0 z-20 h-96 w-full bg-gradient-to-t from-[#000] to-transparent" />
    </div>
  )
}

export default HomeSection
