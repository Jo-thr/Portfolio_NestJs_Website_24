import { useState } from 'react'

export interface CardProps {
  title: string
  className?: string
  url?: string
  handleHover: (title: string) => void
}

const Card = ({ title, className, url, handleHover }: CardProps) => {
  return (
    <div
      onMouseEnter={() => handleHover(title)} // Appelle handleHover lors du survol
      onMouseLeave={() => handleHover('')} // Réinitialise isHovering
      className={`${className} flex h-full w-full items-end rounded-2xl bg-black-dark/80 p-10 text-2xl font-bold uppercase text-white-dark backdrop-blur-md transition delay-150 duration-500 ease-in-out hover:cursor-pointer hover:bg-black-dark/40 hover:text-white-base hover:backdrop-blur-sm `}
    >
      {title}
    </div>
  )
}

export default Card
