import ClientCard from "./Clientcard"
import FounderCard from "./Foundercard"
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Company(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);  
  
  return (
        <>
         <div className="  flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">
        Innovating with Purpose, Delivering with Passion
                </h1>
        <p className="text-lg font-semibold md:text-xl text-gray-300 mb-6 max-w-2xl">
        From bold ideas to real-world impact, we empower businesses with tailored solutions that drive progress, foster collaboration, and build lasting value.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold  transition">
          Get Updates
        </button>
      </div>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">Who We Are</h2>
          <p className="text-gray-300 text-lg">
          At Webczar Solution, we are more than just a technology company — we are your digital growth partners. Established with a vision to empower businesses through innovation, we specialize in delivering end-to-end IT services, tailored software solutions, and creative strategies that align with your unique business goals.
<br />
Our team consists of passionate engineers, designers, marketers, and problem-solvers who thrive on challenges. From startups to enterprises, we’ve helped organizations across industries transform their operations, engage customers more effectively, and stay ahead of the competition.
<br />
Driven by innovation, collaboration, and results, we merge technical excellence with business insight — making us a trusted partner in your digital journey.
          </p>
        </div>
        <div className=""><img src="/Images/Company-imgs/comapny-img.png" alt="" className="rounded-lg h-full w-auto" /></div>
      </section>

      {/* Company Pillars Section */}
      <section className="  px-6">
        <h2 className="text-center text-4xl font-bold text-white mb-16">Our Foundation</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#002244] to-[#006AFE] text-black p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-3">Mission</h3>
            <p className="text-white">Delivering scalable, user-centric web and mobile solutions that empower businesses worldwide.</p>
          </div>
          <div className="bg-gradient-to-r from-[#002244] to-[#006AFE] text-black p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-3">Vision</h3>
            <p className="text-white">Becoming the world’s most customer-centric technology firm known for reliability and excellence.</p>
          </div>
          <div className="bg-gradient-to-r from-[#002244] to-[#006AFE] text-black p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-3">Values</h3>
            <p  className="text-white">Integrity, collaboration, innovation, and an unrelenting pursuit of perfection.</p>
          </div>
        </div>
      </section>
 
<div className="mt-34 md:p-28">
<FounderCard/>
</div>

      {/* Company Metrics Section */}
      <section className="py-24  text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Our Impact</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-6xl font-extrabold text-blue-600">250+</p>
            <p className="text-gray-300 mt-2">Projects Delivered</p>
          </div>
          <div>
            <p className="text-6xl font-extrabold text-blue-600">100+</p>
            <p className="text-gray-300 mt-2">Clients Served</p>
          </div>
          <div>
            <p className="text-6xl font-extrabold text-blue-600">10</p>
            <p className="text-gray-300 mt-2">Years of Experience</p>
          </div>
          <div>
            <p className="text-6xl font-extrabold text-blue-600">15+</p>
            <p className="text-gray-300 mt-2">Team Members</p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <div className=" text-center lg:px-24 mt-24 space-y-3">
  <h2 className="text-3xl font-md text-white font-inter">
  Meet the Core Team
  </h2>
  <p className="text-xl font-semibold text-[#006AFE] italic">
  A group of passionate innovators committed to turning your ideas into powerful digital solutions
  </p>
  </div>

<div className="space-y-4 lg:flex lg:space-y-0 justify-around p-12 lg:p-4 mt-14 gap-6 lg:gap-4 sm:gap-6">
  <ClientCard
    image="Images/closeup-shot-.jpg"
    name="Gagan Kalra"
    role="Business Head – Retention"
    // company="Fima CF India"
    quote="Drives retention strategy by focusing on pricing, budgeting, customer satisfaction, and competitive market positioning for growth."
  />

  {/* <ClientCard
    image="/Images/Company-imgs/kajal-thakur.jpg"
    name="Kajal Thakur"
    role="HR & Administration Lead"
    // company="Fima CF India"
    quote="Builds a positive work culture by fostering strong employee relations, resolving concerns, and supporting organizational success."
  /> */}

  <ClientCard
    image="/Images/Company-imgs/manish-gupta.jpg"
    name="Manish Gupta"
    role="Graphic & Multimedia Consultant"
    // company="Fima CF India"
    quote="Brings over two decades of expertise in branding, motion graphics, design, and visual storytelling across multiple countries."
  />

  <ClientCard
    image="/Images/Company-imgs/Shanu-kansal.jpeg"
    name="Abhilasha Kansal"
    role="Sr. Sales Practitioner – Domestic"
    // company="Fima CF India"
    quote="Builds client trust, drives conversions, and strengthens customer relationships through expert support and communication."
  />
</div>

<div className="space-y-4 lg:flex lg:space-y-0 justify-around p-12 lg:p-4 mt-14 gap-6 lg:gap-4 sm:gap-6">
  <ClientCard
    image="Images/Company-imgs/harvinder_webczar.jpeg"
    name="Harvinder Singh"
    role=".NET Developer – CRM & Applications"
    // company="Fima CF India"
    quote="Builds robust web applications with ASP.NET, MVC, ORM tools, and strong front-end and database development skills."
  />

  <ClientCard
    image="/Images/Company-imgs/Aman-preet-singh-webczar.jpeg"
    name="Amanpreet Singh"
    role="Front-end Developer & Designer"
    // company="Fima CF India"
    quote="Expert in front-end design and development with strong skills in HTML, CSS, WordPress, and graphic tools."
  />

  <ClientCard
    image="Images/closeup-shot-.jpg"
    name="Jeenu Maluja"
    role="Senior .NET Developer"
    // company="Fima CF India"
    quote="Brings 15+ years’ experience in C#, ASP.NET, MVC, Angular, JavaScript, and strong expertise in web APIs."
  />

  <ClientCard
    image="/Images/Company-imgs/aman-saini.jpeg"
    name="Aman Saini"
    role="Junior Full Stack Developer"
    // company="Fima CF India"
    quote="Passionate about coding, continuously learning to build efficient and scalable web applications from front-end to back-end."
  />
</div>

<div className=" mt-44">
  <section className="bg-gradient-to-r from-[#002244] to-[#006AFE] text-white rounded-xl p-6 sm:p-8 md:p-16 my-12 relative overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
      <div>
        <p className="text-xs sm:text-sm uppercase text-yellow-200 tracking-wide font-semibold mb-2 sm:mb-3">
          Facing digital challenges?
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Let’s transform your tech needs into impactful results
        </h2>
      </div>

      <div className="flex justify-start md:justify-end mt-4 md:mt-0">
        <Link to={"/contact"}><button className="relative border-2 border-white px-6 sm:px-8 py-2.5 sm:py-3 font-medium rounded-md hover:bg-white hover:text-[#006AFE] transition duration-300">
          get started
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white"></span>
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white"></span>
        </button>
        </Link>
      </div>
    </div>
  </section>
</div>
        
        </>
    )
}