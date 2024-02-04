'use client'

import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

const CursorFollower: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [debouncedCursorPosition] = useDebounce(cursorPosition, 10)

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.pageX, y: e.pageY })
    }

    document.addEventListener('mousemove', updateCursorPosition)

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
    }
  }, [])

  return (
    <div
      id="cursor-follower"
      className="pointer-events-none absolute z-[100] ml-4 mt-4 rounded-md bg-gradient-to-br from-teal-300 via-pink-600 to-orange-500  px-2 py-1 text-xs"
      style={{
        left: `${debouncedCursorPosition.x}px`,
        top: `${debouncedCursorPosition.y}px`,
      }}
    >
      YOU
    </div>
  )
}

export default CursorFollower
