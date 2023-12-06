'use client'

import React from 'react'

export interface SwitchMinProps {
  className?: string
  title: string
  description?: string
}

const Heading = ({ className, title, description }: SwitchMinProps) => {
  return (
    <div className={`${className} flex h-max w-full flex-col`}>
      <div
        className={`flex min-h-min w-max flex-col items-start overflow-hidden`}
      >
        <h1
          className={`transform animate-reveal text-center text-[8rem] font-black uppercase opacity-0 transition-all duration-700 ease-in-out `}
        >
          {title}
        </h1>
      </div>
      <p className="w-2/3 transform animate-reveal opacity-0 transition-all duration-700 ease-in-out">
        {description}
      </p>
    </div>
  )
}

export default Heading
