"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EmpoweringHer from '../components/EmpoweringHer';

import Gallery from '../components/Gallery';
import Testimonies from '../components/Testimonies';
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
      <div id="services">
        <Services />
      </div>
      <div id="empowering">
        <EmpoweringHer />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
   
      <Testimonies />
      <div id="team">
        <Team />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
} 