'use client'

import React, { useEffect, useRef, useState } from 'react'
import Tag from '@/components/Tag/Tag'
import { motion, Variants } from 'framer-motion'

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

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.8,
      },
    },
  }

  return (
    <div className="mt-20 w-full animate-appear opacity-0">
      <div className="flex flex-row items-center gap-4">
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
        className={`relative mt-10 grid w-full min-w-full grid-cols-8 items-center justify-center gap-10`}
      >
        {(isSelected.length ? selectedSkills : favSkills).map((item) => (
          <div
            key={item.id}
            className={`group aspect-square w-full rounded-md bg-gradient-to-br from-teal-300 via-pink-600 to-orange-500 p-0.5  transition-all duration-500 ease-in-out`}
          >
            <div className="flex h-full w-full flex-col gap-4 rounded-md bg-[#000] p-6 group-hover:bg-teal-300/10">
              <p className="text-sm font-light tracking-tight">{item.domain}</p>
              <div className="h-1 w-full rounded-full bg-teal-100" />
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsBlock
