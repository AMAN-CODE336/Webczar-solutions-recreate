
import React from 'react';
import Togglebutton from './Togglebutton';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfoliopage from './Portfoliopage';
import Servicepage from './Servicepage';
import Blogspage from './BlogsPage';
import Hero from './Hero';
import { useState , useEffect } from 'react';
import ContactForm from './ContactForm'
import SingleBlog1 from './Singleblog1';
import SingleBlog2 from './Singleblog2';
import SingleBlog3 from './Singleblog3';
import SingleBlog4 from './Singleblog4';
import SingleBlog5 from './Singleblog5';
import SingleBlog6 from './Singleblog6';
import Company from './Companypage';
import Contactpage from './Contactpage';
import Loader from './Loader';
import DigitalMarketing from './Digitalmarketing';
import WebDevolopment from './WebDevolopment';
import PricingPage from './Pricingpage';
import { FaQ } from 'react-icons/fa6';
import FAQ from './Faq';
import ClientsPage from './ClientsPage';
const Navbar = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
<Router>
    <nav className="fixed top-0 left-0 w-full z-20 px-6 py-4">
      <div className="max-w-6xl  mt-6 mx-auto flex items-center justify-between">
        {/* Logo */}
       
        <div className="flex  items-center space-x-6">
        <img
                src="/Images/logoWebczar-lightTM.png"
                alt="Logo"
                className="w-32 h-auto"
              />
    </div>

<div>
  <Togglebutton/>
</div>
        
      </div>
    </nav>
<Routes>
<Route path='/' element = {<Hero/>}  />
<Route path='/services' element = {<Servicepage/>}  />
<Route path='/portfolios' element = {<Portfoliopage/>} />
<Route path='/blogs' element = {<Blogspage/>}  />
<Route path='/contact' element = {<Contactpage/>}  />
<Route path='/Blog1' element = {<SingleBlog1/>}  />
<Route path='/Blog2' element = {<SingleBlog2/>}  />
<Route path='/Blog3' element = {<SingleBlog3/>}  />
<Route path='/Blog4' element = {<SingleBlog4/>}  />
<Route path='/Blog5' element = {<SingleBlog5/>}  />
<Route path='/Blog6' element = {<SingleBlog6/>}  />
<Route path='/company' element = {<Company/>}  />
<Route path='/services/digital-marketing' element = {<DigitalMarketing/>}  />
<Route path='/services/web-development' element = {<WebDevolopment/>}  />
<Route path='/Pricing' element = {<PricingPage/>}  />
<Route path='/FAQ' element = {<FAQ/>}  />
<Route path='/Clients' element = {<ClientsPage/>}  />




</Routes>

    </Router>
  );
};

export default Navbar;
