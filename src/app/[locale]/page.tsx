import Summary from 'src/components/Summary/Summary'
import { Locale } from '../../i18n-config'
import { getDictionary } from '@/hooks/getDictionary'

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)
  return (
    <div>
      <Summary dataSummary={dictionary.summary} />
    </div>
  )
}
