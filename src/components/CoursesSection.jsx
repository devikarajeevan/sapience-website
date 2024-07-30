import React from 'react';
import Image1 from '../assets/girl.gif';
import Image2 from '../assets/Image2.svg'; // Ensure the path is correct
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
    image: Image1,
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
    <section className="bg-blue-100">
      <div className='bg-blue-100 py-9 mt-12 md:mt-16 lg:mt-28'>
        <div className="bg-secondary text-white text-3xl font-semibold text-center py-2">
          Courses Offered
        </div>
        <div className="flex flex-col mb-12">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:justify-center ${index === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Centered Content */}
              <div className={`w-full md:w-1/2 flex flex-col items-center ${index === 1 ? 'md:items-center' : ''}`}>
                <img src={course.image} alt={course.title} className="w-full h-auto max-w-[300px] md:max-w-[400px] mb-4" />
                <p className="text-gray-700 text-lg text-center mb-2">{course.leftParagraph}</p>
              </div>

              {/* Right Section: Title, Subtitle, and Bullet Points */}
              <div className={`w-full md:w-1/2 flex flex-col items-center md:items-start ${index === 1 ? 'md:items-center' : ''}`}>
                <h3 className="text-2xl font-bold text-[#004aad] mb-2 text-center md:text-left">{course.rightTitle}</h3>
                <h4 className="text-xl font-semibold text-[#35a0cd] mb-4 text-center md:text-left">{course.rightSubTitle}</h4>
                
                <div className="grid grid-cols-2 gap-4 text-gray-700 text-base justify-center">
                  {course.rightPoints.map((point, i) => (
                    <div key={i} className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-[#0d4fb1]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      {point}
                    </div>
                  ))}
                </div>
                <div className={`w-full flex justify-${index === 0 ? 'end' : 'start'} mt-4`}> {/* Align buttons */}
                  <button 
                    className="px-4 py-2 bg-secondary text-white font-bold rounded-full text-lg"
                    onClick={handleExploreClick}
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-[#51ccde] bg-opacity-0 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-3xl font-bold text-[#004aad] mb-2 text-center">Future Innovators Workshops</h2>
          <h3 className="text-2xl font-semibold text-[#35a0cd] mb-4 text-center">(For All)</h3>
          <p className="text-base text-black text-center mb-8">
            Explore the exciting world of technology with our Future Innovators Workshops. Open to all irrespective of age, these hands-on workshops cover a range of Industry 4.0 technologies. Designed to spark creativity and innovation, our workshops provide practical skills and knowledge to prepare students for the future.
          </p>
          <div className="flex flex-col md:flex-row w-full max-w-4xl">
            {/* Bullet Points */}
            <ul className="list-disc list-inside text-black text-base space-y-2 w-full md:w-1/2">
              {workshops.map((workshop, i) => (
                <li key={i}>{workshop}</li>
              ))}
            </ul>
            {/* Image and Explore Button */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
              <img src={Image2} alt="Future Innovators Workshops" className="w-full h-auto max-w-[400px] mb-4" />
              <div className="w-full flex justify-start mt-4"> {/* Align button */}
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
