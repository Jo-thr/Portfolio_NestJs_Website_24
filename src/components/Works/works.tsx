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
          className={`relative z-20 flex h-full w-full flex-col-reverse sm:mt-40 sm:flex-row ${className} ${
            workSelected != proj.id && 'hidden'
          }`}
        >
          <ArrowLeftCircle
            onClick={handleLeftArrowClick}
            className="absolute top-1 z-30 h-6 w-6 stroke-white-dark hover:cursor-pointer sm:-left-12 sm:top-1/2 sm:h-8 sm:w-8"
          />
          <div className="relative h-full w-full sm:top-24 sm:w-2/5 sm:pr-40">
            <div
              className={`flex h-full w-full transform flex-row items-center justify-center gap-12 font-dm text-2xl font-bold !text-white-base text-white-dark/50 transition-all duration-500 ease-in-out hover:cursor-pointer sm:justify-end sm:text-right sm:text-5xl ${
                workSelected != proj.id && 'hidden'
              }`}
              onClick={() => setWorkSelected(proj.id)}
            >
              {proj.name}
            </div>
            <div
              className="mt-[6%] mb-[10%] h-0.5 w-full max-w-full sm:mb-[14%] sm:ml-[10%] sm:-mr-40"
              style={{ backgroundColor: `${proj.img.color}` }}
            />
            <div
              className={`relative mb-6 aspect-video h-auto w-full rounded-md p-0.5 sm:hidden sm:w-3/5`}
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
            </div>
            <p className="hidden text-sm leading-7 sm:-mr-32 sm:ml-[10%] sm:block">
              {proj.description}
            </p>
            <p className="text-center text-xs sm:-mr-32 sm:ml-[10%] sm:hidden sm:leading-7">
              {proj.short_description}
            </p>
            <Button
              title={content.seeProject}
              href={`works/${proj.slug}`}
              className="relative ml-auto mr-auto mt-6 w-max sm:-mr-20"
            />
          </div>
          <div
            className={`relative hidden aspect-video h-auto w-full rounded-md p-0.5 sm:block sm:w-3/5`}
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
              className={`absolute left-16 -top-6 z-20 !aspect-square w-3/12 -translate-x-2/3 -rotate-3 transform rounded-lg border border-[#000] p-2 sm:top-[8%] sm:w-2/12 sm:border-2 sm:p-6`}
            >
              <div className="relative h-full w-full mix-blend-luminosity ">
                <Image
                  src={proj.img.logo}
                  alt={proj.name}
                  style={{ objectFit: 'contain' }}
                  fill
                  className="rotate-3"
                />
              </div>
            </div>
          </div>
          <ArrowRightCircle
            onClick={handleRightArrowClick}
            className="absolute right-0 top-1 z-30 h-6 w-6 stroke-white-dark hover:cursor-pointer sm:-right-12 sm:top-1/2 sm:h-8 sm:w-8"
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
