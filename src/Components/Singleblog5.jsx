import React from "react";
import { useEffect } from "react";
export default function SingleBlog5() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" text-white  font-sans">
      {/* Header */}
      <header className="bg-black mt-20 text-white py-6 px-4 md:px-20">
        <h1 className="text-3xl md:text-5xl font-bold">
          Responsive Design with Tailwind CSS{" "}
        </h1>
        <p className="text-gray-500 text-sm md:text-base mt-2">
          Learn how Tailwind makes building mobile-friendly websites faster and
          easier.{" "}
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
            backgroundImage: `url('Images/Blogs-imgs/Modern Workspace Setup.jpeg')`,
          }}
        ></div>
      </div>

      {/* Content Section */}
      <main className="px-4 md:px-20 py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Design That Adapts to Every Screen
        </h2>
        <p className="text-lg leading-relaxed text-gray-500 mb-6">
          In today’s mobile-first world, delivering a seamless experience across
          devices is not optional—it’s essential. At Webczar Solution, we
          leverage Tailwind CSS to craft responsive designs that are not only
          visually stunning but also highly functional on every screen size,
          from smartphones to desktops.{" "}
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3"></h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-500">
          <li>
            <strong>Mobile-first by default</strong> - Tailwind promotes
            building layouts that adapt smoothly to different screen sizes.
          </li>
          <li>
            <strong>Utility-first classes</strong> - Speed up development with
            easy-to-use utility classes that eliminate bloated custom CSS.
          </li>
          <li>
            <strong>Consistent breakpoints</strong> - Predefined responsive
            breakpoints simplify design tweaks for various devices.
          </li>
          <li>
            <strong>Rapid prototyping</strong> - Test and adjust layouts
            quickly, directly in the markup, saving valuable dev time.
          </li>
          <li>
            <strong>Built-in flexibility</strong> - Create complex grids,
            responsive spacing, and adaptive components effortlessly.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          Crafting User Experiences That Flow
        </h3>
        <p className="text-gray-500 mb-6">
          Responsive design is about more than just resizing—it’s about
          delivering value and usability across contexts. Whether users are on
          the go or at their desks, Tailwind CSS ensures your website looks and
          performs its best. At Webczar Solution, we combine this flexibility
          with creative strategy to build sites your audience will love to
          explore.
        </p>

        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-500 mb-6">
          “With Tailwind CSS, responsiveness isn’t an extra feature—it’s built
          into the foundation of every project.”{" "}
        </blockquote>
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#002244] to-[#006AFE] py-10 px-4 md:px-20 text-center">
        <h3 className="text-2xl font-semibold mb-2">
          Ready to Make Your Website Truly Responsive?{" "}
        </h3>
        <p className="mb-4 text-black">
          Let’s future-proof your digital presence with Tailwind-powered
          responsive design. From startups to enterprises, we help brands build
          mobile-ready websites that captivate and convert.
        </p>
        <button className="border-white border text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
