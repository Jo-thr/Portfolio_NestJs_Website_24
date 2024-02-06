'use client'
import { useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'

export interface SectionProps {
  children: ReactNode
  className?: string
  subtitle?: string
  id?: string
  title?: string
  text?: string
}

const Section = ({
  className,
  children,
  subtitle,
  title,
  id,
  text,
}: SectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section
      ref={ref}
      id={id}
      className={`${className} relative w-full flex-col items-center px-10 py-32 sm:p-40`}
      style={{
        transform: isInView ? 'none' : 'translateY(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <div className="relative mb-20">
        <h5 className="absolute z-10 -mt-16 -ml-4 -rotate-3 transform bg-gradient-to-r from-teal-300 via-pink-600 to-orange-500 bg-clip-text font-allison text-5xl text-transparent sm:-mt-12">
          {subtitle}
        </h5>
        <h2 className="font-dm sm:ml-4">{title}</h2>
        <p
          className="mt-10 w-full sm:w-3/4"
          style={{
            transform: isInView ? 'none' : 'translateY(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          {text}
        </p>
      </div>
      {children}
    </section>
  )
}

export default Section
