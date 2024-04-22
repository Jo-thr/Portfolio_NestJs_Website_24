'use client'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import Button from '../Button/Button'

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { MoveLeft, MoveRight } from 'lucide-react'

import styles from './workSlider.module.css'

export type WorksSliderProps = {
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
    mission?: string
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

const WorksSlider = ({ projects, content, className }: WorksSliderProps) => {
  const options = {
    type: 'loop',
    perPage: 1,
    drag: true,
    start: 0,
  }

  return (
    <Splide
      hasTrack={false}
      aria-label={''}
      options={options}
      className="flex h-max w-full items-start pb-10 "
    >
      <SplideTrack className="h-max">
        {projects.map((proj) => (
          <SplideSlide
            key={proj.id}
            className={`relative z-20 flex h-full w-full flex-col-reverse !overflow-y-visible sm:flex-row ${className}`}
          >
            {/* LEFT CONTENT */}
            <div className="relative h-max w-full sm:top-20 sm:w-2/5 sm:pr-40">
              <div
                className={`flex h-full w-full transform flex-row items-center justify-center gap-12 font-dm text-2xl font-bold !text-white-base text-white-dark/50 transition-all duration-500 ease-in-out hover:cursor-pointer sm:justify-end sm:text-right sm:text-5xl`}
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
                      sizes="(max-width: 720px) 100vw,)"
                    />
                  </div>
                </Link>
              </div>
              <p className="!hidden text-sm leading-6 !line-clamp-5 sm:-mr-24 sm:ml-[10%] md:block">
                {proj.description}
              </p>
              <p className="text-center text-sm sm:-mr-32 sm:ml-[10%] sm:hidden sm:leading-7">
                {proj.short_description}
              </p>

              <Button
                title={content.seeProject}
                href={`works/${proj.slug}`}
                className="relative z-50 ml-auto mr-auto mt-10 w-max sm:-mr-20"
              />
            </div>
            {/* RIGHT CONTENT */}
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
                    sizes="(max-width: 768px) 100vw,)"
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
                    sizes="(max-width: 400px) 100vw,)"
                  />
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </SplideTrack>

      <div
        className={`${styles['custom_splide']} splide__arrows absolute bottom-0 right-0 z-50 !hidden h-8 flex-row items-center gap-6 sm:!flex`}
      >
        <button
          className={`${styles['custom_splide__arrow--prev']} splide__arrow splide__arrow--prev`}
        >
          <MoveLeft />
        </button>
        <button
          className={`${styles['custom_splide__arrow--next']} splide__arrow splide__arrow--next`}
        >
          <MoveRight width={40} height={40} />
        </button>
      </div>
      <div
        className={`${styles['work-slider-pagination']} splide__pagination`}
      />
    </Splide>
  )
}

export default WorksSlider
