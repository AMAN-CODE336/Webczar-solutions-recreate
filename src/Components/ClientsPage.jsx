import { useEffect } from "react";
import ClientCard from "./Clientcard";
import { Link } from "react-router-dom";
export default function ClientsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const logos = [
    {
      name: "Chandigarh club LTD",
      img: "/Images/Clients-page/client-1-Photoroom.png",
    },
    {
      name: "investors clinic",
      img: "/Images/Clients-page/client-2-Photoroom.png",
    },
    {
      name: "Clifton valley",
      img: "/Images/Clients-page/client-3-Photoroom.png",
    },
    {
      name: "chester hills",
      img: "/Images/Clients-page/client-4-Photoroom.png",
    },
    { name: "KBD", img: "/Images/Clients-page/client-5-Photoroom.png" },
    {
      name: "jubilee group",
      img: "/Images/Clients-page/client-6-Photoroom.png",
    },
    { name: "psp group", img: "/Images/Clients-page/client-7-Photoroom.png" },
    {
      name: "subhash mangat & group",
      img: "/Images/Clients-page/client-8-Photoroom.png",
    },
    {
      name: "subhash mangat",
      img: "/Images/Clients-page/client-9-Photoroom.png",
    },
    { name: "Mindlabz", img: "/Images/Clients-page/client-10-Photoroom.png" },
    {
      name: "ashoka textiles",
      img: "/Images/Clients-page/client-11-Photoroom.png",
    },
    { name: "jagmohan", img: "/Images/Clients-page/client-12-Photoroom.png" },
    { name: "NEXA", img: "/Images/Clients-page/client-13-Photoroom.png" },
    { name: "NEXA", img: "/Images/Clients-page/client-14-Photoroom.png" },
    { name: "NEXA", img: "/Images/Clients-page/client-15-Photoroom.png" },
    { name: "NEXA", img: "/Images/Clients-page/client-16-Photoroom.png" },
    { name: "NEXA", img: "/Images/Clients-page/client-17-Photoroom.png" },
    { name: "NEXA", img: "/Images/Clients-page/client-18-Photoroom.png" },
    { name: "NEXA", img: "/Images/Clients-page/client-19-Photoroom.png" },
    { name: "NEXA", img: "/Images/Clients-page/client-20-Photoroom.png" },
    { name: "NEXA", img: "/Images/Clients-page/client-21-Photoroom.png" },
    { name: "NEXA", img: "/Images/Clients-page/client-22-Photoroom.png" },
    { name: "NEXA", img: "/Images/Clients-page/client-23-Photoroom.png" },
    { name: "NEXA", img: "/Images/Clients-page/client-24-Photoroom.png" },
    { name: "NEXA", img: "/Images/Clients-page/client-25-Photoroom.png" },
    { name: "NEXA", img: "/Images/Clients-page/client-26-Photoroom.png" },
    { name: "NEXA", img: "/Images/Clients-page/client-27-Photoroom.png" },
    { name: "NEXA", img: "/Images/Clients-page/client-28-Photoroom.png" },
    { name: "NEXA", img: "/Images/Clients-page/client-29-Photoroom.png" },
  ];
  return (
    <>
      <div className="  flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">
          Trusted by Industry Leaders and Visionary Startups
        </h1>
        <p className="text-lg font-semibold md:text-xl text-gray-300 mb-6 max-w-2xl">
          We’re proud to collaborate with brands that are shaping the future.
          Our client relationships are built on trust, transparency, and
          transformative results.{" "}
        </p>
        <Link to={"/contact"}>
          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Get in Touch →
          </button>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row mt-24 lg:gap-20 px-4 lg:px-0">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 max-w-7xl mx-auto text-center lg:text-center mb-12 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Success That Speaks for Itself
          </h2>
          <p className="text-base lg:text-lg px-4 sm:px-12 lg:px-24 text-gray-300">
            Our collaborations don’t just launch products — they fuel long-term
            business growth. Every project we touch is driven by data,
            creativity, and results that matter.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:gap-12 px-4 sm:px-8 ">
          {/* Revenue */}
          <div>
            <h2 className="text-2xl lg:text-4xl text-[#006AFE] mb-1">
              Revenue Empowered
            </h2>
            <div className="flex items-end gap-2">
              <h2 className="text-white text-5xl lg:text-[5rem] font-bold">
                50M
              </h2>
              <p className="text-white text-5xl lg:text-[5rem] font-bold">+</p>
            </div>
          </div>

          {/* Reach */}
          <div>
            <h2 className="text-2xl lg:text-4xl text-[#006AFE] mb-1">
              Organic Reach Achieved
            </h2>
            <div className="flex items-end gap-2">
              <h2 className="text-white text-5xl lg:text-[5rem] font-bold">
                7M+
              </h2>
              <p className="text-white text-xl lg:text-[2rem]">Visitors</p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-2xl lg:text-4xl text-[#006AFE] mb-1">
              Solutions Delivered
            </h2>
            <div className="flex items-end gap-2">
              <h2 className="text-white text-5xl lg:text-[5rem] font-bold">
                250+
              </h2>
              <p className="text-white text-xl lg:text-[2rem]">Projects</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-white mt-28 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Our Work Speaks Through Our Clients
        </h2>
        <p className="text-lg text-gray-300">
          Proud partners of 25+ growing and global companies.
        </p>
      </div>

      <div className="bg-black py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-neutral-900 flex items-center justify-center h-28 p-4 rounded-md shadow-md hover:bg-neutral-800 transition"
            >
              <img
                src={logo.img}
                alt={logo.name}
                className="max-h-28 object-contain filter grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <div className=" px-8 lg:px-24 mt-42 space-y-3">
        <h2 className="text-3xl font-md text-white font-inter">
          Voices Behind the Vision{" "}
        </h2>
        <p className="text-xl font-semibold text-[#006AFE] italic">
          Clients Chronicles — crafted through trust, driven by results.
        </p>
        <p className="text-md text-white">
          Explore the milestones, moments, and meaningful stories from those
          who’ve grown with us.
        </p>
      </div>

      <div className="space-y-4 lg:flex lg:space-y-0 justify-around p-12 mt-14 gap-6 lg:gap-6 sm:gap-6">
        <ClientCard
          image="Images/closeup-shot-.jpg"
          name="Aman Anand"
          role="Director"
          company="Fima CF India"
          quote="Working with them was seamless and results-driven — truly exceeded expectations."
        />

        <ClientCard
          image="Images/closeup-shot-.jpg"
          name="Aman Anand"
          role="Director"
          company="Fima CF India"
          quote="Working with them was seamless and results-driven — truly exceeded expectations."
        />

        <ClientCard
          image="Images/closeup-shot-.jpg"
          name="Aman Anand"
          role="Director"
          company="Fima CF India"
          quote="Working with them was seamless and results-driven — truly exceeded expectations."
        />

        <ClientCard
          image="Images/closeup-shot-.jpg"
          name="Aman Anand"
          role="Director"
          company="Fima CF India"
          quote="Working with them was seamless and results-driven — truly exceeded expectations."
        />
      </div>
    </>
  );
}
