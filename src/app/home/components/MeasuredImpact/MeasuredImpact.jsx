import Container from "@/partials/elements/container/Container";
import Heading from "@/partials/elements/heading/Heading";

const MeasuredImpact = () => {
  const boxes = ["Box 1", "Box 2", "Box 3", "Box 4", "Box 5", "Box 6"];

  return (
    <Container>
      <div className="mx-auto flex flex-col justify-center h-auto">
     
        <Heading heading="Measured Impact" subHeading="Tracking Growth, Achieving Excellence" className="text-center"/>

        <div className="px-16 md:px-28 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="bg-gray-200 h-[200px] w-full rounded-lg p-4 flex items-center justify-center"
            >
              <p className="text-center">{box}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MeasuredImpact;
