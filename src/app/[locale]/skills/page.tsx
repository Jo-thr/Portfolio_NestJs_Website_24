import Heading from '@/components/Heading/Heading'
import SkillsBlock from '@/components/SkillsBlock/SkillsBlock'
import { getDictionary } from '@/hooks/getDictionary'

const SkillsPage = async ({
  params: { locale },
}: {
  params: { locale: 'en' | 'fr' }
}) => {
  const dictionary = await getDictionary(locale)
  const data = dictionary.skillPage
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center ">
      <Heading
        title={data.mainTitle}
        description={data.mainDesc}
        className="relative mt-10 px-20"
      />
      <SkillsBlock data={data} />
    </div>
  )
}

export default SkillsPage
