import HeadingWork from '@/components/Heading/HeadingWork'
import RouterBack from '@/components/RouterBack/RouterBack'
import { getDictionary } from '@/hooks/getDictionary'
import Image from 'next/image'

const WorkPage = async ({
  params: { locale, slug },
}: {
  params: { locale: 'en' | 'fr'; slug: string }
}) => {
  const dictionary = await getDictionary(locale)
  const [data] = dictionary.worksPage.projects.filter(
    (proj) => proj.slug === slug
  )

  return (
    <div className="relative mb-80 flex h-full w-full flex-col items-center justify-center px-20 ">
      <RouterBack className="fixed -top-4 right-0" icon={'Cross'} />
      <div className="relative h-full w-full transform animate-reveal-tb p-20 opacity-0 transition-all ease-in-out">
        <div className="relative z-50 aspect-[16/8] h-full w-full overflow-hidden rounded-xl bg-white-dark">
          <Image
            src={data.img.cover}
            alt={data.name}
            style={{ objectFit: 'cover' }}
            fill
          />
        </div>
      </div>

      <HeadingWork
        title={data.name}
        description={data.description}
        poste={data.poste}
        front={data.techno.front}
        back={data.techno.back}
        devops={data.techno.devops}
        data={data.techno.data}
        tools={data.techno.tools}
        year={data.year}
        site={data.site}
      />

      <div
        className={`mt-40 grid w-full gap-20 px-40 ${
          data.projet.length > 2 ? 'grid-cols-3 px-40' : ' grid-cols-2'
        }`}
      >
        {data.projet.slice(0, 3).map((item, index) => (
          <div
            key={item.title}
            className={`${
              data.projet.length > 2 && (index === 0 || index === 4)
                ? 'col-span-2 row-span-2 h-full'
                : ' col-span-1 row-span-1'
            } relative col-span-1 aspect-[10/7] w-full rounded-2xl border border-white-light p-2`}
          >
            <div className="absolute -top-8 left-0 bg-gradient-to-r from-teal-300 via-pink-600 to-orange-500 bg-clip-text text-sm text-transparent">
              {item.title}
            </div>
            <div className="relative h-full w-full overflow-x-hidden overflow-y-scroll rounded-xl border border-white-light">
              <Image
                src={item.img}
                alt={item.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        ))}
        <div className="relative col-span-3 my-20 flex w-full flex-col gap-10">
          <div className="absolute -top-10 -left-4 -rotate-3 bg-gradient-to-r from-teal-300 via-pink-600 to-orange-500 bg-clip-text font-allison text-4xl text-transparent">
            Mission
          </div>
          <span>{data.mission}</span>
          <span>{data.contribution}</span>
        </div>
        {data.projet.slice(3, 10).map((item, index) => (
          <div
            key={item.title}
            className={`${
              data.projet.length > 2 && index === 1
                ? 'col-span-2 row-span-2 h-full'
                : ' col-span-1 row-span-1'
            } relative col-span-1 aspect-[10/7] w-full rounded-2xl border border-white-light p-2`}
          >
            <div className="absolute -top-8 left-0 bg-gradient-to-r from-teal-300 via-pink-600 to-orange-500 bg-clip-text text-sm text-transparent">
              {item.title}
            </div>
            <div className="relative h-full w-full overflow-hidden overflow-y-scroll rounded-xl border border-white-light">
              <Image
                src={item.img}
                alt={item.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkPage
