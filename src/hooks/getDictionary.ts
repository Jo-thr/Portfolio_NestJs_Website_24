import { Locale } from '@/i18n-config'
import 'server-only'
import FR from '@/dictionaries/fr'
import EN from '@/dictionaries/en'

const dictionaries = {
  en: () => EN,
  fr: () => FR,
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.fr()
