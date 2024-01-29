//@ts-nocheck

import { ImageSVG } from '@/components/Icons/Icons'
import Link from 'next/link'

export type ButtonProps = {
  title: string
  icon?: string
  href?: string
  className?: string
  onClick?: () => void
}

const Button = ({ title, icon, className, href, onClick }: ButtonProps) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={`flex flex-row items-center justify-center gap-3 rounded-full border border-transparent bg-gradient-to-br from-teal-300 via-pink-400 to-orange-500 bg-clip-border hover:cursor-pointer ${className}`}
          onClick={onClick}
        >
          <div className="flex flex-row items-center justify-center gap-3 rounded-full bg-black-dark px-4 py-2 sm:px-6 sm:py-3">
            <h5>{title}</h5>
            {icon && ImageSVG[icon]}
          </div>
        </Link>
      ) : (
        <button
          className={`flex flex-row items-center justify-center gap-3 rounded-full border border-transparent bg-gradient-to-br from-teal-300 via-pink-400 to-orange-500 bg-clip-border hover:cursor-pointer ${className}`}
          onClick={onClick}
        >
          <div className="flex flex-row items-center justify-center gap-3 rounded-full bg-black-dark px-4 py-2 sm:px-6 sm:py-3">
            <h5>{title}</h5>
            {icon && ImageSVG[icon]}
          </div>
        </button>
      )}
    </>
  )
}

export default Button
