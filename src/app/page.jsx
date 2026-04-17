import { CourseTeaser } from "./components/sections/CourseTeaser";
import { FAQ } from "./components/sections/FAQ";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CourseTeaser />
      <FAQ />
    </>
  );
}