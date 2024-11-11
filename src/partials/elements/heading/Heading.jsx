
const Heading = ({heading,subHeading,className}) => {
  return (
    <div className={className}>
    {heading && <h2 className="text-3xl lg:text-5xl font-bold">{heading}</h2>}
    {subHeading && <p className="text-xl mt-4 mx-auto">{subHeading}</p>}
  </div>  )
}

export default Heading