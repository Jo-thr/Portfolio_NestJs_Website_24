import { X } from 'lucide-react'

export type TagProps = {
  title: string
  isSelected?: string | string[]
  className?: string
  onClick?: () => void
}

const Tag = ({ title, className, isSelected, onClick }: TagProps) => {
  return (
    <button
      className={`${
        isSelected === title &&
        'border-none bg-gradient-to-br !from-teal-300 !via-pink-600 !to-orange-500 bg-clip-border'
      } font-inter flex transform flex-row items-center justify-center gap-3 rounded-full border border-gray-600 px-4 py-2 text-sm transition-all duration-500 ease-in-out hover:cursor-pointer hover:bg-gradient-to-br hover:border-none hover:bg-clip-border from-teal-300/80 via-pink-600/80 to-orange-500/80 sm:text-xs sm:tracking-normal ${className}`}
      onClick={onClick}
    >
      <h5>{title}</h5>
      {isSelected === title && <X width={12} />}
    </button>
  )
}

export default Tag
