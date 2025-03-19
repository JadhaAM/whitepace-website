import React, { useState } from 'react';
import './index.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import ProjectManagementSection from './component/ProjectManagementSection';
import Main from './component/MainSection';
import TestimonialCarousel from './component/TestimonialCarousel';
import CtaSection from './component/CtaSection';
import PricingSlider from './component/PricingSlider';
import WhitespaceBanner from './component/WhitespaceBanner';
import DataSecuritySponsors from './component/DataSecuritySponsors';
import SubSection from './component/SubSection';
import ProjectSection from './component/ProjectSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <> 
    <Navbar/>
     <Main/>
    <ProjectManagementSection/>
    <ProjectSection/>
    <PricingSlider/>
    <SubSection/>
    <DataSecuritySponsors/>
    <WhitespaceBanner/>
    <TestimonialCarousel/>
    
    <CtaSection/>
    <Footer/>
    </>
  );
}

export default App;