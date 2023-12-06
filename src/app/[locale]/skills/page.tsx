import Heading from '@/components/Heading/Heading'
import SkillsBlock from '@/components/SkillsBlock/SkillsBlock'
import SkillListing from '@/components/SkillsListing/SkillListing'
import { getDictionary } from '@/hooks/getDictionary'

const SkillsPage = async ({
  params: { locale },
}: {
  params: { locale: 'en' | 'fr' }
}) => {
  const dictionary = await getDictionary(locale)
  const data = dictionary.skillPage
  return (
    <main className="relative mb-80 flex h-full w-full flex-col items-center justify-center ">
      <Heading title={data.mainTitle} description={data.mainDesc} />
      <SkillListing data={data.listing} />
      <SkillsBlock data={data} />
    </main>
  )
}

export default SkillsPage
