import React from 'react';
import Image2 from '../assets/girlgrp.gif';
import Image1 from '../assets/studyboy.gif'; 
import girl from "../assets/girl.gif";// Ensure the path is correct
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: 'CBSE / ICSE',
    subtitle: 'V - IX Std',
    image: Image1,
    rightTitle: 'Foundations Mastery',
    rightSubTitle: '(CBSE/ICSE 5th to 9th Standard)',
    rightPoints: [
      'Comprehensive coverage of key subjects',
      'Pre-prepared study materials',
      'Tech Integrated Tuition',
      'Career & Mental Guidance',
      'Evaluation Session',
      'Mobile App Security',
      'Fixed Timetable',
      'Smart Library',
    ],
    leftParagraph: "Unlock your child's potential with our Foundations Mastery course, designed specifically for students from 5th to 9th standard."
  },
  {
    id: 2,
    title: 'CBSE / ICSE',
    subtitle: 'X Std',
    image: Image2,
    rightTitle: 'Excellence Accelerator',
    rightSubTitle: '(CBSE/ICSE 10th Standard)',
    rightPoints: [
      'Focused on board exam preparation',
      'Customized study plans',
      'Tech Integrated Tuition',
      'Career & Mental Guidance',
      'Evaluation Session',
      'Mobile App Security',
      'Fixed Timetable',
      'Smart Library',
    ],
    leftParagraph: 'Specifically crafted for 10th standard students, this course focuses on intensive preparation, covering all crucial subjects.'
  }
];

const workshops = [
  'Introduction to Cyber Security and Ethical Hacking',
  'Introduction to AI/ML',
  'Introduction to Data Science',
  'Ethical Hacking Essentials',
  'Introduction to IoT',
  'Introduction to Robotics',
  'Introduction to Network Security',
  'What is the dark web?',
  'How to save ourselves from Hacking',
  'What is cloud computing?',
];

const CoursesSection = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/pricingplan");
  };

  return (
    <section className="bg-white">
      <div className='bg-white py-9 mt-4 md:mt-8 lg:mt-12'>
        <div className="bg-secondary text-white text-3xl font-semibold text-center py-2">
          Courses Offered
        </div>
        <div className="flex flex-col gap-6 mb-12">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`bg-white p-6 rounded-lg border-b shadow-lg flex flex-col-reverse  md:flex-row items-center md:justify-center ${index === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Centered Content */}
              <div className={`w-full md:w-1/2 flex flex-col items-center ${index === 1 ? 'md:items-center' : ''}`}>
                <img src={course.image} alt={course.title} className="w-full h-auto max-w-[300px] md:max-w-[400px] mb-4" />
                <p className="text-gray-700 text-lg text-center mb-4 px-10 py-4">{course.leftParagraph}</p> {/* Added padding */}
              </div>

              {/* Right Section: Title, Subtitle, and Bullet Points */}
              <div className={`w-full md:w-1/2 flex flex-col items-center ${index === 1 ? 'md:items-center' : ''}`}>
                <h3 className="text-2xl font-bold text-[#004aad] mb-2 text-center md:text-left">{course.rightTitle}</h3>
                <h4 className="text-xl font-semibold text-[#35a0cd] mb-4 text-center md:text-left">{course.rightSubTitle}</h4>

                <div className="grid grid-cols-1 justify-center md:grid-cols-2 gap-4 text-gray-700 text-base p-2">
                  {course.rightPoints.map((point, i) => (
                    <div key={i} className="flex items-start">
                      <div>
                        <svg className="w-4 h-4 mr-2 text-[#0d4fb1]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>

                      {point}
                    </div>
                  ))}
                </div>
                <div className="w-full flex justify-center">
                  <button
                    className="px-4 py-2 bg-secondary text-white font-bold rounded-full text-lg justify-items-center"
                    onClick={handleExploreClick}
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-[#51ccde] bg-opacity-20 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-3xl font-bold text-[#004aad] mb-2 text-center">Future Innovators Workshops</h2>
          <h3 className="text-2xl font-semibold text-[#35a0cd] mb-4 text-center">(For All)</h3>
          <p className="text-base text-black text-center mb-8 px-10 py-4">
            Explore the exciting world of technology with our Future Innovators Workshops. Open to all irrespective of age, these hands-on workshops cover a range of Industry 4.0 technologies. Designed to spark creativity and innovation, our workshops provide practical skills and knowledge to prepare students for the future.
          </p> {/* Added padding */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl">
            {/* Bullet Points */}
            <ul className="list-disc list-inside text-black text-base space-y-2 w-full md:w-8/12  px-10 py-2"> {/* Added padding */}
              {workshops.map((workshop, i) => (
                <li key={i} className=''>{workshop}</li>
              ))}
            </ul>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
              <img src={girl} alt="Future Innovators Workshops" className="w-full h-auto max-w-[400px] mb-4" />
              <div className="w-full flex justify-center mt-4"> {/* Align button */}
                <button 
                  className="px-4 py-2 bg-secondary text-white font-bold rounded-full text-lg"
                  onClick={handleExploreClick}
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
