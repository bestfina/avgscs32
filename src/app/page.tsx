import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Service from "@/components/sections/Service";
import Faq from "@/components/sections/Faq";
import Feedback from "@/components/sections/Feedback";
import Forma from "@/components/sections/Forma";
import MobileLink from "@/components/ui/MobileLink";

const Home = () => (
  <>
    <Hero />
    <Service />
    <Portfolio />
    <About />
    <Feedback />
    <Forma />
    <Faq />
    <MobileLink />
  </>
);

export default Home;
