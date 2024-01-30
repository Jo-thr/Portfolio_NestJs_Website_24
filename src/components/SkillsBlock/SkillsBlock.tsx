'use client'

import Tag from '@/components/Tag/Tag'
import { useState } from 'react'

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

  return (
    <div className="-mt-6 w-full animate-appear opacity-0 sm:mt-20">
      <div className="flex flex-wrap items-center gap-2 sm:flex-row sm:gap-4">
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
        className={`relative mt-10 grid w-full min-w-full grid-cols-3 items-center justify-center gap-4 sm:grid-cols-8 sm:gap-10`}
      >
        {(isSelected.length ? selectedSkills : favSkills).map((item) => (
          <div
            key={item.id}
            className={`group aspect-[9/10] w-full rounded-md bg-gradient-to-br from-teal-300 via-pink-600 to-orange-500 p-0.5 transition-all  duration-500 ease-in-out sm:aspect-square`}
          >
            <div className="flex h-full w-full flex-col gap-3 rounded-md bg-[#000] p-3 group-hover:bg-teal-300/10 sm:gap-4 sm:p-6">
              <p className="whitespace-nowrap text-xs tracking-tighter sm:text-sm">
                {item.domain}
              </p>
              <div className="h-px w-full rounded-full bg-teal-100 sm:h-1" />
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsBlock
