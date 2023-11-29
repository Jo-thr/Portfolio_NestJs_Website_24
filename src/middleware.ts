import createMiddleware from 'next-intl/middleware'
import type { NextRequest } from 'next/server'
import { i18n } from '@/i18n-config'

export default async function middleware(request: NextRequest) {

  const nextIntlMiddleware = createMiddleware({
    locales: [...i18n.locales],
    defaultLocale: i18n.defaultLocale,
    localeDetection: false,
  })

  return nextIntlMiddleware(request)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|admin|sitemap.xml|sitemap-0.xml|robots.txt|media).*)',
  ],
}
