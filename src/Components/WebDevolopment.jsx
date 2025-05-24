import React, { useEffect } from "react";
import { data } from "react-router-dom";

const WebDevolopment = () => {
 useEffect(() => {
    window.scrollTo(0,0)
 } , [])
 const data =  [
    {
      icon: "🌐",
      title: "Custom Website Development",
      desc: "Tailor-made websites that reflect your brand and goals perfectly.",
    },
    {
      icon: "⚙️",
      title: "Web App Development",
      desc: "Dynamic and scalable web applications with rich functionality.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      desc: "Optimized layouts that work beautifully on all screen sizes.",
    },
    {
      icon: "🛒",
      title: "E-Commerce Solutions",
      desc: "Powerful and secure online stores with seamless UX.",
    },
    {
      icon: "🚀",
      title: "Performance Optimization",
      desc: "Speed matters — we ensure lightning-fast load times and clean code.",
    },
    {
      icon: "🔐",
      title: "Secure & Scalable Hosting",
      desc: "Hosting solutions that grow with your business.",
    },
  ]
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className=" mt-28 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="inline-block bg-white text-blue-600 text-sm font-semibold px-3 py-1 rounded-full shadow mb-4">
            #1 Web Development Experts
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Build Fast, Scalable, & Stunning Websites
            </h1>
            <p className="text-lg text-white/90">
              At <strong>webczar solutions</strong>, we create high-performance websites and web apps using the latest technologies, tailored to your business needs.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/Images/person-front-computer-working-html.jpg"
              alt="Digital Marketing Strategy"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">💡 What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 border-t-4 border-blue-500"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <div className=" mt-12 md:pl-28 md:pr-28 ">
      <section className="bg-gray-50  rounded-lg border-t-3 border-b-3 border-blue-600 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800"> Why Choose Us?</h2>
          <ul className="text-left list-disc list-inside space-y-4 text-gray-700 text-lg">
          <li><strong>Pixel-Perfect UI/UX</strong> that delights users and converts.</li>
            <li><strong>Full-Stack Development</strong> from front-end to backend infrastructure.</li>
            <li><strong>Agile Process</strong> with clear timelines and real-time updates.</li>
            <li><strong>Post-Launch Support</strong> for peace of mind and future improvements.</li>
          </ul>
        </div>
      </section></div>

      {/* Call to Action */}
      <div className=" mt-28 md:pl-28 md:pr-28 ">
      <section className="bg-blue-600 text-white rounded-lg border-t-3 border-b-3 border-white py-16 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Great</h2>
          <p className="mb-6 text-lg">
          Whether you need a landing page, an online store, or a complete SaaS platform — we turn your vision into reality with expert web development services.
          </p>
          <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full shadow hover:bg-blue-100 transition-all duration-300">
          Get in Touch
            </button>
        </div>
      </section>
      </div>
    </div>
  );
};

export default WebDevolopment;
