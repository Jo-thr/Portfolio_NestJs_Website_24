import { ReactNode } from 'react'

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
  return (
    <section
      id={id}
      className={`${className} relative w-full flex-col items-center px-10 py-32 sm:p-40`}
    >
      <div className="relative mb-20">
        <h5 className="absolute z-10 -mt-16 -ml-4 -rotate-3 transform bg-gradient-to-r from-teal-300 via-pink-600 to-orange-500 bg-clip-text font-allison text-5xl text-transparent sm:-mt-12">
          {subtitle}
        </h5>
        <h2 className="font-dm sm:ml-4">{title}</h2>
        <p className="mt-10 w-full sm:w-3/4">{text}</p>
      </div>
      {children}
    </section>
  )
}

export default Section
