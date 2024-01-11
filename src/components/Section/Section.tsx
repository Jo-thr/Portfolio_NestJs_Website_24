import { ReactNode } from 'react'

export interface SectionProps {
  children: ReactNode
  className?: string
  subtitle?: string
  title?: string
  text?: string
}

const Section = ({
  className,
  children,
  subtitle,
  title,
  text,
}: SectionProps) => {
  return (
    <section
      className={`${className} relative w-full flex-col items-center p-40`}
    >
      <div className="relative mb-20">
        <h5 className="absolute z-10 -mt-12 -ml-4 -rotate-3 transform bg-gradient-to-r from-teal-300 via-pink-600 to-orange-500 bg-clip-text font-allison text-5xl text-transparent">
          {subtitle}
        </h5>
        <h2 className="ml-4 font-dm">{title}</h2>
        <p className="mt-10 w-3/4 font-poppins font-light">{text}</p>
      </div>
      {children}
    </section>
  )
}

export default Section
