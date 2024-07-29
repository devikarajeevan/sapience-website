import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider2 from "../assets/Slider2.svg";
import Slider3 from "../assets/Slider3.svg";
import PersonalizedLearning from "../assets/PersonalizedLearning.svg";
import Slider32 from "../assets/Slider32.svg";
import PersonalizedLearning2 from "../assets/PersonalizedLearning2.svg";
import Logo from "../assets/Logo.png";

const slides = [
  {
    title: "One - One Tech Oriented Learning",
    desc: "Experience personalized, one-on-one learning with our dedicated tutors right at your home. Our expert educators focus on each student's individual needs, providing tailored support to help them excel in their studies. With customized lesson plans and interactive teaching methods, we ensure that students grasp difficult concepts and build confidence. Our approach promotes a deeper understanding of subjects and fosters a love for learning, all within the comfort and convenience of your own home.",
    button: "Book a Demo",
    image: PersonalizedLearning2,
    path: "/book-demo",
  },
  {
    title: "Innovative Tech Courses for Young Minds",
    desc: "From AI to Robotics, explore our range of tech courses designed to equip students with the skills of the future. Our carefully crafted curriculum makes complex concepts accessible and engaging, ensuring students develop a solid understanding of emerging technologies. By immersing students in the latest advancements, we prepare them for the rapidly evolving tech landscape and inspire a passion for innovation and problem-solving.",
    button: "Tuition Enquiry",
    image: Slider2,
    path: "/tuition-enquiry",
  },
  {
    title: "Shaping Futures Together",
    desc: "Are you an expert in your field and passionate about teaching? Join us as a tutor and help shape the future of young minds. You'll have the opportunity to inspire and mentor the next generation of students, sharing your knowledge and experience. Make a meaningful impact on their educational journey and help them achieve their full potential, all while contributing to a supportive and enriching learning environment.",
    button: "Tutor Enquiry",
    image: Slider32,
    path: "/tutor-enquiry",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Track whether the slider is paused
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="hero-container pb-2 md:pb-20">
      <section className="mx-auto hero-section xl:h-screen">
        <div className="bg-primary flex items-center px-4 md:px-8">
          <img
            src={Logo}
            alt="logo"
            className="w-[20%] sm:w-[25%] md:w-[20%] lg:w-[15%] xl:w-[10%] h-auto"
          />
        </div>
        <div className="p-1 pt:0 md:pr-6 md:pl-6 md:pt-0 md:h-[400px] flex flex-col md:flex-row justify-center items-start md:items-center gap-6">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              {slides[currentSlide].desc}
            </p>
            {slides[currentSlide].button && (
              <button
                className="mt-5 px-6 py-4 text-white text-base rounded-full bg-[#0075C2] hover:bg-[#0056a0] transition-colors duration-300"
                onClick={() => handleClick(slides[currentSlide].path)}
                onMouseEnter={() => setIsPaused(true)} // Pause slider on button hover
                onMouseLeave={() => setIsPaused(false)} // Resume slider on button leave
              >
                {slides[currentSlide].button}
              </button>
            )}
          </div>
          <div className="flex-1">
            <img
              src={slides[currentSlide].image}
              alt="Slide Image"
              className="h-[450px] object-contain transition-transform duration-1000 ease-in-out"
              style={{ maxHeight: '450px', width: '100%' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
