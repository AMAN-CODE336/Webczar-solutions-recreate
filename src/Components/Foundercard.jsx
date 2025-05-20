import React from 'react';
import { Link } from "react-router-dom";

const FounderCard = () => {
  return (
    <section className="relative bg-[#f2f0e9] h-auto text-black py-8 px-4 sm:px-0 md:px-20 flex flex-col md:flex-row items-center gap-6 md:gap-8 rounded-lg shadow-lg overflow-hidden">
    {/* Borders remain the same */}
    <div className="absolute top-0 left-1/2 w-1/2 h-1 bg-indigo-500"></div>
    <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-indigo-500"></div>
    <div className="absolute bottom-0 left-0 w-1 h-1/2 bg-indigo-500"></div>
    <div className="absolute top-0 right-0 w-1 h-1/2 bg-indigo-500"></div>
  
    {/* Image Section - Removed horizontal padding for sm screens */}
    <div className="w-full md:w-1/2 sm:px-0 px-4">
      <img
        src="/founder.jpg"
        alt="Founder"
        className="rounded-md w-full object-cover h-[280px] sm:h-[350px] md:h-auto"
      />
    </div>
  
    {/* Text Section - Adjusted text sizes for mobile */}
    <div className="w-full md:w-1/2 space-y-3 md:space-y-4 text-center md:text-left">
      <h2 className="text-xl sm:text-3xl md:text-4xl font-playfair font-bold">
        Gagan Kalra
      </h2>
      <p className="text-xs sm:text-base font-semibold text-blue-700 italic">
      Company Head, Webczar solutions
      </p>
      <p className="text-gray-700 font-inter text-xs sm:text-base leading-relaxed">
      Rooted in unwavering integrity and purposeful leadership, I embody the spirit of direction. With a clear vision and a drive to shape a better tomorrow, I lead Webczar Solutions with the belief that digital solutions should create meaningful, lasting impact. Under the initiative Blacklisted, we set ourselves apart by turning intention into purposeful action.


      </p>
  
      {/* Stats - Adjusted spacing for mobile */}
      <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-6 mt-3 md:mt-4">
        <div className="text-center sm:text-left">
          <p className="text-xl sm:text-3xl font-bold">12+</p>
          <p className="text-xs sm:text-sm text-gray-600">Years Of Experience</p>
        </div>
        <div className="border-t sm:border-t-0 sm:border-l border-gray-400 pt-3 sm:pt-0 sm:pl-6 text-center sm:text-left">
          <p className="text-xl sm:text-3xl font-bold">200+</p>
          <p className="text-xs sm:text-sm text-gray-600">Projects Completed</p>
        </div>
        <div className="border-t sm:border-t-0 sm:border-l border-gray-400 pt-3 sm:pt-0 sm:pl-6 text-center sm:text-left">
          <p className="text-xl sm:text-3xl font-bold">5</p>
          <p className="text-xs sm:text-sm text-gray-600">Awards</p>
        </div>
      </div>
  
      {/* Button - Adjusted size for mobile */}
     <Link to={"/company"}>
     <button className="mt-4 md:mt-6 px-5 py-2 text-sm md:text-base border-2 border-blue-600 text-black font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 relative z-10">
        meet the Team
      </button>
      </Link> 
    </div>
  </section>
  
  );
};

export default FounderCard;
