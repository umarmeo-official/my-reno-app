import { Header } from "./components/Header";
import { HeroSwiper } from "./components/Slider";
import { AboutSection } from "./components/About-Sec";
import { ServicesSection } from "./components/ServiceSec";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { WorkFlow } from "./components/WorkFlow";
import { FlexibleSec } from "./components/Price-Sec";
import { FaqSection } from "./components/FaqsSec";
import { ClientSection } from "./components/clientSection";
import { CallToAction } from "./components/CallAction";
import { Footer } from "./components/Footer";



export function App() {

  return <>
     <Header />    
     <section id="home"><HeroSwiper /></section>
     <section id="about"><AboutSection /></section>
     <section id="services"><ServicesSection /></section>    
     <section id="whychooseus"><WhyChooseUs /></section>
     <section id="workflow"><WorkFlow /></section>     
     <section id="price"><FlexibleSec /></section>
     <section id="faq"><FaqSection /></section>
     <section id="testimonial"><ClientSection /></section>
     <section id="cta"><CallToAction /></section>
     <section id="footer"><Footer /></section>
  </> 
}

