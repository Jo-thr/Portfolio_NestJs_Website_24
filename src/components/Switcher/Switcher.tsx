'use client'

import React from 'react'
import {
  useRouter,
  useParams,
  useSelectedLayoutSegments,
} from 'next/navigation'
import { ImageSVG } from '@/components/Icons/Icons'

const ChangeLocale = () => {
  const router = useRouter()
  const params = useParams()
  const urlSegments = useSelectedLayoutSegments()

  const handleLocaleChange = (newLocale: string) => {
    router.push(`/${newLocale}/${urlSegments.join('/')}`)
  }

  return (
    <div className="flex flex-row items-center gap-2 font-koulen text-lg">
      {ImageSVG['GLOBE']}
      {params.locale === 'fr' ? (
        <button onClick={() => handleLocaleChange('en')}>Francais</button>
      ) : (
        <button onClick={() => handleLocaleChange('fr')}>English</button>
      )}
    </div>
  )
}

export default ChangeLocale
