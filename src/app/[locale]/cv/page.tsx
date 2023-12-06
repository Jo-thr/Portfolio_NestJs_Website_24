import Heading from '@/components/Heading/Heading'
import { getDictionary } from '@/hooks/getDictionary'

const CVPage = async ({
  params: { locale },
}: {
  params: { locale: 'en' | 'fr' }
}) => {
  const dictionary = await getDictionary(locale)
  const data = dictionary.cvPage
  return (
    <div className="relative flex h-screen w-full items-center justify-center ">
      <Heading
        title={data.mainTitle}
        description={data.mainDesc}
        className="absolute top-10 px-20"
      />
    </div>
  )
}

export default CVPage
