'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react'

export type ProjectsProps = {
  id: number
  slug: string
  name: string
  categorie: string
  short_description: string
  description: string
  imgBgColor: string
  imgFirst: string
  color: string
  logo: string
}[]

export type WorksProps = {
  data: {
    mainTitle: string
    mainDesc: string
    tabs: {
      visual: string
      text: string
    }
    projects: ProjectsProps
  }
  className?: string
}

const Works = ({ data, className }: WorksProps) => {
  const [workSelected, setWorkSelected] = useState(1)
  const totalProjects = data.projects.length

  const handleLeftArrowClick = () => {
    setWorkSelected((prev) => (prev === 1 ? totalProjects : prev - 1))
  }

  const handleRightArrowClick = () => {
    setWorkSelected((prev) => (prev === totalProjects ? 1 : prev + 1))
  }

  const handleProjectClick = (projectId: number) => {
    setWorkSelected(projectId)
  }

  return (
    <>
      {data.projects.map((proj) => (
        <div
          key={proj.id}
          className={`relative z-20 mt-20 flex h-full w-full flex-row ${className} ${
            workSelected != proj.id && 'hidden'
          }`}
        >
          <ArrowLeftCircle
            onClick={handleLeftArrowClick}
            className="absolute -left-12 top-1/2 z-30 h-8 w-8 hover:cursor-pointer"
          />
          <div className="relative top-36 h-full w-2/5 pr-40">
            <div
              className={`flex h-full w-full transform flex-row items-center justify-end gap-12 text-right font-dm text-5xl font-bold tracking-tight !text-white-base text-white-dark/50 transition-all duration-500 ease-in-out hover:cursor-pointer ${
                workSelected != proj.id && 'hidden'
              }`}
              onClick={() => setWorkSelected(proj.id)}
            >
              {proj.name}
            </div>
            <div
              className="mt-[6%] mb-[14%] ml-[10%] -mr-40 h-0.5 w-full"
              style={{ backgroundColor: `${proj.color}` }}
            />
            <p className="ml-[10%] -mr-32 text-sm font-light leading-7 tracking-wide">
              {proj.description}
            </p>
          </div>
          <div
            className={`relative aspect-video h-auto w-3/5 rounded-md bg-amber-50 bg-gradient-to-br from-teal-300 via-pink-600 to-orange-500 p-0.5`}
          >
            <div className="h-full w-full rounded-md bg-black-base p-14">
              <div className="relative h-full w-full">
                <Image
                  src={proj.imgFirst}
                  alt={proj.imgFirst}
                  style={{ objectFit: 'contain' }}
                  fill
                />
              </div>
            </div>
            <div
              style={{ backgroundColor: `${proj.color}` }}
              className={`absolute top-[14%] z-20 aspect-square w-2/12 -translate-x-2/3 -rotate-3 transform rounded-lg border-2 border-[#000] p-6`}
            >
              <div className="relative h-full w-full mix-blend-luminosity ">
                <Image
                  src={proj.logo}
                  alt={proj.logo}
                  style={{ objectFit: 'contain' }}
                  fill
                  className="rotate-3 "
                />
              </div>
            </div>
          </div>
          <ArrowRightCircle
            onClick={handleRightArrowClick}
            className="absolute -right-12 top-1/2 z-30 h-8 w-8 hover:cursor-pointer"
          />
        </div>
      ))}

      <div className="mt-10 flex items-center justify-center">
        {data.projects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => handleProjectClick(proj.id)}
            className={`mx-2 origin-center transform cursor-pointer rounded-full transition-all duration-300 ease-in-out ${
              workSelected === proj.id
                ? 'h-2 w-8 bg-gradient-to-br from-teal-300 via-pink-600 to-orange-500'
                : 'h-2 w-2 bg-white-dark'
            }`}
          ></div>
        ))}
      </div>
    </>
  )
}

export default Works
