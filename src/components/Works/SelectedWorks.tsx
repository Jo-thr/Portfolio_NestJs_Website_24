'use client'
import { useEffect, useState } from 'react'
import Animation, { DelayType } from '../Animations/Animation'
import FTVMOCKUP from '@public/img-projects/FTV-MOCKUP.png'
import Image from 'next/image'
import Link from 'next/link'

export type ProjectsProps = {
  id: number
  slug: string
  name: string
  categorie: string
  short_description: string
  description: string
  imgBgColor: string
  imgFirst: string
}[]

export type SelectedWorksProps = {
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

const SelectedWorks = ({ data, className }: SelectedWorksProps) => {
  const [tabSelected, setTabSelected] = useState(1)
  const [workSelected, setWorkSelected] = useState(1)

  const [selectedWorks, setSelectedWorks] = useState<ProjectsProps[]>([])

  useEffect(() => {
    const newSelectedWorks = Array.from({ length: 3 }, (_, index) => {
      const middleIndex = Math.floor(3 / 2) // Utilisez directement 3 ici car c'est la longueur souhaitée
      const projectIndex =
        ((workSelected + index - middleIndex - 1 + data.projects.length) %
          data.projects.length) +
        1
      return data.projects.find((project) => project.id === projectIndex)
    })

    setSelectedWorks(newSelectedWorks)
  }, [workSelected, data])

  const contentSelectedWork = selectedWorks.find(
    (project) => project.id === workSelected
  )

  return (
    <div className={`z-20 mt-20 grid h-max w-full grid-cols-3 ${className}`}>
      <div className="col-span-1 flex flex-col items-start justify-around gap-32 px-20 py-40">
        {selectedWorks.map((proj) => (
          <div
            key={proj.id}
            className={`flex h-full w-full transform flex-row items-center justify-start gap-12 whitespace-nowrap font-koulen text-2xl font-bold tracking-tight text-white-dark/50 transition-all duration-500 ease-in-out hover:cursor-pointer ${
              workSelected === proj.id && 'text-7xl !text-white-base'
            }`}
            onClick={() => setWorkSelected(proj.id)}
          >
            <span
              className={`${
                workSelected === proj.id && 'mt-8'
              } flex items-center justify-center font-sans text-base font-medium`}
            >
              0{proj.id}.
            </span>
            {proj.name}
          </div>
        ))}
      </div>
      <div className="col-span-2 flex flex-col items-center justify-start overflow-hidden rounded-3xl bg-black-dark">
        <div className="grid w-full grid-cols-2 bg-black-light">
          <button
            type="button"
            className={`${
              tabSelected === 2 && 'text-white-dark/50'
            } col-span-1 flex flex-col items-center justify-center border-b-2 border-black-base bg-black-dark p-5 font-bold uppercase`}
            onClick={() => setTabSelected(1)}
          >
            {data.tabs.visual}
          </button>
          <button
            type="button"
            className={`${
              tabSelected === 1 && 'text-white-dark/50'
            } col-span-1 flex flex-col items-center justify-center border-b-2 border-l-2 border-black-base bg-black-dark p-5 font-bold uppercase`}
            onClick={() => setTabSelected(2)}
          >
            {data.tabs.text}
          </button>
        </div>

        {tabSelected === 1 && (
          <div
            className={
              'relative flex h-full w-full items-center justify-center'
            }
          >
            <div className={'relative z-10 h-5/6 w-full '}>
              {contentSelectedWork?.imgFirst && (
                <Image
                  src={`https://www.jonathan-thr.com/_next/image?url=%2Fimg-projects%2FPARIS-SHOPPING-MOCKUP.png&w=3840&q=70`}
                  alt={contentSelectedWork.imgFirst}
                  style={{ objectFit: 'contain' }}
                  fill
                />
              )}
            </div>

            {contentSelectedWork?.imgBgColor && (
              <Image
                src={`https://images.unsplash.com/photo-1598902574988-e32182afa9f4?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt={contentSelectedWork.imgBgColor}
                style={{ objectFit: 'cover' }}
                fill
                className="bg-black-base opacity-5"
              />
            )}
          </div>
        )}
        {tabSelected === 2 && (
          <div className="flex h-full w-full flex-col justify-center gap-8 bg-black-dark p-20">
            <div className="font-koulen text-4xl font-bold uppercase ">
              {contentSelectedWork?.short_description}
            </div>
            <div className="w-2/3 text-lg">
              {contentSelectedWork?.description}
            </div>
          </div>
        )}

        <Link
          href={`/works/${contentSelectedWork?.slug}`}
          className="flex w-full flex-row justify-center bg-teal-200 p-4 font-bold uppercase text-black-base"
        >
          Prout le proj !
        </Link>
      </div>
    </div>
  )
}

export default SelectedWorks
