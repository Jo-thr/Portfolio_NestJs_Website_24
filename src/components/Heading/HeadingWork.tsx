export interface HeadingWorkProps {
  title: string
  description?: string
  year?: string
  poste?: string
  front?: string
  back?: string
  data?: string
  devops?: string
  tools?: string
  site?: string
}

const HeadingWork = ({
  title,
  description,
  year,
  poste,
  front,
  back,
  data,
  devops,
  tools,
  site,
}: HeadingWorkProps) => {
  return (
    <div className="relative mt-10 mb-20 flex w-full transform animate-reveal grid-cols-3 flex-col-reverse px-10 opacity-0 transition-all duration-700 ease-in-out sm:mt-28 sm:grid sm:flex-row sm:px-40">
      <div className="relative col-span-1 flex flex-col gap-6 ">
        <div className="text-lg">{poste}</div>
        <div className="flex flex-col text-sm font-thin tracking-widest">
          {year && (
            <div>
              <b>Année :</b> {year}
            </div>
          )}
          {site && (
            <div>
              <b>Site :</b> {site}
            </div>
          )}
        </div>
        <div className="text-sm font-thin tracking-widest">
          {front && (
            <div>
              <b>Front:</b> {front}
            </div>
          )}
          {back && (
            <div>
              <b>Back:</b> {back}
            </div>
          )}
          {data && (
            <div>
              <b>Data:</b> {data}
            </div>
          )}
          {devops && (
            <div>
              <b>Devops:</b> {devops}
            </div>
          )}
          {tools && (
            <div>
              <b>Outils:</b> {tools}
            </div>
          )}
        </div>
      </div>
      <div className="relative col-span-1 mb-20 flex flex-col sm:col-span-2 sm:mb-0">
        <h5 className="absolute z-20 -mt-12 -ml-4 -rotate-3 transform bg-gradient-to-r from-teal-300 via-pink-600 to-orange-500 bg-clip-text font-allison text-5xl text-transparent">
          Projet
        </h5>
        <h1 className="relative z-10 font-dm">{title}</h1>
        <p className="mt-10 w-full">{description}</p>
      </div>
    </div>
  )
}

export default HeadingWork
