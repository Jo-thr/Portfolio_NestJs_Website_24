'use client'

import React from 'react'

export interface SkillsBlockProps {
  className: string
  data: {
    id: string
    name: string
    domain: string
    fav: boolean
  }[]
}

const SkillsBlock = ({ data, className }: SkillsBlockProps) => {
  return (
    <div
      className={`${className} relative grid w-full grid-cols-6 gap-20 px-80`}
    >
      {data.map((item) => (
        <div
          key={item.id}
          className={`flex aspect-square w-full flex-col gap-6 border-4 border-orange-300 p-8`}
        >
          <p className="text-lg">{item.domain}</p>
          <div className="h-1 w-full rounded-full bg-orange-300" />
          <h3 className="font-koulen text-4xl ">{item.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default SkillsBlock
