'use client'
import { usePathname } from 'next/navigation'

const Gradient = () => {
  const pathname = usePathname()
  return (
    <div
      className={`${
        (pathname === '/' || pathname === '/en') && 'hidden'
      } h-full w-full`}
    >
      <div className="fixed top-0 z-10 h-60 w-full bg-gradient-to-b from-black-base to-transparent" />
      <div className="fixed bottom-0 z-10 h-80 w-full bg-gradient-to-t from-black-base via-black-base to-transparent" />
    </div>
  )
}

export default Gradient
