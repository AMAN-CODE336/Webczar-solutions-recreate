import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
const faqs = [
    {
      question: "What makes your services different from others in the market?",
      answer:
        "We focus on personalized solutions tailored to your business needs, ensuring long-term success rather than just short-term fixes. Our commitment to quality, transparency, and innovation sets us apart.",
    },
    {
      question: "Can I customize my service package based on my requirements?",
      answer:
        "Absolutely. We offer flexible service bundles. Whether you're a startup or an enterprise, we tailor our offerings to match your goals, budget, and timelines.",
    },
    {
      question: "How do you ensure data security and confidentiality?",
      answer:
        "We follow industry-standard security protocols, including end-to-end encryption, secure cloud storage, and regular audits. Your data privacy is our top priority.",
    },
    {
      question: "Do you offer white-label solutions?",
      answer:
        "Yes. If you’re an agency or a reseller, we offer white-label options so you can deliver our services under your own brand seamlessly.",
    },
    {
      question: "What is the typical turnaround time for a project?",
      answer:
        "Turnaround time depends on project scope. A basic website may take 1–2 weeks, while larger systems might require 4–8 weeks. We always provide a clear timeline upfront.",
    },
    {
      question: "Will I get a dedicated point of contact during the project?",
      answer:
        "Yes. You'll be assigned a dedicated project manager who ensures smooth communication, milestone tracking, and timely delivery throughout the project lifecycle.",
    },
  ];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
 useEffect(()=>{
  window.scrollTo(0, 0)
 },[])


  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <> 
       <div className="  flex flex-col items-center justify-center min-h-screen text-center px-6">
    <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">
    Got Questions? We’ve Got You.        </h1>
    <p className="text-lg font-semibold md:text-xl text-gray-300 mb-6 max-w-2xl">
    We’re here to make things easy. Check out answers to the things our clients ask us most.
</p>
    <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
    Reach Out 
    </button>
  </div>

    <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-blue-200 rounded-xl shadow hover:shadow-md transition duration-300"
          >
            <div
              className="flex justify-between items-center cursor-pointer px-6 py-5"
              onClick={() => toggleIndex(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h3>
              <span className="text-blue-600 text-xl">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>

            {activeIndex === index && (
              <div className="px-6 pb-5 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>

    <div className="px-4 sm:px-6 lg:px-34 mt-34">
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

  );
};

export default FAQ;
