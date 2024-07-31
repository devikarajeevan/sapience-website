// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import Logo from "../assets/Logo.png";
// import MeritImg from "../assets/merit_img.png";
// import IconGif from "../assets/reg page.gif"; // Assuming you have a gif icon for each list item

// const list = [
//   {
//     heading: "Comprehensive course subscription",
//     subheading: "Course subscription with a pre-prepared timetable"
//   },
//   {
//     heading: "Focused Learning",
//     subheading: "Individual attention & mutual bonding"
//   },
//   {
//     heading: "Supportive services",
//     subheading: "Customer care team with door assistance"
//   },
//   {
//     heading: "Empowerment Initiatives",
//     subheading: "She for She initiative"
//   },
//   {
//     heading: "Expert Guidance",
//     subheading: "Talented tutors & feedback sessions"
//   }
// ];

// const FormMerit = () => {
//   const location = useLocation();
//   const { selectedPlan } = location.state || {};

//   return (
//     <div className='w-full bg-primary pb-16'>
//       <div className='flex items-center justify-start w-full mx-auto p-2'>
//         <img src={Logo} className='w-[100px] h-[100px]' alt="Logo" />
//         <h1 className='font-semibold text-2xl md:text-3xl text-center flex-grow'>Merit for Students</h1>
//       </div>

//       <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-3 px-4'>
//         <div className='flex items-center justify-center w-full'>
//           <div className='w-full md:w-[60%] shadow-xl flex flex-col my-4 rounded-xl hover:scale-105 duration-300 bg-white p-4'>
//             <p className='text-center font-bold text-md text-blue-600 pb-4'>
//               Share your details, Let us connect you
//             </p>
//             {selectedPlan && (
//               <p className='text-center font-bold text-lg text-blue-600 pb-4'>
//                 Selected Plan: {selectedPlan}
//               </p>
//             )}
//             <form className='flex flex-col space-y-4'>
//               <input type="text" placeholder="Name" className="p-2 border border-gray-300 rounded-xl" />
//               <input type="email" placeholder="Email ID" className="p-2 border border-gray-300 rounded-xl" />
//               <input type="text" placeholder="Contact" className="p-2 border border-gray-300 rounded-xl" />
//               <input type="text" placeholder="Class" className="p-2 border border-gray-300 rounded-xl" />
//               <input type="text" placeholder="Location" className="p-2 border border-gray-300 rounded-xl" />
//               {selectedPlan && <input type="hidden" name="plan" value={selectedPlan} />}
//               <button className='bg-blue-700 w-[200px] rounded-3xl font-medium mx-auto px-6 py-3 text-white'>
//                 Register
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className='flex flex-col md:flex-row mx-auto sm:mt-3'>
//           <div className='w-full flex flex-col space-y-4'>
//             {list.map((item, index) => (
//               <div key={index} className='w-full flex items-center space-x-2'>
//                 <img src={IconGif} className='w-[53px] h-[75px]' alt="Icon" />
//                 <div className='flex flex-col space-y-2'>
//                   <h1 className='text-blue-800 font-bold text-md'>{item.heading}</h1>
//                   <p className='text-gray-500 text-xs'>{item.subheading}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className='flex flex-col items-center justify-center ml-4'>
//             <img src={MeritImg} alt="Merit" className='md:w-[470px] md:h-[380px] w-[300px] h-[320px]' />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormMerit;



import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from "../assets/Logo.png";
import MeritImg from "../assets/merit_img.png";
import IconGif from "../assets/reg page.gif"; // Assuming you have a gif icon for each list item

const list = [
  {
    heading: "Comprehensive course subscription",
    subheading: "Course subscription with a pre-prepared timetable"
  },
  {
    heading: "Focused Learning",
    subheading: "Individual attention & mutual bonding"
  },
  {
    heading: "Supportive services",
    subheading: "Customer care team with door assistance"
  },
  {
    heading: "Empowerment Initiatives",
    subheading: "She for She initiative"
  },
  {
    heading: "Expert Guidance",
    subheading: "Talented tutors & feedback sessions"
  }
];

