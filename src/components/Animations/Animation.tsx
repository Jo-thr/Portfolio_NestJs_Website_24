'use client'

import { motion, useAnimation } from 'framer-motion'
import { forwardRef, ReactNode, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import style from './Animation.module.css'

export enum OrigineType {
  FIXE = 'FIXE',
  TOP = 'TOP',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  BOTTOM = 'BOTTOM',
}

export enum DelayType {
  NUL = 'NUL',
  FAST = 'FAST',
  NORMAL = 'NORMAL',
  SLOW = 'SLOW',
}

export interface AnimProps {
  children: ReactNode
  className?: string
  origine?: OrigineType
  delay?: DelayType
}

const Opacity = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
}

const Animation = forwardRef<HTMLElement, AnimProps>((props: AnimProps) => {
  const {
    children,
    className,
    delay = DelayType.NUL,
    origine = OrigineType.FIXE,
  } = props

  const controls = useAnimation()
  const [refInView, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  const AnimClasses = (delay: DelayType, origine: OrigineType) => `
    ${delay === DelayType.NUL && inView && ``}
    ${delay === DelayType.FAST && inView && 'delay-200'}
    ${delay === DelayType.NORMAL && inView && 'delay-500'}
    ${delay === DelayType.SLOW && inView && 'delay-[700ms]'}

    ${origine === OrigineType.FIXE && inView && `${style.fixe}`}
    ${origine === OrigineType.TOP && inView && `${style.fromTop}`}
    ${origine === OrigineType.LEFT && inView && `${style.fromLeft}`}
    ${origine === OrigineType.RIGHT && inView && `${style.fromRight}`}
    ${origine === OrigineType.BOTTOM && inView && `${style.fromBottom}`}

`

  return (
    <>
      <motion.div
        ref={refInView}
        animate={controls}
        initial={'hidden'}
        variants={Opacity}
        className={`
          ${className}
          ${AnimClasses(delay, origine)}
        `}
      >
        {children}
      </motion.div>
    </>
  )
})

export default Animation
