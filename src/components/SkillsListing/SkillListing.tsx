import { Quote, X } from 'lucide-react'

export type SkillListingProps = {
  data: {
    id: string
    title: string
    phrase: string
  }[]
  className?: string
}

const SkillListing = ({ data, className }: SkillListingProps) => {
  return (
    <div className="mb-40 flex w-full animate-appear px-60 opacity-0">
      <div className="flex w-full flex-col items-center gap-40">
        {data.map((listing) => (
          <div key={listing.id} className="group flex w-full flex-row gap-20">
            <h2 className="relative w-1/2 text-right text-white-medium hover:text-white-light hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.3)]">
              {listing.title.split('').map((letter, index) => (
                <span
                  key={index}
                  className="hover:cursor-default hover:text-white-base hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.8)]"
                >
                  {letter}
                </span>
              ))}
            </h2>
            <div className="flex w-1/2 transform flex-row gap-1 text-lg text-teal-300 opacity-0 transition-all duration-700 ease-in-out hover:!animate-none group-hover:animate-pulse group-hover:opacity-100">
              <Quote width={14} className="fill-teal-300 stroke-teal-300 " />
              <p className="cursor-default hover:underline">{listing.phrase}</p>
              <Quote
                width={14}
                className="mt-1 fill-teal-300 stroke-teal-300 "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillListing
