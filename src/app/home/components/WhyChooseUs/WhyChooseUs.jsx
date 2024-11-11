import Container from "@/partials/elements/container/Container";
import Heading from "@/partials/elements/heading/Heading";

const WhyChooseUs = () => {
    const boxes = ["Box 1", "Box 2", "Box 3", "Box 4"];

    return (
      <Container>
      <div className="mx-auto flex flex-col justify-center h-auto">
     
        <Heading heading="Why Choose Us" className="text-center"/>
  
        <div className="px-16 md:px-28 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="bg-gray-200 h-[600px] w-full rounded-lg p-4 flex items-center justify-center"
            >
              <p className="text-center">{box}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default WhyChooseUs