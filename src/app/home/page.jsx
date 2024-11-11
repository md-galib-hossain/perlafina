import Image from "next/image";
import Hero from "./components/hero/Hero";
import MeasuredImpact from "./components/MeasuredImpact/MeasuredImpact";
import ServicesPreview from "./components/ServicesPreview/ServicesPreview";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import OurClient from "./components/OurClient/OurClient";

export default function Home() {
  return (
    <div className="space-y-8">
      <Hero />
      <MeasuredImpact />
      <ServicesPreview />
      <WhyChooseUs/>
      <OurClient/>
    </div>
  );
}
