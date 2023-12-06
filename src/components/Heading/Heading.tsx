export interface SwitchMinProps {
  title: string
  description?: string
}

const Heading = ({ title, description }: SwitchMinProps) => {
  return (
    <div className="relative z-20 mt-10 flex min-h-[80vh] w-full flex-col justify-center px-20">
      <div
        className={`flex min-h-min w-max flex-col items-start overflow-hidden`}
      >
        <h1
          className={`transform animate-reveal text-center opacity-0 transition-all duration-700 ease-in-out `}
        >
          {title}
        </h1>
      </div>
      <p className="w-2/3 transform animate-reveal italic opacity-0 transition-all duration-700 ease-in-out">
        {description}
      </p>
    </div>
  )
}

export default Heading
