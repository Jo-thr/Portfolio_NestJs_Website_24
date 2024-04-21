'use client'

import Tag from '@/components/Tag/Tag'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

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

  const ref = useRef(null)
  const isInView = useInView(ref)
  const animContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1.3,
        staggerChildren: 0.2,
      },
    },
  }

  const animItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  return (
    <div className="-mt-6 w-full animate-appear opacity-0 sm:mt-20">
      <div className="flex flex-wrap items-center gap-2 sm:flex-row sm:gap-3">
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

      <motion.ul
        variants={animContainer}
        initial="hidden"
        animate="visible"
        className={`relative mt-10 grid w-full min-w-full grid-cols-3 items-center justify-center gap-4 sm:grid-cols-8 sm:gap-10`}
      >
        {(isSelected.length ? selectedSkills : favSkills).map((item) => (
          <motion.li
            ref={ref}
            variants={animItem}
            key={item.id}
            className={`group aspect-[9/10] w-full hover:cursor-pointer rounded-md bg-gradient-to-br from-teal-300 via-pink-600 to-orange-500 p-0.5 sm:aspect-square`}
          >
            <div className="flex h-full w-full flex-col gap-3 rounded-md bg-[#000] p-3 group-hover:bg-teal-300/10 sm:gap-3 sm:p-4">
              <p className="whitespace-nowrap text-xs tracking-tighter sm:text-sm">
                {item.domain}
              </p>
              <div className="h-px w-full rounded-full bg-teal-100 min-h-[1px]" />
              <h4 className='uppercase font-inter font-bold leading-5'>{item.name}</h4>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default SkillsBlock
