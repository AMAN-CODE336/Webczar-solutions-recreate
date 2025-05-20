import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Blogspage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="  flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">
          Tech Chronicles: Insights that Inspire Innovation
        </h1>
        <p className="text-lg font-semibold md:text-xl text-gray-300 mb-6 max-w-2xl">
          Explore expert opinions, case studies, and the latest tech trends —
          designed to keep decision-makers, developers, and digital pioneers
          ahead of the curve.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Get Updates
        </button>
      </div>

      <section className="bg-black text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3 text-white">
              Insights from the Tech Edge
            </h2>
            <p className="text-gray-400">
              Stay updated with trends, strategies, and innovations that drive
              smart IT decisions.
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
           
           <div className="bg-zinc-900 hover:bg-zinc-800 rounded-xl p-6 transition duration-300 border border-zinc-700 shadow-md">
              <img
                src="Images/Blogs-imgs/bulk-sms (1).jpg"
                alt="AI Infrastructure"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-3">
              Connecting Businesses in Seconds: The Power of Bulk SMS with Webczar Solution
              </h3>
              <p className="text-gray-400 text-sm">
              Revolutionize your communication and outreach with lightning-fast, cost-effective messaging.

              </p>
               <Link to={"/Blog1"}>
              <button
                href="#"
                className="mt-4 inline-block text-[#00D9FF] hover:underline"
              >
                Read more →
              </button>
              </Link>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-zinc-900 hover:bg-zinc-800 rounded-xl p-6 transition duration-300 border border-zinc-700 shadow-md">
              <img
                src="/Images/Blogs-imgs/web-dev-service (1).jpg"
                alt="Cybersecurity"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-3">
              Unlocking Digital Success with Webczar Solution: The Best Web Development Company              </h3>
              <p className="text-gray-400 text-sm">
              Building powerful digital platforms that connect you with customers instantly.

              </p>
              <Link to={'/Blog2'}>
              <a
                href="#"
                className="mt-4 inline-block text-[#00D9FF] hover:underline"
              >
                Read more →
              </a>
              </Link>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-zinc-900 hover:bg-zinc-800 rounded-xl p-6 transition duration-300 border border-zinc-700 shadow-md">
              <img
                src="/Images/Blogs-imgs/3rd-blog.jpeg"
                alt="Cloud Services"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-3">
              Why Webczar Solutions is the Best Software Development Agency in Chandigarh              </h3>
              <p className="text-gray-400 text-sm">
              Crafting intelligent,  and innovative software solutions tailored to your business needs.
              </p>
              <Link to={"/Blog3"}>
              <a
                href="#"
                className="mt-4 inline-block text-[#00D9FF] hover:underline"
              >
                Read more →
              </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3 text-white">
              Web Development
            </h2>
            <p className="text-gray-400">
              Build modern, high-performance websites with the latest tech.
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <div className="bg-zinc-900 hover:bg-zinc-800 rounded-xl p-6 transition duration-300 border border-zinc-700 shadow-md">
              <img
                src="/Images/Blogs-imgs/Blog-4.jpg"
                alt="AI Infrastructure"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-3">
              Top 5 Web Development Trends to Watch This Year 
                            </h3>
              <p className="text-gray-400 text-sm">
              Stay ahead in digital by embracing the innovations shaping the future of the web.
              </p>
             <Link to={"/Blog4"}> 
             <a
                href="#"
                className="mt-4 inline-block text-[#00D9FF] hover:underline"
              >
                Read more →
              </a>
              </Link>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-zinc-900 hover:bg-zinc-800 rounded-xl p-6 transition duration-300 border border-zinc-700 shadow-md">
              <img
                src="Images/Blogs-imgs/Modern Workspace Setup.jpeg"
                alt="Cybersecurity"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-3">
                Responsive Design with Tailwind CSS
              </h3>
              <p className="text-gray-400 text-sm">
                Learn how Tailwind makes building mobile-friendly websites
                faster and easier.
              </p>
             <Link to={"/Blog5"}> <a
                href="#"
                className="mt-4 inline-block text-[#00D9FF] hover:underline"
              >
                Read more →
              </a></Link>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-zinc-900 hover:bg-zinc-800 rounded-xl p-6 transition duration-300 border border-zinc-700 shadow-md">
              <img
                src="Images/Blogs-imgs/Programmer at Work.jpeg"
                alt="Cloud Services"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-3">
                React Tips for build Scalable Apps{" "}
              </h3>
              <p className="text-gray-400 text-sm">
                Best practices to structure and manage large-scale React
                projects effectively.
              </p>
             <Link to={"/Blog6"}> <a
                href="#"
                className="mt-4 inline-block text-[#00D9FF] hover:underline"
              >
                Read more →
              </a></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3 text-white">
              SEO speciality{" "}
            </h2>
            <p className="text-gray-400">
              Win visibility and traffic with data-driven optimization.
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <div className="bg-zinc-900 hover:bg-zinc-800 rounded-xl p-6 transition duration-300 border border-zinc-700 shadow-md">
              <img
                src="/Images/Blogs-imgs/Financial Chart Display (1).jpeg"
                alt="AI Infrastructure"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-3">
                Google Ranking Factors You Need to Know{" "}
              </h3>
              <p className="text-gray-400 text-sm">
                Stay updated with the latest algorithm changes and what matters
                most in 2025.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-[#00D9FF] hover:underline"
              >
                Read more →
              </a>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-zinc-900 hover:bg-zinc-800 rounded-xl p-6 transition duration-300 border border-zinc-700 shadow-md">
              <img
                src="Images/Blogs-imgs/Colorful Sticky Notes Brainstorming.jpeg"
                alt="Cybersecurity"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-3">
                On-Page SEO Checklist{" "}
              </h3>
              <p className="text-gray-400 text-sm">
                Essential steps to optimize your content and boost your search
                visibility.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-[#00D9FF] hover:underline"
              >
                Read more →
              </a>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-zinc-900 hover:bg-zinc-800 rounded-xl p-6 transition duration-300 border border-zinc-700 shadow-md">
              <img
                src="/Images/Blogs-imgs/Elegant Professional at Work.jpeg"
                alt="Cloud Services"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-3">
                Boost Clicks with Structured Data{" "}
              </h3>
              <p className="text-gray-400 text-sm">
                Add schema markup to enhance your listings with rich snippets on
                Google.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-[#00D9FF] hover:underline"
              >
                Read more →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3 text-white">
              Digital Marketing{" "}
            </h2>
            <p className="text-gray-400">
              Engage, convert, and grow your audience across every channel.
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <div className="bg-zinc-900 hover:bg-zinc-800 rounded-xl p-6 transition duration-300 border border-zinc-700 shadow-md">
              <img
                src="https://via.placeholder.com/400x200"
                alt="AI Infrastructure"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-3">
                Top Digital Marketing Trends for 2025
              </h3>
              <p className="text-gray-400 text-sm">
                Explore what's trending in AI, personalization, and user
                engagement this year.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-[#00D9FF] hover:underline"
              >
                Read more →
              </a>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-zinc-900 hover:bg-zinc-800 rounded-xl p-6 transition duration-300 border border-zinc-700 shadow-md">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Cybersecurity"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-3">
                Facebook Ads That Convert{" "}
              </h3>
              <p className="text-gray-400 text-sm">
                Tips to craft better ad creatives, target smartly, and improve
                ROI.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-[#00D9FF] hover:underline"
              >
                Read more →
              </a>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-zinc-900 hover:bg-zinc-800 rounded-xl p-6 transition duration-300 border border-zinc-700 shadow-md">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Cloud Services"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-3">
                Email Automation Essentials{" "}
              </h3>
              <p className="text-gray-400 text-sm">
                Automate your email marketing to drive conversions and save
                time.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-[#00D9FF] hover:underline"
              >
                Read more →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
