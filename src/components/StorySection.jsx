  // import React from 'react';
  // import OurStory from "../assets/OurStory.mp4";

  // const StorySection = () => {
  //   return (
  //      <section className="w-full xl:h-screen relative ">
  //         <h2 className="text-2xl font-semibold text-center bg-secondary pb-1 pt-1 text-white flex items-center justify-center">Our Story: Sidharth's Journey to Quality Education</h2>
  //       <div className="">
  //         <video 
  //           src={OurStory} 
  //           alt="Our Story" 
  //           className="mx-auto rounded-lg md:w-10/12 md:h-full mt-6 md:mt-10" 
  //           controls 
  //         />
  //       </div>        
  //     </section>
  //   );
  // };

  // export default StorySection;

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
  
  const StorySection = () => {
    return (
      <section className="w-full h-screen flex flex-col">
        <div className="bg-secondary text-white text-2xl font-semibold text-center py-1">
          Our Story: Sidharth's Journey to Quality Education
        </div>
  
        <div className="flex flex-grow bg-[#fcfcfc]">
          <div className="w-1/2 p-6 flex flex-col items-center justify-center m-4">
            {list.map((item, index) => (
              <div key={index} className="mb-6 text-center">
                <h3 className="text-[#0d4fb1] text-xl font-semibold mb-3 mt-3">{item.heading}</h3>
                <p className="text-black text-base">{item.text}</p>
              </div>
            ))}
          </div>
  
          <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="mb-2 mr-3 ml-3 mt-3 flex items-center justify-center">
            <video 
              src={OurStory} 
              alt="Our Story" 
              className="w-[85%] h-full object-contain rounded-2xl" 
              controls 
            />
          </div>
          <div className="bg-[#004aad] w-[70%] h-1/2 flex flex-col items-center justify-center text-white rounded-2xl mr-3 ml-3 p-4 font-bold">
            <p className="text-lg text-center mb-4">
              "Ready to take the next step? Contact us today to learn more about our services and enroll."
            </p>
            <button className='bg-white text-[#0d4fb1] px-4 py-2 rounded-2xl'>
              Contact us
            </button>
          </div>
        </div>
        </div>
      </section>
    );
  };
  
  export default StorySection;
  