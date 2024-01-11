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
        'border-none bg-gradient-to-r from-teal-300 via-pink-600 to-orange-500 bg-clip-border'
      } flex transform flex-row items-center justify-center gap-3 rounded-full border px-5 py-2 transition-all duration-500 ease-in-out hover:cursor-pointer hover:bg-teal-300/20 ${className}`}
      onClick={onClick}
    >
      <h5>{title}</h5>
      {isSelected === title && <X width={14} />}
    </button>
  )
}

export default Tag
