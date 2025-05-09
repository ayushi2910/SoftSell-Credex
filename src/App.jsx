import React from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhychooseUs';
import TestimonialsSection from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      
    
      <Navbar />
      <div id="hero">
        <HeroSection />   
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="why-us">
        <WhyChooseUs />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="contact">
        <Contact />
      </div>

    </div>
  );
}

export default App;