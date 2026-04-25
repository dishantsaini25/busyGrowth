import { BrandsSlider } from "./components/sections/BrandsSlider";
import { CourseTeaser } from "./components/sections/CourseTeaser";
import { FAQ } from "./components/sections/FAQ";
import { FounderSection } from "./components/sections/FounderSection";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { WebDevServices } from "./components/sections/WebDevServices";


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <BrandsSlider />
      <WebDevServices />
      <CourseTeaser />
      <FounderSection />
      <FAQ />
    </>
  );
}