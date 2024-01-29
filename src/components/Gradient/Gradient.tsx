const Gradient = () => {
  return (
    <div className={`h-full w-full `}>
      <div className="fixed top-0 z-10 h-20 w-full bg-gradient-to-b from-black-base to-transparent mix-blend-multiply sm:h-40" />
      <div className="fixed bottom-0 z-10 h-48 w-full bg-gradient-to-t from-[#000000] via-[#000000] to-transparent sm:h-80" />
    </div>
  )
}

export default Gradient
