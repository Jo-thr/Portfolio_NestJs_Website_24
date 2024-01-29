'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface FooterProps {
  data: {
    adressTitle: string
    adress: {
      area: string
      city: string
    }
    linksTitle: string
    links: {
      id: string
      title: string
      link: string
    }[]
    socialsTitle: string
    socials: {
      id: string
      title: string
      link: string
    }[]
    contactTitle: string
    contact: {
      title: string
      contactForm: string
    }
    copyright: string
  }
}

const Footer = ({ data }: FooterProps) => {
  const pathname = usePathname()
  return (
    <footer className="relative z-50 mt-40 flex flex-col items-center gap-20 rounded-t-3xl bg-gradient-to-br from-teal-300 via-pink-400 to-orange-500 px-10 pt-10 pb-10 text-black-base sm:gap-40 sm:px-60 sm:pt-40">
      <div className="flex w-full flex-col justify-between gap-14 font-light sm:flex-row sm:gap-0">
        <div className="flex flex-col">
          <h3>{data.adressTitle}</h3>
          <div className="mt-6 flex flex-col gap-1 font-light text-black-dark/70 sm:mt-14 sm:gap-4">
            <span>{data.adress.city}</span>
            <span>{data.adress.area}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h3>{data.linksTitle}</h3>
          <div className="mt-6 grid gap-1 gap-x-6 sm:mt-14 sm:grid-cols-2 sm:gap-4">
            {data.links.map((link) => (
              <div key={link.id}>
                {pathname.includes(link.link) ? (
                  <div className="relative text-black-dark/40">
                    <div className="absolute -left-3 top-1/2 h-px w-full -rotate-2 bg-black-dark/40" />
                    {link.title}
                  </div>
                ) : (
                  <Link
                    href={link.link}
                    className="font-light text-black-dark/70"
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h3>{data.socialsTitle}</h3>
          <div className="mt-6 grid gap-1 gap-x-10 font-light text-black-dark/70 sm:mt-14 sm:grid-cols-2 sm:gap-4">
            {data.socials.map((link) => (
              <Link href={link.link} key={link.id}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h3>{data.contactTitle}</h3>
          <Link
            href={`mailto:johnjohn.thr@gmail.com?subject=${data.contact.contactForm}`}
            className="mt-6 flex flex-col gap-1 font-light text-black-dark/70 sm:mt-14 sm:gap-4"
          >
            {data.contact.title}
          </Link>
        </div>
      </div>
      <div className="text-xs text-black-dark/70">{data.copyright}</div>
    </footer>
  )
}

export default Footer
