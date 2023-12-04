import Link from 'next/link'
import {
  useParams,
  useRouter,
  useSelectedLayoutSegments,
} from 'next/navigation'
import LogoWhite from '@public/images/Logo-white.svg'
import { Globe } from 'lucide-react'
import Image from 'next/image'
export interface CardProps {
  title: string
  className?: string
  url?: string
  logo?: boolean
  switchLang?: boolean
  handleHover: (title: string) => void
}

const Card = ({
  title,
  className,
  url,
  logo,
  switchLang,
  handleHover,
}: CardProps) => {
  const locale = useParams()?.locale

  const router = useRouter()
  const urlSegments = useSelectedLayoutSegments()
  const handleLocaleChange = (newLocale: string) => {
    router.push(`/${newLocale}/${urlSegments.join('/')}`)
  }
  return (
    <>
      {url ? (
        <div className={`${className} h-full w-full`}>
          <Link
            href={locale + url}
            onMouseEnter={() => handleHover(title)}
            onMouseLeave={() => handleHover('')}
            className={`group flex h-full w-full transform items-end rounded-2xl bg-black-dark/80 p-10 text-2xl font-bold uppercase text-white-medium/20 transition-all duration-500 ease-in-out hover:cursor-pointer hover:bg-black-dark/40 hover:text-transparent  hover:backdrop-blur-sm`}
          >
            {title}
            {logo && (
              <Link href={`/` + locale}>
                <div className="absolute top-0 left-0 z-20 animate-appear rounded-br-2xl bg-black-base p-6 opacity-0">
                  <Image
                    src={LogoWhite}
                    alt={'Logo'}
                    className="transition-all duration-300 ease-in-out hover:opacity-40"
                  />
                </div>
                <div className="absolute top-0 left-[5.15rem] z-20 h-20 w-5 animate-appear bg-black-base opacity-0">
                  <div className=" h-full w-full transform rounded-tl-2xl bg-black-dark/80 transition-all duration-500 ease-in-out group-hover:bg-black-dark/40 group-hover:backdrop-blur-sm" />
                </div>
                <div className="absolute top-[5.15rem] left-0 z-20 h-5 w-20 animate-appear bg-black-base opacity-0">
                  <div className=" h-full w-full transform rounded-tl-2xl bg-black-dark/80 transition-all duration-500 ease-in-out group-hover:bg-black-dark/40 group-hover:backdrop-blur-sm" />
                </div>
              </Link>
            )}
            {switchLang && (
              <>
                <div className="absolute bottom-0 right-[4.74rem] z-20 h-20 w-5 animate-appear bg-black-base opacity-0">
                  <div className=" h-full w-full transform rounded-br-2xl bg-black-dark/80 transition-all duration-500 ease-in-out group-hover:bg-black-dark/40 group-hover:backdrop-blur-sm" />
                </div>
                <div className="absolute bottom-[6.24rem] right-0 z-20 h-5 w-20 animate-appear bg-black-base opacity-0 ">
                  <div className=" h-full w-full transform rounded-br-2xl bg-black-dark/80 transition-all duration-500 ease-in-out group-hover:bg-black-dark/40 group-hover:backdrop-blur-sm" />
                </div>
              </>
            )}
          </Link>
          {switchLang && (
            <div>
              {locale === 'fr' ? (
                <button onClick={() => handleLocaleChange('en')}>
                  <div className="absolute bottom-0 right-0 z-20 animate-appear rounded-tl-2xl bg-black-base p-6 opacity-0">
                    <Globe className="stroke-white-base " />
                    FR
                  </div>
                </button>
              ) : (
                <button onClick={() => handleLocaleChange('fr')}>
                  <div className="absolute bottom-0 right-0 z-20 animate-appear rounded-tl-2xl bg-black-base p-6 opacity-0">
                    <Globe className="stroke-white-base " />
                    EN
                  </div>
                </button>
              )}
            </div>
          )}
        </div>
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
