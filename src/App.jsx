// main.jsx or App.jsx
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';


import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Servicepage from './Components/Servicepage';
import Footer from './Components/Footer';
import ClientsPage from './Components/ClientsPage';
import Portfoliopage from './Components/Portfoliopage';
import Blogspage from './Components/BlogsPage';
import SingleBlog from './Components/Singleblog1';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Company from './Components/Companypage';
export default function App (){
    return (
        <>

        <Navbar/>
        
        {/* <Hero/> */}
        {/* <Servicepage/> */}
        {/* <Portfoliopage/> */}
        {/* <ClientsPage/> */}
        {/* <Blogspage/> */}
        {/* <SingleBlog/> */}
        {/* <Company/> */}
<ScrollToTopButton/>
<Footer/>



        </>
    )
}