const FormMerit = () => {
  const location = useLocation();
  const { selectedPlan } = location.state || {};
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    class: '',
    location: '',
    plan: selectedPlan || '',
  });

  const [errors, setErrors] = useState({});

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toTimeString().split(' ')[0];
    return { date, time };
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.contact) newErrors.contact = 'Contact number is required';
    if (!formData.class) newErrors.class = 'Class is required';
    if (!formData.location) newErrors.location = 'Location is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const { date, time } = getCurrentDateTime();
    const dataToSend = { ...formData, date, time };
    
    try {
      const response = await fetch('http://localhost:3000/save-merit-data', { // Update endpoint to match the new route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend),
        mode: 'cors',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.text();
      console.log(data);
      alert('Form Submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit form.');
    }
  };

  return (
    <div className='w-full bg-primary pb-16'>
      <div className='flex items-center justify-start w-full mx-auto p-2'>
        <img src={Logo} className='w-[100px] h-[100px]' alt="Logo" />
        <h1 className='font-semibold text-2xl md:text-3xl text-center flex-grow'>Merit for Students</h1>
      </div>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-3 px-4'>
        <div className='flex items-center justify-center w-full'>
          <div className='w-full md:w-[60%] shadow-xl flex flex-col my-4 rounded-xl hover:scale-105 duration-300 bg-white p-4'>
            <p className='text-center font-bold text-md text-blue-600 pb-4'>
              Share your details, Let us connect you
            </p>
            {selectedPlan && (
              <p className='text-center font-bold text-lg text-blue-600 pb-4'>
                Selected Plan: {selectedPlan}
              </p>
            )}
            <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-2 border border-gray-300 rounded-xl"
                value={formData.name}
                onChange={handleFormChange}
              />
              {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
              
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                className="p-2 border border-gray-300 rounded-xl"
                value={formData.email}
                onChange={handleFormChange}
              />
              {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
              
              <input
                type="text"
                name="contact"
                placeholder="Contact"
                className="p-2 border border-gray-300 rounded-xl"
                value={formData.contact}
                onChange={handleFormChange}
              />
              {errors.contact && <p className='text-red-500 text-sm'>{errors.contact}</p>}
              
              <input
                type="text"
                name="class"
                placeholder="Class"
                className="p-2 border border-gray-300 rounded-xl"
                value={formData.class}
                onChange={handleFormChange}
              />
              {errors.class && <p className='text-red-500 text-sm'>{errors.class}</p>}
              
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="p-2 border border-gray-300 rounded-xl"
                value={formData.location}
                onChange={handleFormChange}
              />
              {errors.location && <p className='text-red-500 text-sm'>{errors.location}</p>}
              
              <input type="hidden" name="plan" value={formData.plan} />
              
              <button
                type="submit"
                className='bg-blue-700 w-[200px] rounded-3xl font-medium mx-auto px-6 py-3 text-white'
              >
                Register
              </button>
            </form>
          </div>
        </div>

        <div className='flex flex-col md:flex-row mx-auto sm:mt-3'>
          <div className='w-full flex flex-col space-y-4'>
            {list.map((item, index) => (
              <div key={index} className='w-full flex items-center space-x-2'>
                <div className=' min-w-fit h-[75px]'>
                  <img src={IconGif} className=' h-[75px] w-fit' alt="Icon" />
                </div>
                
                <div className='flex flex-col space-y-2'>
                  <h1 className='text-blue-800 font-bold text-md'>{item.heading}</h1>
                  <p className='text-gray-500 text-xs'>{item.subheading}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='flex flex-col items-center justify-center ml-4'>
            <img src={MeritImg} alt="Merit" className='md:w-[470px] md:h-[380px] w-[300px] h-[320px]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormMerit;
