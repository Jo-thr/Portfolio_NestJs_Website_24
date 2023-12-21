import Heading from '@/components/Heading/Heading'
import SelectedWorks from '@/components/Works/SelectedWorks'
import { getDictionary } from '@/hooks/getDictionary'

const WorksPage = async ({
  params: { locale },
}: {
  params: { locale: 'en' | 'fr' }
}) => {
  const dictionary = await getDictionary(locale)
  const data = dictionary.worksPage
  return (
    <div className="relative mb-80 flex h-full w-full flex-col items-center justify-center px-20 ">
      <Heading title={data.mainTitle} description={data.mainDesc} />
      <SelectedWorks data={data} />
    </div>
  )
}

export default WorksPage
