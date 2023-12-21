import Heading from '@/components/Heading/Heading'
import RouterBack from '@/components/RouterBack/RouterBack'
import { getDictionary } from '@/hooks/getDictionary'

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
      <RouterBack className="absolute top-0 left-0" />
      <Heading title={data.name} description={data.description} />
    </div>
  )
}

export default WorkPage
