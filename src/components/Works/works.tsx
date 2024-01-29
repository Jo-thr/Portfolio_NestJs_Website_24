'use client'
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Button from '../Button/Button'

export type WorksProps = {
  content: any
  projects: {
    id: number
    slug: string
    name: string

    poste: string
    year: string
    site?: string
    techno: {
      front?: string
      back?: string
      data?: string
      devops?: string
      tools?: string
    }
    mission: string
    short_description: string
    description: string
    contribution?: string

    img: {
      color: string
      logo: StaticImageData
      cover: StaticImageData
    }
  }[]
  className?: string
}

const Works = ({ projects, content, className }: WorksProps) => {
  const [workSelected, setWorkSelected] = useState(1)
  const totalProjects = projects.length

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
      {projects.map((proj) => (
        <div
          key={proj.id}
          className={`relative z-20 mt-40 flex h-full w-full flex-row ${className} ${
            workSelected != proj.id && 'hidden'
          }`}
        >
          <ArrowLeftCircle
            onClick={handleLeftArrowClick}
            className="absolute -left-12 top-1/2 z-30 h-8 w-8 stroke-white-dark   hover:cursor-pointer"
          />
          <div className="relative top-24 h-full w-2/5 pr-40">
            <div
              className={`flex h-full w-full transform flex-row items-center justify-end gap-12 text-right font-dm text-5xl font-bold !text-white-base text-white-dark/50 transition-all duration-500 ease-in-out hover:cursor-pointer ${
                workSelected != proj.id && 'hidden'
              }`}
              onClick={() => setWorkSelected(proj.id)}
            >
              {proj.name}
            </div>
            <div
              className="mt-[6%] mb-[14%] ml-[10%] -mr-40 h-0.5 w-full"
              style={{ backgroundColor: `${proj.img.color}` }}
            />
            <p className="ml-[10%] -mr-32 text-sm leading-7">
              {proj.description}
            </p>
            <Button
              title={content.seeProject}
              href={`works/${proj.slug}`}
              className="relative ml-auto -mr-20 mt-6 w-max"
            />
          </div>
          <div
            className={`relative aspect-video h-auto w-3/5 rounded-md p-0.5`}
          >
            <Link href={`works/${proj.slug}`}>
              <div className="relative h-full w-full overflow-hidden rounded-md">
                <Image
                  src={proj.img.cover}
                  alt={proj.name}
                  style={{ objectFit: 'cover' }}
                  fill
                />
              </div>
            </Link>
            <div
              style={{ backgroundColor: `${proj.img.color}` }}
              className={`absolute top-[8%] z-20 aspect-square w-2/12 -translate-x-2/3 -rotate-3 transform rounded-lg border-2 border-[#000] p-6`}
            >
              <div className="relative h-full w-full mix-blend-luminosity ">
                <Image
                  src={proj.img.logo}
                  alt={proj.name}
                  style={{ objectFit: 'contain' }}
                  fill
                  className="rotate-3 "
                />
              </div>
            </div>
          </div>
          <ArrowRightCircle
            onClick={handleRightArrowClick}
            className="absolute -right-12 top-1/2 z-30 h-8 w-8 stroke-white-dark hover:cursor-pointer"
          />
        </div>
      ))}

      <div className="mt-10 flex items-center justify-center">
        {projects.map((proj) => (
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
