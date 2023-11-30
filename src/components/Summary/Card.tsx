import Link from 'next/link'
import { useParams } from 'next/navigation'
export interface CardProps {
  title: string
  className?: string
  url?: string
  handleHover: (title: string) => void
}

const Card = ({ title, className, url, handleHover }: CardProps) => {
  const locale = useParams()?.locale
  return (
    <>
      {url ? (
        <Link
          href={locale + url}
          onMouseEnter={() => handleHover(title)}
          onMouseLeave={() => handleHover('')}
          className={`${className} group flex h-full w-full transform items-end rounded-2xl bg-black-dark/80 p-10 text-2xl font-bold uppercase text-white-medium/20 transition-all duration-500 ease-in-out hover:cursor-pointer hover:bg-black-dark/40 hover:text-transparent  hover:backdrop-blur-sm`}
        >
          {title}
        </Link>
      ) : (
        <div
          onMouseEnter={() => handleHover(title)}
          onMouseLeave={() => handleHover('')}
          className={`${className} group flex h-full w-full transform items-end rounded-2xl bg-black-dark/80 p-10 text-2xl font-bold uppercase text-white-medium/20 transition-all duration-500 ease-in-out hover:cursor-pointer hover:bg-black-dark/40 hover:text-transparent  hover:backdrop-blur-sm`}
        >
          {title}
        </div>
      )}
    </>
  )
}

export default Card
