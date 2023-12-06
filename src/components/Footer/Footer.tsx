import Link from 'next/link'

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
      url: string
    }
    copyright: string
  }
}

const Footer = ({ data }: FooterProps) => {
  return (
    <footer className="relative z-50 flex flex-col items-center gap-40 bg-orange-300 px-60 py-40 text-black-base">
      <div className="flex w-full flex-row justify-between text-lg font-light">
        <div className="flex flex-col">
          <h3>{data.adressTitle}</h3>
          <div className="mt-14 flex flex-col gap-4">
            <span>{data.adress.city}</span>
            <span>{data.adress.area}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h3>{data.linksTitle}</h3>
          <div className="mt-14 grid grid-cols-2 gap-4 gap-x-20">
            {data.links.map((link) => (
              <Link href={link.link} key={link.id}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h3>{data.socialsTitle}</h3>
          <div className="mt-14 grid grid-cols-2 gap-4 gap-x-20">
            {data.socials.map((link) => (
              <Link href={link.link} key={link.id}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h3>{data.contactTitle}</h3>
          <Link href={data.contact.url} className="mt-14 flex flex-col gap-4">
            {data.contact.title}
          </Link>
        </div>
      </div>
      <div className="text-black-base/20">{data.copyright}</div>
    </footer>
  )
}

export default Footer
