import ContactForm from "./ContactForm"
import { useEffect } from "react";

export default function Contactpage(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);  
  
  return (
        <>
        <div className="  flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">
        Let’s Build Something Great Together
         </h1>
        <p className="text-lg font-semibold md:text-xl text-gray-300 mb-6 max-w-2xl">
        Got a project, question, or just want to say hi? Fill out the form — we’re ready to talk</p>
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
        Reach Out 
        </button>
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* General Contact Card */}
          <div className="bg-gradient-to-r from-[#002244] to-[#006AFE] rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>
            <p className="text-white mb-2">hi@yourdomain.com</p>
            <p className="text-white mb-2">+91 90000 00000</p>
            <p className="text-white">City, State</p>
          </div>

          {/* Work Inquiries Card */}
          <div className="bg-gradient-to-r from-[#002244] to-[#006AFE] rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Work Inquiries</h3>
            <p className="text-white mb-2">
              Want to collaborate or bring us on board for a project?
            </p>
            <p className="text-white font-medium">hi@yourdomain.com</p>
          </div>

          {/* Careers Card */}
          <div className="bg-gradient-to-r from-[#002244] to-[#006AFE] rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Careers</h3>
            <p className="text-white mb-2">
              Interested in joining our team? We’re always on the lookout for fresh talent.
            </p>
            <p className="text-white font-medium">hr@yourdomain.com</p>
          </div>
        </div>
      </div>
    </div>

    <div>
<ContactForm/>
    </div>
        </>
    )
}