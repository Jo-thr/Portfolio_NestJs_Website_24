import HeadingWork from '@/components/Heading/HeadingWork'
import RouterBack from '@/components/RouterBack/RouterBack'
import { getDictionary } from '@/hooks/getDictionary'
import Image from 'next/image'
import Link from 'next/link'

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}) {
  return {
    title: slug,
  }
}

const WorkPage = async ({
  params: { locale, slug },
}: {
  params: { locale: 'en' | 'fr'; slug: string }
}) => {
  const dictionary = await getDictionary(locale)
  const [data] = dictionary.projects.filter((proj) => proj.slug === slug)
  const otherProjects = dictionary.projects.filter((proj) => proj.slug !== slug)

  return (
    <div className="relative mb-40 flex h-full w-full flex-col items-center justify-center sm:px-20 ">
      <RouterBack
        className="fixed -top-[4vh] -right-[12vw] sm:-top-[2vh] sm:right-0"
        icon={'Cross'}
      />
      <div className="relative h-full w-full transform animate-reveal-tb p-10 opacity-0 transition-all ease-in-out sm:p-20">
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
        repo={data.repo}
        front={data.techno.front}
        back={data.techno.back}
        devops={data.techno.devops}
        data={data.techno.data}
        tools={data.techno.tools}
        year={data.year}
        site={data.site}
      />

      <div
        className={`my-20 flex w-full flex-col gap-20 px-10 sm:my-40 sm:grid sm:px-40 ${
          data.projet.length > 2
            ? 'grid-cols-1 px-10 sm:grid-cols-3 sm:px-40'
            : 'grid-cols-1 sm:grid-cols-2'
        }`}
      >
        {data.projet.slice(0, 3).map((item, index) => (
          <div
            key={item.title}
            className={`${
              data.projet.length > 2 && (index === 0 || index === 4)
                ? 'col-span-2 row-span-2 h-full'
                : ' col-span-1 row-span-1'
            } relative col-span-1 aspect-[10/7] w-full rounded-2xl border border-white-dark p-2`}
          >
            <div className="absolute -top-8 left-0 bg-gradient-to-r from-teal-300 via-pink-600 to-orange-500 bg-clip-text text-sm text-transparent">
              {item.title}
            </div>
            <div className="relative h-full w-full overflow-x-hidden overflow-y-scroll rounded-md">
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
        <div className="relative col-span-3 my-20 flex w-full flex-col gap-6">
          <div className="absolute -top-4 -left-4 -rotate-3 bg-gradient-to-r from-teal-300 via-pink-600 to-orange-500 bg-clip-text font-allison text-4xl text-transparent">
            Mission
          </div>
          <p>{data.mission}</p>
          <p>{data.contribution}</p>
        </div>
        {data.projet.slice(3, 10).map((item, index) => (
          <div
            key={item.title}
            className={`${
              data.projet.length > 2 && index === 1
                ? 'col-span-2 row-span-2 h-full'
                : ' col-span-1 row-span-1'
            } relative col-span-1 aspect-[10/7] w-full rounded-2xl border border-white-dark  p-2`}
          >
            <div className="absolute -top-8 left-0 bg-gradient-to-r from-teal-300 via-pink-600 to-orange-500 bg-clip-text text-sm text-transparent">
              {item.title}
            </div>
            <div className="relative h-full w-full overflow-hidden overflow-y-scroll rounded-md">
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

      <div className="mt-20 flex w-full flex-col gap-10 px-10 sm:px-20">
        <div className="relative flex w-full flex-col ">
          <h5 className="absolute z-20 -mt-12 -ml-4 -rotate-3 transform bg-gradient-to-r from-teal-300 via-pink-600 to-orange-500 bg-clip-text font-allison text-5xl text-transparent">
            {dictionary.extraContent.projects}
          </h5>
          <h2 className="relative z-10 font-dm">Collections</h2>
        </div>
        <div className="flex grid-cols-3 flex-col gap-20 sm:grid">
          {otherProjects
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map((proj) => (
              <Link
                href={proj.slug}
                key={proj.id}
                className="relative col-span-1 flex flex-col gap-4 overflow-hidden rounded-xl"
              >
                <div className="relative aspect-video w-full">
                  <Image
                    src={proj.img.cover}
                    alt={proj.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3>{proj.name}</h3>
                <p>{proj.short_description}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default WorkPage
