import React from "react";
import { useEffect } from "react";
export default function SingleBlog1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" text-white  font-sans">
      {/* Header */}
      <header className="bg-black text-white py-6 px-4 md:px-20">
        <h1 className="text-3xl md:text-5xl font-bold">
          Connecting Businesses in Seconds: The Power of Bulk SMS with Webczar
          Solution
        </h1>
        <p className="text-gray-500 text-sm md:text-base mt-2">
          Revolutionize your communication and outreach with lightning-fast,
          cost-effective messaging.
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
            backgroundImage: `url('Images/Blogs-imgs/bulk-sms (1).jpg')`,
          }}
        ></div>
      </div>

      {/* Content Section */}
      <main className="px-4 md:px-20 py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Communication That Builds Business
        </h2>
        <p className="text-lg leading-relaxed text-gray-500 mb-6">
          In today’s hyper-connected world, reaching your customers at the right
          time with the right message is everything. At Webczar Solution, we
          empower businesses to engage, inform, and convert audiences through
          one of the most effective marketing tools available—Bulk SMS Services.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          Why SMS Still Reigns Supreme
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-500">
          <li>Instant reach to thousands of customers with just one click</li>
          <li>
            Unmatched open rates, with over 90% of SMS read within 3 minutes
          </li>
          <li>
            No internet required—great for all demographics and device types
          </li>
          <li>
            Perfect for OTPs, alerts, event reminders, and seasonal promotions
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          Building Loyalty, One Message at a Time
        </h3>
        <p className="text-gray-500 mb-6">
          Bulk SMS is more than just marketing. It’s about nurturing
          relationships—sending birthday wishes, exclusive offers, or loyalty
          program updates that make your customers feel valued.
          <br />
          At Webczar Solution, we help you build trust, drive conversions, and
          stay top-of-mind—all with a simple text.{" "}
        </p>

        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-500 mb-6">
          "Quick, direct, and effective—Bulk SMS is the modern handshake in
          digital marketing."
        </blockquote>
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#002244] to-[#006AFE] py-10 px-4 md:px-20 text-center">
        <h3 className="text-2xl font-semibold mb-2">
          Ready to Supercharge Your Customer Engagement?
        </h3>
        <p className="mb-4 text-black">
          Let’s take your communication strategy to the next level with our
          reliable, customizable Bulk SMS solutions. Start today and experience
          what seamless business messaging looks like.{" "}
        </p>
        <button className="border-white border text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
