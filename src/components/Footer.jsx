import React from 'react';
import Logo from "../assets/Logo.png";
import Phone from "../assets/phoneicon.png";
import Mail from "../assets/mailicon.png";
import Loc from "../assets/locicon.png";
import {
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-14 px-14 grid lg:grid-cols-3 gap-8 text-gray-300 text-center lg:text-left'>
      <div className="flex flex-col items-center lg:items-start">
        <img src={Logo} alt="Logo" className="mb-2 w-[150px] h-[150px]" />
        <p className='text-[color:#0075C2] md:max-w-[90%] lg:max-w-[70%] text-center lg:text-left ml-0 mr-0'>
          Empowering students with personalized education at home
        </p>
        <div className='flex pt-2 lg:ml-7 justify-center lg:justify-start'>
          <a href="https://www.instagram.com/sapienceeduconnect/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="lg:ml-3" color='#0075C2' size={25} />
          </a>
          <a href="https://www.linkedin.com/in/sapience-edu-connect-73719331b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="ml-3" color='#0075C2' size={25} />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start mr-0 ml-0">
        <div className="flex mb-4">
          <a href='#' className='pb-2 text-[color:#0075C2] mr-1'>About Us |</a>
          <a href='#' className='pb-2 text-[color:#0075C2] mr-1'>Demo |</a>
          <a href='#' className='pb-2 text-[color:#0075C2]'>Tuition Enquiry</a>
        </div>
        <h2 className="text-[color:#0075C2] font-bold text-3xl mt-5">Get in Touch</h2>
        <div className="text-[color:#0075C2] mt-3">
          <div className="flex flex-col items-left lg:items-start">
            <a href="tel:+1234567890" className="flex items-center mb-2 text-base">
              <div className="w-5 h-5 mr-2 mb-2 mt-3">
                <img src={Phone} alt="Phone Icon" />
              </div>
              <span>+1 (234) 567-890</span>
            </a>
            <a href="info@sapienceconnect.com" className="flex items-center mb-2 text-base">
              <div className="w-5 h-5 mr-2">
                <img src={Mail} alt="Mail Icon" />
              </div>
              <span>info@sapienceconnect.com</span>
            </a>
          </div>
          <div className="flex items-start">
            <a
              href="https://maps.app.goo.gl/T4ykjrUS5yY8xCgc9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start text-base"
            >
              <div className="w-14 h-14 mr-2 mb-2 pt-2">
                <img src={Loc} alt="Location Icon" />
              </div>
              <span className="text-left">
                3rd Floor, Block B, Global Avenue, Opposite to South Indian Bank, Thoppinmoola, Poothole, Thrissur - 680004
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className='flex justify-between md:w-[95%] my-6'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d245.17584457295533!2d76.1984169!3d10.5153498!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef000efda2b7%3A0x5721cf1d232060bc!2sSapience%20Edu%20Connect%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1722011955600!5m2!1sen!2sin"
          width="100%"
          height="200"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Google Maps"
          className="border-0 w-full h-full"
        />
      </div>
    </div>
  );
}

export default Footer;
