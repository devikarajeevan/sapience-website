import React, { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import CoursesSection from '../components/CoursesSection';
import Footer from '../components/Footer';
import FormMerit from '../components/FormMerit';
import FormTutor from '../components/FormTutor';

const Home = () => {
  // Create a ref for the footer
  const footerRef = useRef(null);

  return (
    <div className="lato-regular">
      <HeroSection />
      <StorySection footerRef={footerRef} />
      <CoursesSection />
      <Footer ref={footerRef} />
    </div>
  );
}

export default Home;
