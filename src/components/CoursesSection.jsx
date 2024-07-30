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
import Popup from './Popup';
import ReactCardFlip from 'react-card-flip';
import './Activities.css'; // Ensure this contains the styles for .course-card and .card-back

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
  { id: 1, title: 'CBSE / ICSE', subtitle: 'V - IX Std', image: Image1 },
  { id: 2, title: 'CBSE / ICSE', subtitle: 'X Std', image: Image1 },
  { id: 3, title: 'Workshops', subtitle: 'Anyone', image: Image2 },
];

const CoursesSection = () => {
  const [flippedStates, setFlippedStates] = useState(new Array(courses.length).fill(false));
  const [selectedCourse, setSelectedCourse] = useState(null);

  const flipCard = (index) => {
    const newFlippedStates = [...flippedStates];
    newFlippedStates[index] = !newFlippedStates[index];
    setFlippedStates(newFlippedStates);
  };

  const handleViewMoreClick = (course) => {
    setSelectedCourse(course);
  };

  const handleClosePopup = () => {
    setSelectedCourse(null);
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
                </div>
              }
              backContent={
                <div className="w-full h-full flex flex-col justify-center items-center bg-white">
                  <p className="mt-2 text-[#358cc5] font-bold">{course.subtitle}</p>
                </div>
              }
              isFlipped={flippedStates[index]}
              flipCard={() => flipCard(index)}
            />
          ))}
        </div>
      </div>
      {selectedCourse && <Popup course={selectedCourse} onClose={handleClosePopup} />}
    </section>
  );
};

export default CoursesSection;
