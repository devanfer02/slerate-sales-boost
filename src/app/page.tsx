import About from "./sections/about";
import CTA from "./sections/cta";
import Features from "./sections/features";
import Hero from "./sections/hero";

export default function Home() {
  return (
    <>
      <Hero/> 
      <About/>
      <Features/>
      <CTA/>
    </>
  );
}
