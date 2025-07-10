import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EmpoweringHer from '../components/EmpoweringHer';
import Model from '../components/Model';
import Gallery from '../components/Gallery';
import Testimonies from '../components/Testimonies';
import Blog from '../components/Blog';
import Team from '../components/Team';
import Services from '../components/Services';

import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="empowering">
        <EmpoweringHer />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
} 