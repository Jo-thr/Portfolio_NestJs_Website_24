'use client'

import { ArrowLeftCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export interface RouterBackProps {
  className: string
}

const RouterBack = ({ className }: RouterBackProps) => {
  const router = useRouter()
  const handleBack = () => {
    router.back()
    // Faites défiler vers le haut de la page après la navigation
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <button
      onClick={handleBack}
      className={`${className} z-50 m-10 rounded-full stroke-white-base p-10`}
    >
      <ArrowLeftCircle />
    </button>
  )
}

export default RouterBack
