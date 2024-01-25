const Gradient = () => {
  return (
    <div className={`h-full w-full `}>
      <div className="fixed top-0 z-10 h-40 w-full bg-gradient-to-b from-black-base to-transparent mix-blend-multiply" />
      <div className="fixed bottom-0 z-10 h-80 w-full bg-gradient-to-t from-[#000000] via-[#000000] to-transparent" />
    </div>
  )
}

export default Gradient
