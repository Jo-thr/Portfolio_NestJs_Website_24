import { i18n } from '@/i18n-config'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname

  // Check if the default locale is in the pathname
  if (
    pathname.startsWith(`/${i18n.defaultLocale}/`) ||
    pathname === `/${i18n.defaultLocale}`
  ) {
    // e.g. incoming request is /en/about
    // The new URL is now /about
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${i18n.defaultLocale}`,
          pathname === `/${i18n.defaultLocale}` ? '/' : ''
        ),
        request.url
      )
    )
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    // We are on the default locale
    // Rewrite so Next.js understands

    // e.g. incoming request is /about
    // Tell Next.js it should pretend it's /en/about
    return NextResponse.rewrite(
      new URL(`/${i18n.defaultLocale}${pathname}`, request.url)
    )
  }
}

export const config = {
  // Run the middleware only on the following paths
  matcher: '/(|fr|en)/(.*)',
}
