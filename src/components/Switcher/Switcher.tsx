'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next-intl/client'
import { useTransition } from 'react'

const Switcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const locale = useLocale()

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value
    startTransition(() => {
      router.replace(pathname, { locale: lang })
    })
  }

  return (
    <div className="relative flex flex-row items-center">
      <select
        name="language"
        id="language"
        defaultValue={locale}
        onChange={handleSelect}
        className="bg-black text-white rounded py-1 px-2 outline-none"
      >
        {['en', 'fr'].map((cur) => (
          <option key={cur} value={cur}>
            prout
          </option>
        ))}
      </select>
    </div>
  )
}

export default Switcher
