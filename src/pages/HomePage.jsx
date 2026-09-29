import React from "react";
import Hero from "../components/Hero/Hero";
import Experience from "../components/Experience/Experience";
import CarList from "../components/CarList/CarList";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Testimonial from "../components/Testimonial/Testimonial";
import AppStoreBanner from "../components/AppStoreBanner/AppStoreBanner";
import Contact from "../components/Contact/Contact";

const HomePage = ({ theme }) => {
  return (
    <div>
      <Hero theme={theme} />
      <Experience />
      <CarList />
      <About />
      <Services />
      <Testimonial />
      <AppStoreBanner />
      <Contact />
    </div>
  );
};

export default HomePage;
