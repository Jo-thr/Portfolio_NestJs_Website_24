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
        'border-orange-300 bg-orange-300/30 text-orange-300'
      } flex transform flex-row items-center justify-center gap-3 rounded-full border px-6 py-3 transition-all duration-500 ease-in-out hover:cursor-pointer ${className}`}
      onClick={onClick}
    >
      <h5>{title}</h5>
      {isSelected === title && <X width={14} />}
    </button>
  )
}

export default Tag
