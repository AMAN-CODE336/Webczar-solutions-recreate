import React from "react";
import { useEffect } from "react";
export default function SingleBlog2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" text-white  font-sans">
      {/* Header */}
      <header className="bg-black mt-20 text-white py-6 px-4 md:px-20">
        <h1 className="text-3xl md:text-5xl font-bold">
          Unlocking Digital Success with Webczar Solution: The Best Web
          Development Company{" "}
        </h1>
        <p className="text-gray-500 text-sm md:text-base mt-2">
          Building powerful digital platforms that connect you with customers
          instantly.
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
            backgroundImage: `url('/Images/Blogs-imgs/web-dev-service (1).jpg')`,
          }}
        ></div>
      </div>

      {/* Content Section */}
      <main className="px-4  md:px-20 py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Building Digital Experiences That Drive Growth{" "}
        </h2>
        <p className="text-lg leading-relaxed text-gray-500 mb-6">
          In today’s fast-paced digital economy, your website isn’t just a
          brochure—it’s your brand’s voice, your virtual storefront, and often
          the first impression you make. At Webczar Solution, we specialize in
          building dynamic, responsive, and user-centric websites that help
          businesses thrive in an increasingly digital world.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          Why Your Business Needs Smart Web Development
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-500">
          <li>24/7 online presence that enhances credibility and trust</li>
          <li>Seamless customer experiences that improve engagement</li>
          <li>
            Mobile-optimized platforms that reach customers anywhere, anytime
          </li>
          <li>
            Fast-loading, SEO-ready websites to increase visibility and leads
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          Design. Develop. Deliver.{" "}
        </h3>
        <p className="text-gray-500 mb-6">
          From concept to code, our web development process focuses on results.
          With a keen eye for UI/UX, we create interfaces that are intuitive and
          engaging. Our tech stack ensures your website is fast, secure, and
          scalable for future growth.
          <br />
          We don't just build websites—we build customer journeys.
        </p>

        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-500 mb-6">
          "Your website should do more than exist—it should perform, convert,
          and grow with your business."
        </blockquote>
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#002244] to-[#006AFE] py-10 px-4 md:px-20 text-center">
        <h3 className="text-2xl font-semibold mb-2">
          Ready to Transform Your Digital Presence?{" "}
        </h3>
        <p className="mb-4 text-black">
          Let Webczar Solution turn your vision into a fully functional,
          performance-driven website that speaks to your audience and supports
          your mission. Let’s make your digital success a reality—one page at a
          time.
        </p>
        <button className="border-white border text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
