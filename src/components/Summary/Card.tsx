import { useState } from 'react'

export enum ElementPositionType {
  'TOP-LEFT' = 'TOP-LEFT',
  TOP = 'TOP',
  'TOP-RIGHT' = 'TOP-RIGHT',
  RIGHT = 'RIGHT',
  'BOTTOM-RIGHT' = 'BOTTOM-RIGHT',
  BOTTOM = 'BOTTOM',
  'BOTTOM-LEFT' = 'BOTTOM-LEFT',
  LEFT = 'LEFT',
}
export interface CardProps {
  title: string
  className?: string
  elementPosition?: ElementPositionType
  url?: string
  handleHover: (title: string) => void
}

const Card = ({
  title,
  className,
  url,
  elementPosition,
  handleHover,
}: CardProps) => {
  return (
    <div
      onMouseEnter={() => handleHover(title)}
      onMouseLeave={() => handleHover('')}
      className={`${className} group flex h-full w-full transform items-end rounded-2xl bg-black-dark/80 p-10 text-2xl font-bold uppercase text-white-medium/20 transition-all duration-500 ease-in-out hover:cursor-pointer hover:bg-black-dark/40 hover:text-transparent  hover:backdrop-blur-sm`}
    >
      {title}

      {/* <span className="absolute left-0 top-0 h-0 w-0 border-t-2 border-dotted border-blue-base transition-all duration-200  ease-in-out group-hover:w-full"></span> */}
      {/* <span className="absolute right-0 top-0 h-0 w-0 border-r-2 border-dotted border-blue-base transition-all delay-150 duration-200 ease-in-out group-hover:h-full"></span> */}
      {/* <span className="absolute bottom-0 right-0 h-0 w-0 border-b-2 border-dotted border-blue-base transition-all delay-300  duration-200 ease-in-out group-hover:w-full"></span> */}
      {/* <span className="absolute bottom-0 left-0 h-0 w-0 border-l-2 border-dotted border-blue-base transition-all delay-500  duration-200 ease-in-out group-hover:h-full"></span> */}
    </div>
  )
}

export default Card
