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
          className={`flex flex-row items-center justify-center gap-3 rounded-full border px-6 py-3 hover:cursor-pointer ${className}`}
          onClick={onClick}
        >
          <h5>{title}</h5>
          {icon && ImageSVG[icon]}
        </Link>
      ) : (
        <button
          className={`flex flex-row items-center justify-center gap-3 rounded-full border px-6 py-3 hover:cursor-pointer ${className}`}
          onClick={onClick}
        >
          <h5>{title}</h5>
          {icon && ImageSVG[icon]}
        </button>
      )}
    </>
  )
}

export default Button
