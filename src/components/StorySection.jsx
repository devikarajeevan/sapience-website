import React from 'react';
import OurStory from "../assets/OurStory.mp4";

const list = [
  {
    heading: "Our Mission:",
    text: "\"Our mission is to provide personalized, high-quality education to students in the comfort of their homes. We aim to bridge the gap between traditional schooling and individual learning needs.\""
  },
  {
    heading: "Our Vision:",
    text: "\"To be the leading provider of personalized education, empowering students with knowledge and skills for the future.\""
  },
  {
    heading: "Why Choose Us:",
    text: "\"With Sapience Edu Connect, you get individualized attention, expert tutors, and a range of courses designed to prepare students for the technological advancements of tomorrow.\""
  },
];

const StorySection = ({ footerRef }) => {
  // Function to scroll to the footer
  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full lg:h-full flex flex-col gap-4 bg-[#fcfcfc]">
      <div className="bg-secondary text-white text-2xl font-semibold text-center py-3 px-1">
        Our Story: Sidharth's Journey to Quality Education
      </div>

      <div className="flex flex-col lg:flex-row flex-grow pt-0">
        <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col items-center justify-center lg:ml-10 lg:mr-0 m-2">
          {list.map((item, index) => (
            <div key={index} className="mb-6 text-center">
              <h3 className="text-[#0d4fb1] text-xl lg:text-2xl font-semibold mb-3 mt-3">{item.heading}</h3>
              <p className="text-black text-base lg:text-lg">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:pl-6">
          <div className="mb-4 w-10/12 lg:mb-4 flex items-center justify-center">
            <video 
              src={OurStory} 
              alt="Our Story" 
              className="w-full h-auto lg:h-[300px] object-contain rounded-2xl border-4 border-gray-300" 
              controls 
            />
          </div>
          <div className="bg-[#004aad] w-10/12 h-auto lg:h-[300px] flex flex-col items-center justify-center text-white rounded-2xl p-4 lg:p-5">
            <p className="text-lg lg:text-xl text-center">
              "Ready to take the next step?<br /> Contact us today to learn more about our services and enroll."
            </p>
            <button 
              className='bg-white text-[#0d4fb1] px-4 py-2 rounded-2xl mt-4'
              onClick={scrollToFooter} // Scroll to footer on click
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
