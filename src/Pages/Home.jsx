import React from 'react'
import HeroSection from '../components/HeroSection'
import StorySection from '../components/StorySection'
import CoursesSection from '../components/CoursesSection'
import Footer from '../components/Footer'
import FormMerit from '../components/FormMerit'
import FormTutor from '../components/FormTutor'

const Home = () => {
  return (
    <div className="lato-regular">
      <HeroSection />
      <StorySection />
      <CoursesSection />
      <Footer/>
    </div>
  )
}

export default Home
