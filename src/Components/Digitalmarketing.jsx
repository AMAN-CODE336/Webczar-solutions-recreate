import React from "react";
import { data } from "react-router-dom";

const DigitalMarketing = () => {

 const data =  [
        {
          icon: "🔍",
          title: "SEO (Search Engine Optimization)",
          desc: "Rank higher on search engines and attract quality organic traffic to your website.",
        },
        {
          icon: "📱",
          title: "Social Media Marketing",
          desc: "Grow your presence across platforms like Instagram, Facebook, and LinkedIn.",
        },
        {
          icon: "🎯",
          title: "Pay-Per-Click Advertising (PPC)",
          desc: "Launch high-performing ad campaigns on Google & social media with better ROI.",
        },
        {
          icon: "📝",
          title: "Content Marketing",
          desc: "Engaging content that builds trust and keeps your audience coming back.",
        },
        {
          icon: "📧",
          title: "Email Marketing",
          desc: "Nurture leads and retain customers with personalized, automated email flows.",
        },
        {
          icon: "📊",
          title: "Analytics & Strategy",
          desc: "Actionable insights through real-time analytics & performance tracking.",
        },
      ]
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className=" mt-28 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="inline-block bg-white text-blue-600 text-sm font-semibold px-3 py-1 rounded-full shadow mb-4">
              #1 Digital Marketing Experts
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
               Amplify Your Online Presence
            </h1>
            <p className="text-lg text-white/90">
              At <strong>webczar solutions</strong>, we craft tailored strategies to boost your brand visibility,
              attract targeted traffic, and convert visitors into loyal customers.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
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
      <div className="p-28 ">
      <section className="bg-gray-50  rounded-lg border-t-3 border-b-3 border-blue-600 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800"> Why Choose Us?</h2>
          <ul className="text-left list-disc list-inside space-y-4 text-gray-700 text-lg">
            <li><strong>Tailored Campaigns</strong> built around your business goals.</li>
            <li><strong>Data-Driven Strategy</strong> to ensure growth and transparency.</li>
            <li><strong>Expert Team</strong> with real experience across industries.</li>
            <li><strong>Creative + Technical Blend</strong> for winning digital solutions.</li>
          </ul>
        </div>
      </section></div>

      {/* Call to Action */}
      <div className="p-28 ">
      <section className="bg-blue-600 text-white rounded-lg border-t-3 border-b-3 border-white py-16 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4"> Ready to Grow Online?</h2>
          <p className="mb-6 text-lg">
            Let us handle your digital marketing while you focus on running your business. Schedule a free consultation today and take the first step toward digital success.
          </p>
          <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full shadow hover:bg-blue-100 transition-all duration-300">
          Contact Us Now
          </button>
        </div>
      </section>
      </div>
    </div>
  );
};

export default DigitalMarketing;
