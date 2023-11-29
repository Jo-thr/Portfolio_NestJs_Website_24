// @ts-nocheck

import { useLocale } from 'next-intl'
import contents from '@/messages/contents'

const useContent = () => {
  const locale = useLocale()

  const dataSummary = contents[locale].summary

  return {
    dataSummary,
  }
}
export default useContent
