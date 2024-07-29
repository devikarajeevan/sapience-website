  import React from 'react';
  import OurStory from "../assets/OurStory.mp4";

  const StorySection = () => {
    return (
       <section className="w-full xl:h-screen relative ">
          <h2 className="text-2xl font-semibold text-center bg-secondary pb-1 pt-1 text-white flex items-center justify-center">Our Story: Sidharth's Journey to Quality Education</h2>
        <div className="">
          <video 
            src={OurStory} 
            alt="Our Story" 
            className="mx-auto rounded-lg md:w-10/12 md:h-full mt-6 md:mt-10" 
            controls 
          />
        </div>
       
        
      </section>
    );
  };

  export default StorySection;
