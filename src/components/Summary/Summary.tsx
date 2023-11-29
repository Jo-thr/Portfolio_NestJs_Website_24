'use client'

import { useState } from 'react'
import Card from './Card'
import useContent from '@/hooks/useContent'

const Summary = () => {
  const { dataSummary } = useContent()
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

  return (
    <div className="relative flex h-screen w-screen p-10">
      <div className="relative z-10 grid w-full grid-cols-8 grid-rows-4 gap-5">
        {dataSummary?.map((item: any) => (
          <Card
            key={item.id}
            title={item.title}
            className={`${
              isHovering !== '' &&
              isHovering !== item.title &&
              'backdrop-blur-md'
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
        } absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-center text-[10rem] font-black uppercase leading-[8rem]`}
      >
        {isHovering}
      </div>
    </div>
  )
}

export default Summary
