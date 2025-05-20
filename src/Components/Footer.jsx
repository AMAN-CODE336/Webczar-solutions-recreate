
import { FaBehance, FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black mt-24 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        
        {/* Logo */}
        <div className="col-span-1 space-y-4">
        <img
                src="/Images/logoWebczar-lightTM.png"
                alt="Logo"
                className="w-32 h-auto"
              />
               < p className='text-sm '>Innovative digital solutions crafted to elevate your brand, boost performance, and drive growth in today’s connected world.</p>
        </div>

        {/* Contact */}
        <div className=''>
          <h3 className="text-[#006AFE]  font-semibold ">contact</h3>
         <div className='flex flex-col '>
          <p className="text-sm">info@webczarsolutions.com</p>
          <p className="text-sm">+91 998822 1729</p>
          <p className="text-md"><strong>  Chandigarh:</strong> Level 3, Golden Square, Zirakpur</p>
          <p className="text-md"> <strong> Mohali:</strong> Unit No. 51/2, Kalkat Bhawan, Airport Road, Mohali</p>
          <p className="text-md"> <strong>Zirakpur:</strong>  Unit No. 52/9, Sushma Infinium, Zirakpur</p>
          </div> 
        </div>

        {/* Work Inquiries */}
        <div>
          <h3 className="text-[#006AFE]  font-semibold mb-2">work inquiries</h3>
          <p className="text-sm mb-1">Want to collaborate or bring us<br />on board for a project?</p>
          <p className="text-sm">+91-91304 91404</p>
          <p className="text-sm">info@webczarsolutions.com</p>
        </div>

        {/* Careers */}
        <div>
          <h3 className="text-[#006AFE] font-semibold mb-2">careers</h3>
          <p className="text-sm mb-1">Interested in joining our team?<br />We’re always on the lookout for<br />fresh talent.</p>
          <p className="text-sm">manager.webczarsolutions@gmail.com</p>
        </div>
        
      </div>

      {/* Social Links */}
      <div className="mt-6 flex flex-col items-center gap-3">
        <p className="uppercase text-sm tracking-wide">engage and follow</p>
        <div className="flex gap-4 text-white text-lg">
          <FaBehance />
         <a href="https://www.linkedin.com/company/webczarsolutions"><FaLinkedinIn /></a> 
          <a href="https://www.instagram.com/webczarsolutions/#"><FaInstagram /></a>
          <a href="https://www.facebook.com/webczarsolutions"><FaFacebookF /></a>
          <FaYoutube />
          <FaXTwitter />
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-400">
    ©2017 webczarsolutions®. All rights reserved.
  </div>
    </footer>
  );
};

export default Footer;
