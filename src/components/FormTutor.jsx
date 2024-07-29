import React from 'react';
import Logo from "../assets/Logo.png";
import Tutor from "../assets/tutor.png";
import IconGif from "../assets/reg page.gif"; // Assuming you have a gif icon for each list item

const list = [
  {
    heading: "Compensation",
    subheading: "Hourly payments, extra payments for doubt-clearing-sessions"
  },
  {
    heading: "Professional Growth",
    subheading: "Career growth certifications"
  },
  {
    heading: "Security and Support",
    subheading: "Security for tutors through a mobile app and Pre-prepared worksheets"
  },
  {
    heading: "Structured work",
    subheading: "Fixed timetable & tuto dashboard for information"
  },
  {
    heading: "Training",
    subheading: "3 weeks of initial training"
  }
];

const FormTutor = () => {
  return (
    <div className='w-full bg-primary pb-16 '>
      <div className='flex items-center justify-start w-full mx-auto p-2'>
        <img src={Logo} className='w-[100px] h-[100px] ' alt="Logo" />
        <h1 className='font-semibold text-2xl md:text-3xl text-center flex-grow'>Join as Tutors</h1>
      </div>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-3 px-4'>
        <div className='flex items-center justify-center w-full'>
        <div className='w-full md:w-[60%] shadow-xl flex flex-col my-4 rounded-xl hover:scale-105 duration-300 bg-white p-4'>
          <p className='text-center font-bold text-md text-blue-600 pb-4'>Share your details, Let us connect you</p>
          <form className='flex flex-col space-y-4'>
            <input type="text" placeholder="Name" className="p-2 border border-gray-300 rounded-xl" />
            <input type="email" placeholder="Email ID" className="p-2 border border-gray-300 rounded-xl" />
            <input type="text" placeholder="Contact" className="p-2 border border-gray-300 rounded-xl" />
            <input type="text" placeholder="Qualification" className="p-2 border border-gray-300 rounded-xl" />
            <input type="text" placeholder="Subjects" className="p-2 border border-gray-300 rounded-xl" />
            <button className='bg-blue-700 w-[200px] rounded-3xl font-medium mx-auto px-6 py-3 text-white'>Apply Now</button>
          </form>
          </div>
        </div>

        <div className='flex flex-col md:flex-row mx-auto sm:mt-3'>
          <div className='w-full flex flex-col space-y-4'>
            {list.map((item, index) => (
              <div key={index} className='w-full flex items-center space-x-2'>
                <img src={IconGif} className='w-[53px] h-[74px]' alt="Icon" />
                <div className='flex flex-col space-y-2'>
                  <h1 className='text-blue-800 text-md font-bold'>{item.heading}</h1>
                  <p className='text-gray-500 text-xs'>{item.subheading}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='flex flex-col items-center justify-center ml-4'>
            <img src={Tutor} alt="Merit" className='md:w-[470px] md:h-[380px] w-[300px] h-[320px]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTutor;