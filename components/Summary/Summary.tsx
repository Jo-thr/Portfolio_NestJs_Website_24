import { SetStateAction, useState } from 'react'
import Card from './Card'

const Summary = () => {
  const [isHovering, setIsHovering] = useState('')
  const handleHover = (title: string) => {
    setIsHovering(title)
  }
  return (
    <div className="relative flex h-screen w-screen p-10">
      <div className="relative z-10 grid w-full grid-cols-8 grid-rows-4 gap-10">
        <Card
          title="Skills"
          className="col-span-2 row-span-2"
          handleHover={handleHover}
        />
        <Card
          title="About me"
          className="col-span-5 row-span-2"
          handleHover={handleHover}
        />
        <Card
          title="CV"
          className="col-span-1 row-span-2"
          handleHover={handleHover}
        />
        <Card
          title="Selected Works"
          className="col-span-6 row-span-2"
          handleHover={handleHover}
        />
        <Card
          title="Socials network"
          className="col-span-2 row-span-1"
          handleHover={handleHover}
        />
        <Card
          title="Contact"
          className="col-span-2 row-span-1"
          handleHover={handleHover}
        />
      </div>
      <div
        className={`transform transition-all duration-300 ease-in-out ${
          isHovering !== ''
            ? '-translate-y-[52%] opacity-100'
            : 'translate-y-0 opacity-0'
        } absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-center text-[18rem] font-black uppercase leading-[14rem]`}
      >
        {isHovering}
      </div>
    </div>
  )
}

export default Summary
