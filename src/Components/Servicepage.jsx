import React from "react";
import {
  FaCloud,
  FaCode,
  FaShieldAlt,
  FaChartLine,
  FaMobileAlt,
} from "react-icons/fa";
import CountUp from "./Countup";
import SpotlightCard from "./Spotlightcard";
import { FiActivity, FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { MdDesignServices, MdStorefront } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Servicepage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const features = [
    {
      icon: <FaCloud className="text-4xl mb-4" />,
      title: "Cloud Integration",
      desc: "Seamlessly connect apps and services with cloud solutions.",
    },
    {
      icon: <FaCode className="text-4xl mb-4" />,
      title: "Custom Development",
      desc: "Tailored web and software solutions built from scratch.",
    },
    {
      icon: <FaShieldAlt className="text-4xl mb-4" />,
      title: "Cybersecurity",
      desc: "Protect your business with enterprise-grade security.",
    },
    {
      icon: <FaChartLine className="text-4xl mb-4" />,
      title: "Data Analytics",
      desc: "Drive decisions through powerful data insights.",
    },
    {
      icon: <FaMobileAlt className="text-4xl mb-4" />,
      title: "Mobile Solutions",
      desc: "Build high-performance mobile apps for all platforms.",
    },
  ];
  return (
    <>
      <div className="  flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">
          Solutions That Spark Growth
        </h1>
        <p className="text-lg font-semibold md:text-xl text-gray-300 mb-6 max-w-2xl">
          From strategy to execution, we craft digital experiences that elevate
          brands, streamline operations, and inspire results.{" "}
        </p>
        <Link to={"/contact"}>
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
        Book a Demo →
        </button>
        </Link>
      </div>

      <section className="bg-black text-[#006AFE]  py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center border-r last:border-none border-gray-600 px-4"
            >
              {feature.icon}
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm mt-1 text-white">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex mt-24 flex-col md:flex-row">
  <div className="max-w-7xl w-full md:w-1/2 mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold mb-4 text-white">Why Choose Us ?</h2>
    <p className="text-lg px-4 md:px-24 text-gray-300">
      We combine innovation, expertise, and reliability to deliver IT
      solutions that drive real business impact. Our team is dedicated to
      building technology that scales with your success.
    </p>
  </div>

  <div className="flex flex-col px-4 md:pe-12 space-y-6 md:space-y-0 md:ml-12">
    <div>
      <h2 className="text-3xl md:text-4xl text-[#006AFE] uppercase">
        Clients revenue
      </h2>
      <div className="flex">
        <CountUp
          from={0}
          to={100}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text text-white text-[4rem] md:text-[6rem]"
        />
        <h2 className="text-white text-[4rem] md:text-[6rem]">Lakhs+</h2>
      </div>
    </div>

    <div>
      <h2 className="text-3xl md:text-4xl text-[#006AFE] uppercase">
        Projects delivered
      </h2>
      <div className="flex">
        <CountUp
          from={0}
          to={200}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text text-white text-[4rem] md:text-[6rem]"
        />
        <h2 className="text-white text-[4rem] md:text-[6rem]">+</h2>
      </div>
    </div>

    <div>
      <h2 className="text-3xl md:text-4xl text-[#006AFE] uppercase">
        Countries served
      </h2>
      <div className="flex">
        <CountUp
          from={0}
          to={9}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text text-white text-[4rem] md:text-[6rem]"
        />
        <h2 className="text-white text-[4rem] md:text-[6rem]">+</h2>
      </div>
    </div>
  </div>
</div>


<div>
  <div className="px-4 md:px-16 mt-28 space-y-3">
    <h2 className="text-2xl font-md text-white">Our Core Services</h2>
    <p className="text-3xl font-semibold text-[#006AFE]">
      Smart Solutions to Power Your Digital Journey
    </p>
    <p className="text-md text-white">
      Explore our full suite of software and digital marketing services
      designed to boost visibility, engagement, and performance.
    </p>
    <p className="text-md text-white">
      Whether you're building a brand or scaling operations, our tailored
      solutions are built to match your goals.
    </p>
  </div>

  <div className="flex flex-col gap-12 mt-24 md:gap-8">
    <div className="flex flex-col md:flex-row md:justify-around ps-4 gap-6 pe-4 space-y-6 md:space-y-0">
      <SpotlightCard
        className="custom-spotlight-card w-full md:w-1/4"
        spotlightColor="rgba(122, 233, 243, 0.2)"
      >
        <div className="p-4 gap-4">
          <div className="text-5xl mb-4 text-white">
            <FiPenTool />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-white font-semibold">Logo Design</h3>
            <p className="text-white text-lg">
              Crafting memorable identities that speak your brand’s language.
            </p>
          </div>
        </div>
      </SpotlightCard>

      <SpotlightCard
        className="custom-spotlight-card w-full md:w-1/4"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="p-4 gap-4">
          <div className="text-5xl mb-4 text-white">
            <FaLaptopCode />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-white font-semibold">Web Development</h3>
            <p className="text-white text-lg">
              Transforming ideas into interactive digital experiences.
            </p>
          </div>
        </div>
      </SpotlightCard>

      <SpotlightCard
        className="custom-spotlight-card w-full md:w-1/4"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="p-4 gap-4">
          <div className="text-5xl mb-4 text-white">
            <FaChartLine />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-white font-semibold">Digital Marketing</h3>
            <p className="text-white text-lg">
              Turning clicks into clients with intelligent marketing.
            </p>
          </div>
        </div>
      </SpotlightCard>

      <SpotlightCard
        className="custom-spotlight-card w-full md:w-1/4"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="p-4 gap-4">
          <div className="text-5xl mb-4 text-white">
            <FiSearch />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-white font-semibold">SEO Optimization</h3>
            <p className="text-white text-lg">
              Climbing the ranks with smart strategies that turn traffic into
              results.
            </p>
          </div>
        </div>
      </SpotlightCard>
    </div>

    <div className="  md:flex flex-row md:justify-around ps-4 gap-6 pe-4 space-y-6 md:space-y-0">
      <SpotlightCard
        className="custom-spotlight-card w-full md:w-1/4"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="p-4 gap-4">
          <div className="text-5xl mb-4 text-white">
            <FaScrewdriverWrench />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-white font-semibold">Custom Software</h3>
            <p className="text-white text-lg">
              Solving real problems with smart, scalable software.
            </p>
          </div>
        </div>
      </SpotlightCard>

      <SpotlightCard
        className="custom-spotlight-card w-full md:w-1/4"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="p-4 gap-4">
          <div className="text-5xl mb-4 text-white">
            <MdDesignServices />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-white font-semibold">Graphic Design</h3>
            <p className="text-white text-lg">
              Visually striking graphics that communicate your message clearly
              and creatively.
            </p>
          </div>
        </div>
      </SpotlightCard>

      <SpotlightCard
        className="custom-spotlight-card w-full md:w-1/4"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="p-4 gap-4">
          <div className="text-5xl mb-4 text-white">
            <MdStorefront />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-white font-semibold">E-commerce Development</h3>
            <p className="text-white text-lg">
              Build seamless and scalable online stores that convert.
            </p>
          </div>
        </div>
      </SpotlightCard>

      <SpotlightCard
        className="custom-spotlight-card w-full md:w-1/4"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="p-4 gap-4">
          <div className="text-5xl mb-4 text-white">
            <HiOutlineGlobeAlt />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-white font-semibold">Blockchain Development</h3>
            <p className="text-white text-lg">
              Building secure, decentralized solutions that drive trust and
              innovation.
            </p>
          </div>
        </div>
      </SpotlightCard>
    </div>
  </div>
</div>


      <section className="bg-black  text-white py-20 px-4 mt-28 md:px-20">
        <div className=" ">
          <h2 className="text-4xl md:text-4xl font-extrabold leading-tight mb-4">
            breaking barriers in the digital era
          </h2>
          <p className="text-lg text-[#f2f2f2] italic mb-6">
            many businesses struggle to keep pace with evolving tech. we turn
            that challenge into opportunity through powerful digital solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 mt-16 gap-10 items-center">
          {/* Left Column - Image */}
          <img
            src="Images/Service-page /map-img-Photoroom (2) (1).png"
            alt="Professional IT Support"
            className="rounded-xl shadow-lg"
          />

          {/* Right Column - Content */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              empowering businesses with smart technology
            </h3>
            <p className="text-base text-gray-300 mb-6">
              We help you optimize workflows, strengthen digital presence, and
              scale your operations using future-ready technologies and expert
              strategy.
            </p>

            <ul className="space-y-3 text-lg text-gray-200">
              <li className="flex items-start gap-2">
                <span className="text-[#006AFE]  text-3xl">
                  <MdDone />{" "}
                </span>{" "}
                Custom software tailored to your goals
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#006AFE]  text-3xl">
                  <MdDone />{" "}
                </span>{" "}
                Robust IT infrastructure & cloud solutions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#006AFE]  text-3xl">
                  <MdDone />{" "}
                </span>{" "}
                Scalable apps with intuitive UI/UX
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#006AFE] text-3xl">
                  <MdDone />{" "}
                </span>{" "}
                Data-driven marketing & SEO expertise
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#006AFE] text-3xl">
                  <MdDone />{" "}
                </span>{" "}
                Reliable tech support & performance monitoring
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-34 mt-44">
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
        <Link to={"/contact"}>
        <button className="relative border-2 border-white px-6 sm:px-8 py-2.5 sm:py-3 font-medium rounded-md hover:bg-white hover:text-[#006AFE] transition duration-300">
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
}
