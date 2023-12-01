'use client'

import { useState } from 'react'
import Card from './Card'
import LogoWhite from '@public/images/Logo-white.svg'
import Image from 'next/image'

export interface SummaryProps {
  dataSummary: {
    id: string
    title: string
    link: string
    logo: boolean
  }[]
}

const Summary = ({ dataSummary }: SummaryProps) => {
  const [isShowing, setIsShowing] = useState(false)
  const [isHovering, setIsHovering] = useState('')

  const handleHover = (title: string) => {
    if (title != '') {
      setIsHovering(title)
      setIsShowing(true)
    } else {
      setIsHovering(title)
      setIsShowing(false)
    }
  }

  const MainText = 'JO THR'

  return (
    <div className="relative flex h-screen w-screen p-10">
      <div
        className={`absolute left-1/2 top-1/2 z-20 h-max w-max -translate-x-[50%] -translate-y-[50%] transform text-center transition-all duration-700 ease-in-out`}
      >
        <div className="relative overflow-hidden text-[10rem] font-black uppercase leading-[8rem]">
          {MainText.match(/./gu)!.map((char, index) => (
            <span
              className="inline-block animate-text-reveal opacity-0"
              key={`${char}-${index}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
      </div>
      <div className="relative z-10 grid w-full animate-appear grid-cols-8 grid-rows-4 gap-5 opacity-0">
        {dataSummary?.map((item: any) => (
          <Card
            key={item.id}
            title={item.title}
            url={item.link}
            logo={item.logo}
            switchLang={item.switch}
            className={`${
              isHovering !== '' &&
              isHovering !== item.title &&
              'backdrop-blur-sm'
            } ${item.link.includes('about') && 'col-span-4 row-span-2'} ${
              item.link.includes('skills') && 'col-span-3 row-span-2'
            } ${item.link.includes('cv') && 'col-span-1 row-span-2'} ${
              item.link.includes('works') && 'col-span-6 row-span-2'
            } ${item.link.includes('socials') && 'col-span-2 row-span-1'} ${
              item.link.includes('contact') && 'col-span-2 row-span-1'
            }`}
            handleHover={handleHover}
          />
        ))}
      </div>
      <div
        className={`transform transition-all duration-700 ease-in-out ${
          isShowing
            ? '-translate-y-[52%] opacity-100'
            : 'translate-y-0 opacity-0'
        } absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] animate-appear text-center text-[10rem] font-black uppercase leading-[8rem] opacity-0`}
      >
        {isHovering}
      </div>
    </div>
  )
}

export default Summary
