'use client'

import React from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const Providers = ({
  children,
  locale,
}: {
  children: React.ReactNode
  locale: 'fr' | 'en'
}) => {
  const queryClient = new QueryClient()
  return (
    <NextIntlClientProvider locale={locale}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextIntlClientProvider>
  )
}

export default Providers
