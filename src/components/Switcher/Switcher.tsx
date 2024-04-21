'use client'

import React from 'react'
import {
  useRouter,
  useParams,
  useSelectedLayoutSegments,
} from 'next/navigation'
import { Globe } from 'lucide-react'

export interface SwitchMinProps {
  className: string
}

const Switcher = ({ className }: SwitchMinProps) => {
  const locale = useParams()?.locale
  const router = useRouter()
  const urlSegments = useSelectedLayoutSegments()

  const handleLocaleChange = (newLocale: string) => {
    router.push(`/${newLocale}/${urlSegments.join('/')}`)
  }

  return (
    <div className={`${className}`}>
      {locale === 'fr' ? (
        <button
          onClick={() => handleLocaleChange('en')}
          className="flex flex-row gap-2 font-inter items-center"
        >
          <Globe className="stroke-white-base " />
          FR
        </button>
      ) : (
        <button
          onClick={() => handleLocaleChange('fr')}
          className="flex flex-row gap-2 font-inter items-center"
        >
          <Globe className="stroke-white-base " />
          EN
        </button>
      )}
    </div>
  )
}

export default Switcher
