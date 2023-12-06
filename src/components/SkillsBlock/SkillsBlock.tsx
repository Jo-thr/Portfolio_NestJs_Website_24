'use client'

import React, { useEffect, useState } from 'react'
import Tag from '../Tag/Tag'

export interface SkillsBlockProps {
  data: {
    tags: {
      id: string
      name: string
    }[]
    skills: {
      id: string
      name: string
      domain: string
      fav: boolean
    }[]
  }
}

const SkillsBlock = ({ data }: SkillsBlockProps) => {
  const [isSelected, setIsSelected] = useState<string | string[]>([])
  const favSkills = data.skills.filter((skill) => skill.fav)
  const selectedSkills =
    isSelected.length &&
    !isSelected.includes('Tous') &&
    !isSelected.includes('All')
      ? data.skills.filter((skill) => skill.domain === isSelected)
      : data.skills

  console.log(isSelected)
  return (
    <div className="mt-40 w-full animate-appear px-60 opacity-0">
      <div className="mb-10 flex flex-row items-center gap-4">
        {data.tags.map((tag) => (
          <Tag
            key={tag.id}
            title={tag.name}
            isSelected={isSelected}
            onClick={() =>
              setIsSelected(isSelected === tag.name ? [] : tag.name)
            }
          />
        ))}
      </div>
      <div
        className={`relative grid w-full min-w-full grid-cols-6 items-center justify-center gap-20`}
      >
        {(isSelected.length ? selectedSkills : favSkills).map((item) => (
          <div
            key={item.id}
            className={`flex aspect-square w-full flex-col gap-6 rounded-md border-4 border-orange-300 p-8`}
          >
            <p className="text-lg">{item.domain}</p>
            <div className="h-1 w-full rounded-full bg-orange-300" />
            <h3 className="font-koulen text-4xl ">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsBlock
