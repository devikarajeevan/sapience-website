// import React, { useState } from 'react';
// import Image1 from '../assets/Image1.svg';
// import Image2 from '../assets/Image2.svg';
// import Popup from './Popup';



// const courses = [
//   { id: 1, title: 'CBSE / ICSE', subtitle: 'V - IX Std', image: Image1 },
//   { id: 2, title: 'CBSE / ICSE', subtitle: 'X Std', image: Image1 },
//   { id: 3, title: 'Workshops', subtitle: 'Anyone', image: Image2 },
// ];

// const CoursesSection = () => {
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   const handleViewMoreClick = (course) => {
//     setSelectedCourse(course);
//   };

//   const handleClosePopup = () => {
//     setSelectedCourse(null);
//   };

//   return (
//     <section className="text-center py-12 relative ">
//       <div className='bg-blue-100 py-9 px-2 mt-12 md:mt-16 lg:mt-28'>
//         <h2 className="text-xl bg-secondary text-white w-max mx-auto px-6 py-1.5 rounded-full mb-6">
//           Courses Offered
//         </h2>
//         <div className="flex flex-wrap justify-center gap-4 w-full">
//           {courses.map((course) => (
//             <div key={course.id} className="w-full md:w-[300px] h-[200px] md:h-[200px] lg:w-[350px] lg:h-[300px] p-2 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center relative" style={{ backgroundImage: `url(${course.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
//               <h3 className="text-lg font-bold text-[#358cc5] ">{course.title}</h3>
//               <p className="mt-2 text-[#358cc5] font-bold ">{course.subtitle}</p>
//               <button className="absolute bottom-2 px-3 py-2  bg-secondary text-xs text-white rounded-full" onClick={() => handleViewMoreClick(course)}>View More</button>
//             </div>
//           ))}
//         </div>
//       </div>
//       {selectedCourse && <Popup course={selectedCourse} onClose={handleClosePopup} />}
//     </section>
//   );
// };

// export default CoursesSection;

import React, { useState } from 'react';
import Image1 from '../assets/Image1.svg';
import Image2 from '../assets/Image2.svg';
import ReactCardFlip from 'react-card-flip';
import './Courses.css';
import { useNavigate } from "react-router-dom";

const FlippingCard = ({ frontContent, backContent, isFlipped, flipCard }) => {
  return (
    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
      <div className='course-card' onClick={flipCard}>
        {frontContent}
      </div>
      <div className='course-card card-back' onClick={flipCard}>
        {backContent}
      </div>
    </ReactCardFlip>
  );
};

const courses = [
  {
    id: 1,
    title: 'CBSE / ICSE',
    subtitle: 'V - IX Std',
    image: Image1,
    details: [
      'English, Maths, Science, Social Science, ICT',
      'Materials: According to School Textbook (ICSE)'
    ]
  },
  {
    id: 2,
    title: 'CBSE / ICSE',
    subtitle: 'X Std',
    image: Image1,
    details: [
      'All subjects on demand'
    ]
  },
  {
    id: 3,
    title: 'Workshops',
    subtitle: 'Anyone',
    image: Image2,
    details: [
      'Introduction to Cyber Security and Ethical Hacking',
      'Introduction to AI/ML',
      'Introduction to Data Science',
      'Ethical Hacking Essentials',
      'Introduction to IoT',
      'Introduction to Robotics',
      'Introduction to Network Security',
      'What is the dark web?',
      'How to save ourselves from Hacking',
      'What is cloud computing?'
    ]
  }
];

const CoursesSection = () => {
  const [flippedStates, setFlippedStates] = useState(new Array(courses.length).fill(false));
  const navigate = useNavigate();

  const flipCard = (index) => {
    const newFlippedStates = [...flippedStates];
    newFlippedStates[index] = !newFlippedStates[index];
    setFlippedStates(newFlippedStates);
  };

  const handleExploreClick = () => {
    navigate("/pricingplan");
  };

  return (
    <section className="text-center py-12 relative">
      <div className='bg-blue-100 py-9 px-2 mt-12 md:mt-16 lg:mt-28'>
        <h2 className="text-xl bg-secondary text-white w-max mx-auto px-6 py-1.5 rounded-full mb-6">
          Courses Offered
        </h2>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {courses.map((course, index) => (
            <FlippingCard
              key={course.id}
              frontContent={
                <div className="w-full h-full flex flex-col justify-center items-center" style={{ backgroundImage: `url(${course.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                  <h3 className="text-lg font-bold text-[#358cc5]">{course.title}</h3>
                  <p className="mt-2 text-[#358cc5] font-bold">{course.subtitle}</p>
                </div>
              }
              backContent={
                <div className="w-full h-full flex flex-col justify-center items-center bg-[#094ca9] p-3">
                  <p className="text-white font-bold text-lg">DETAILS</p>
                  <ul className="list-disc text-white text-left">
                    {course.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-white text-sm">
                        <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <button className="absolute bottom-2 px-3 py-1 bg-secondary text-xs text-white rounded-full" onClick={handleExploreClick}>Explore</button>
                </div>
              }
              isFlipped={flippedStates[index]}
              flipCard={() => flipCard(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
