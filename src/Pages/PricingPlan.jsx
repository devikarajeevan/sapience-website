import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png';
import { Link, useNavigate } from 'react-router-dom';

const PricingPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState('Rising Star');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      title: 'Starter Scholar',
      features: [
        'Tech Integrated Tuition',
        'Career & Mental Guidance',
        'Evaluation Session',
        'Mobile App Security',
        'Fixed Timetable',
        'Smart Library',
      ],
      label: 'Basic',
      Button: 'Choose Plan',
    },
    {
      title: 'Rising Star',
      features: [
        'All in Starter Scholar',
        'Smart Lab',
        'Doubt Clearance',
        'CCTV Camera',
        'Revision Session',
      ],
      label: 'Most Popular',
      Button: 'Choose Plan',
    },
    {
      title: 'Prime Scholar',
      features: ['All in Rising Star', 'AR Integrated', 'Flexible Timetable'],
      label: 'Premium',
      Button: 'Choose Plan',
    },
  ];

  const handleButtonClick = (plan) => {
    navigate('/book-demo', { state: { selectedPlan: plan.title } });
  };

  return (
    <div className="h-auto bg-gray-100 lato-regular">
      <div className="flex items-center justify-between px-8">
        <Link to="/" className="flex-shrink-0">
          <img src={Logo} alt="logo" className="h-16 sm:h-24 md:h-32 object-contain" />
        </Link>
        <h1 className="w-[85%] md:w-[90%] text-3xl md:text-4xl font-bold text-center text-gray-900">
          Sapience Edu Connect Pricing Plan
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-8 px-6 pb-16 lg:px-12 lg:pb-16 mt-10 w-full max-w-4xl">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between w-full md:w-1/3 p-6 mx-auto cursor-pointer ${
                selectedPlan === plan.title ? 'bg-blue-800 text-white' : 'bg-white'
              } rounded-xl shadow-xl`}
              style={{
                transition: 'all 0.3s',
                transform: selectedPlan === plan.title ? 'scale(1.1)' : 'scale(1)',
                zIndex: selectedPlan === plan.title ? 1 : 0,
                border: selectedPlan === plan.title ? '2px solid transparent' : '2px solid #e5e7eb',
              }}
              onClick={() => setSelectedPlan(plan.title)}
            >
              <div
                className={`absolute w-[150px] text-center -top-5 left-4 py-2 text-sm font-bold rounded-lg ${
                  selectedPlan === plan.title ? 'bg-[#51ccde] text-black' : 'bg-blue-700 text-white'
                }`}
              >
                {plan.label}
              </div>
              <div
                className={`text-center border-b ${
                  selectedPlan === plan.title ? 'border-white' : ''
                } pb-6`}
              >
                <h2
                  className={`text-2xl font-semibold ${
                    selectedPlan === plan.title ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.title}
                </h2>
              </div>
              <div className="flex-1 mt-4">
                <h3
                  className={`text-xl font-semibold ${
                    selectedPlan === plan.title ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Features
                </h3>
                <ul className="mt-2 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className={`w-6 h-6 mr-3 ${
                          selectedPlan === plan.title ? 'text-white' : 'text-blue-500'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <button
                  className={`w-[220px] py-2 mt-4 ${
                    selectedPlan === plan.title ? 'bg-[#51ccde] text-black' : 'bg-blue-700 text-white'
                  } font-bold rounded-lg`}
                  onClick={() => handleButtonClick(plan)}
                >
                  {plan.Button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
