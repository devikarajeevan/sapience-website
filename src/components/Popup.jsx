import React from 'react';
import { Link } from 'react-router-dom';

const Popup = ({ course, onClose }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-[#094ca9] px-4 py-6 rounded-lg shadow-lg max-w-md mx-auto">
        <button className="w-8 h-8 absolute -top-2 -right-2 font-bold text-[#094ca9] bg-primary rounded-full" onClick={onClose}>
          X
        </button>
        <h3 className="text-xl font-bold text-white">Name</h3>
        <p className="mt-2 text-[#358cc5] font-bold">{course.subtitle}</p>
        <div className="mt-4 text-white relative">
          <ul>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              English, Maths, Science, Social Science, ICT
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Materials: According to School Textbook (ICSE)
            </li>
          </ul>
          <div className='flex justify-center items-center mt-4'>
          <Link to={`/pricingplan`} className="absolute -bottom-10 px-8 py-1.5 text-white bg-secondary rounded-full">Explore</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
