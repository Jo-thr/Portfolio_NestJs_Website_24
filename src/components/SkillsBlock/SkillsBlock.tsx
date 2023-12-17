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
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className={`relative grid w-full min-w-full grid-cols-6 items-center justify-center gap-20`}
      >
        {(isSelected.length ? selectedSkills : favSkills).map((item) => (
          <motion.div
            variants={cardVariants}
            key={item.id}
            className={`flex aspect-square w-full flex-col gap-6 rounded-md border-4 border-teal-200  p-8 transition-all duration-500 ease-in-out hover:animate-pulse hover:bg-teal-300/5 `}
          >
            <p className="text-lg">{item.domain}</p>
            <div className="h-1 w-full rounded-full bg-teal-100" />
            <h3>{item.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default SkillsBlock
