import React from "react";
import { useEffect } from "react";
export default function SingleBlog3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" text-white  font-sans">
      {/* Header */}
      <header className="bg-black text-white py-6 px-4 md:px-20">
        <h1 className="text-3xl md:text-5xl font-bold">
          Why Webczar Solutions is the Best Software Development Agency in
          Chandigarh
        </h1>
        <p className="text-gray-500 text-sm md:text-base mt-2">
          Crafting intelligent, scalable, and innovative software solutions
          tailored to your business needs.
        </p>
      </header>

      {/* Author & Metadata */}
      <section className="px-4 md:px-20 py-4 flex flex-col md:flex-row items-start md:items-center justify-between text-sm border-b border-gray-500">
        <div>
          <p className="font-medium">By Author</p>
        </div>
        <p className="text-gray-500 mt-2 md:mt-0">Published on May 14, 2025</p>
      </section>

      {/* Hero Image */}
      <div className="flex justify-center items-center">
        <div
          className="w-[70%]  h-64 md:h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url('/Images/Blogs-imgs/3rd-blog.jpeg')`,
          }}
        ></div>
      </div>

      {/* Content Section */}
      <main className="px-4 md:px-20 py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Innovation That Drives Digital Transformation{" "}
        </h2>
        <p className="text-lg leading-relaxed text-gray-500 mb-6">
          Software is the engine behind today’s most successful businesses. At
          Webczar Solution, we go beyond code to build smart, custom software
          solutions that empower organizations to streamline operations, scale
          efficiently, and stay ahead in a competitive market. Whether you're a
          startup building your MVP or an enterprise transforming legacy
          systems, our experienced developers bring ideas to life through
          innovative technology.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          What Makes Our Software Solutions Stand Out{" "}
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-500">
          <li>Custom-built software tailored to your business goals</li>
          <li>Scalable architecture to grow with your operations</li>
          <li>Agile development for faster delivery and adaptability</li>
          <li>Seamless integration with your existing systems</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          Solutions That Evolve With You{" "}
        </h3>
        <p className="text-gray-500 mb-6">
          We believe software should be flexible, future-ready, and built to
          solve specific challenges—not just generic templates. At Webczar
          Solution, we start with understanding your business model, then
          architect smart, reliable applications that evolve with your needs.
        </p>

        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-500 mb-6">
          "Great software is built on clarity, purpose, and precision—and that’s
          what we deliver every time."
        </blockquote>
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#002244] to-[#006AFE] py-10 px-4 md:px-20 text-center">
        <h3 className="text-2xl font-semibold mb-2">
          Ready to Turn Your Software Vision into Reality?{" "}
        </h3>
        <p className="mb-4 text-black">
          Partner with Webczar Solution and take your digital transformation
          forward with scalable, secure, and high-performing software solutions
          built for your business. Let’s build the future, together.
        </p>
        <button className="border-white border text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
