import React, { useState } from 'react';
import Logo from "../assets/Logo.png";
import MeritImg from "../assets/merit_img.png";
import IconGif from "../assets/reg page.gif"; 

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    qualifications: '',
    subjects: '',
    location: ''
  });

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toISOString().split('T')[0]; 
    const time = now.toTimeString().split(' ')[0];
    return { date, time };
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { date, time } = getCurrentDateTime();
    const dataToSend = { ...formData, date, time };
    console.log(dataToSend)

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyZLEOOkMPSOokXLLaSMIAqCNPIcqimgX0_dWP35gvFE10LpGUaWmgvrb7hIqW6LAY_pQ/exec', {
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
      alert('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Failed to save data.');
    }
  };

  return (
    <div className='w-full bg-primary pb-16 '>
      <div className='flex items-center justify-start w-full mx-auto p-2'>
        <img src={Logo} className='w-[100px] h-[100px] ' alt="Logo" />
        <h1 className='font-semibold text-2xl md:text-3xl text-center flex-grow'>Join as Tutor</h1>
      </div>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-3 px-4'>
        <div className='flex items-center justify-center w-full'>
        <div className='w-full md:w-[60%] shadow-xl flex flex-col my-4 rounded-xl hover:scale-105 duration-300 bg-white p-4'>
          <p className='text-center font-bold text-md text-blue-600 pb-4'>Share your details, Let us connect with you</p>
          <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-2 border border-gray-300 rounded-xl"
                value={formData.name}
                onChange={handleFormChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                className="p-2 border border-gray-300 rounded-xl"
                value={formData.email}
                onChange={handleFormChange}
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact"
                className="p-2 border border-gray-300 rounded-xl"
                value={formData.contact}
                onChange={handleFormChange}
              />
              <input
                type="text"
                name="qualifications"
                placeholder="Qualifications"
                className="p-2 border border-gray-300 rounded-xl"
                value={formData.qualifications}
                onChange={handleFormChange}
              />
              <input
                type="text"
                name="subjects"
                placeholder="Subjects"
                className="p-2 border border-gray-300 rounded-xl"
                value={formData.subjects}
                onChange={handleFormChange}
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="p-2 border border-gray-300 rounded-xl"
                value={formData.location}
                onChange={handleFormChange}
              />
            <button type='submit' className='bg-blue-700 w-[200px] rounded-3xl font-medium mx-auto px-6 py-3 text-white'>Apply Now</button>
          </form>
          </div>
        </div>

        <div className='flex flex-col md:flex-row mx-auto sm:mt-3'>
          <div className='w-full flex flex-col space-y-4'>
            {list.map((item, index) => (
              <div key={index} className='w-full flex items-center space-x-2'>
                <img src={IconGif} className='w-[53px] h-[75px]' alt="Icon" />
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

export default FormTutor;
// import React, { useState } from 'react';
// import { saveAs } from 'file-saver';
// import ExcelJS from 'exceljs';
// import Logo from "../assets/Logo.png";
// import MeritImg from "../assets/merit_img.png";
// import IconGif from "../assets/reg page.gif";

// const list = [
//   {
//     heading: "Compensation",
//     subheading: "Hourly payments, extra payments for doubt-clearing-sessions"
//   },
//   {
//     heading: "Professional Growth",
//     subheading: "Career growth certifications"
//   },
//   {
//     heading: "Security and Support",
//     subheading: "Security for tutors through a mobile app and Pre-prepared worksheets"
//   },
//   {
//     heading: "Structured work",
//     subheading: "Fixed timetable & tuto dashboard for information"
//   },
//   {
//     heading: "Training",
//     subheading: "3 weeks of initial training"
//   }
// ];

// const FormTutor = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     qualifications: '',
//     subjects: '',
//     location: ''
//   });

//   const getCurrentDateTime = () => {
//     const now = new Date();
//     const date = now.toISOString().split('T')[0];
//     const time = now.toTimeString().split(' ')[0];
//     return { date, time };
//   };

//   const handleFormChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { date, time } = getCurrentDateTime();
//     const dataToSend = { ...formData, date, time };

//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet('Form Data');

//     worksheet.columns = [
//       { header: 'Field', key: 'field', width: 20 },
//       { header: 'Value', key: 'value', width: 30 }
//     ];

//     Object.entries(dataToSend).forEach(([key, value]) => {
//       worksheet.addRow({ field: key, value });
//     });

//     workbook.xlsx.writeBuffer().then((buffer) => {
//       const blob = new Blob([buffer], { type: 'application/octet-stream' });
//       saveAs(blob, 'form_data.xlsx');
//     });

//     alert('Data saved successfully!');
//   };

//   return (
//     <div className='w-full bg-primary pb-16'>
//       <div className='flex items-center justify-start w-full mx-auto p-2'>
//         <img src={Logo} className='w-[100px] h-[100px]' alt="Logo" />
//         <h1 className='font-semibold text-2xl md:text-3xl text-center flex-grow'>Join as Tutor</h1>
//       </div>

//       <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-3 px-4'>
//         <div className='flex items-center justify-center w-full'>
//           <div className='w-full md:w-[60%] shadow-xl flex flex-col my-4 rounded-xl hover:scale-105 duration-300 bg-white p-4'>
//             <p className='text-center font-bold text-md text-blue-600 pb-4'>Share your details, Let us connect with you</p>
//             <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 className="p-2 border border-gray-300 rounded-xl"
//                 value={formData.name}
//                 onChange={handleFormChange}
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email ID"
//                 className="p-2 border border-gray-300 rounded-xl"
//                 value={formData.email}
//                 onChange={handleFormChange}
//               />
//               <input
//                 type="text"
//                 name="contact"
//                 placeholder="Contact"
//                 className="p-2 border border-gray-300 rounded-xl"
//                 value={formData.contact}
//                 onChange={handleFormChange}
//               />
//               <input
//                 type="text"
//                 name="qualifications"
//                 placeholder="Qualifications"
//                 className="p-2 border border-gray-300 rounded-xl"
//                 value={formData.qualifications}
//                 onChange={handleFormChange}
//               />
//               <input
//                 type="text"
//                 name="subjects"
//                 placeholder="Subjects"
//                 className="p-2 border border-gray-300 rounded-xl"
//                 value={formData.subjects}
//                 onChange={handleFormChange}
//               />
//               <input
//                 type="text"
//                 name="location"
//                 placeholder="Location"
//                 className="p-2 border border-gray-300 rounded-xl"
//                 value={formData.location}
//                 onChange={handleFormChange}
//               />
//               <button type='submit' className='bg-blue-700 w-[200px] rounded-3xl font-medium mx-auto px-6 py-3 text-white'>Apply Now</button>
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

// export default FormTutor;
