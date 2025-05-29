import Waves from "./Waves";
import BounceCards from "./Bouncecards";
import SpotlightCard from "./Spotlightcard";
import { FiActivity , FiPenTool   } from "react-icons/fi";
import { FaLaptopCode , FaChartLine } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { MdDesignServices , MdStorefront } from "react-icons/md";
import Squares from "./Squaresbackground";
import Sharecard from "./Sharecard";
import BlurText from "./Blurtext";
import TiltedCard from "./Titledcard";
import FounderCard from "./Foundercard";
import ClientCard from "./Clientcard";
import ScrollVelocity from "./Scrolltext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
export default function Hero() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];

  const videos = [
    "/webczar front banner-1.mp4",
    "/banner-video-2.mp4",
    " /WEBCZAR-BANNER-3.mp4" ,
    "/WEBCZAR-BANNER-5.mp4" ,
    "/WEBCZAR-BANNER-6.mp4" ,
    "/WEBCZAR-BANNER-7.mp4", 
 ];

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-black">
        {/* Waves Background */}
        <div className="absolute inset-0 z-0">
          {/* <Waves
            lineColor="rgba(112, 106, 106, 0.2)"
            backgroundColor="rgba(0, 0, 0, 0.2)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          /> */}

<Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="absolute top-0 left-0 w-full h-full z-[-1]"
      >
        {videos.map((src, idx) => (
          <SwiperSlide key={idx}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-cover sm:object-cover object-contain max-h-screen"
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>
          </SwiperSlide>             

        ))} 

      </Swiper>

     
      

        </div> 

        {/* Hero Section Content */}
        {/* <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
          <h1 className="text-4xl font-Playfair Display font-bold text-white">
            Webczar Solutions - Driving Growth Through <br /> Tech & Marketing
          </h1>
          <p className="mt-4 text-xl text-white">
            Innovative Tech & Marketing Solutions to Accelerate Your Business
            Growth
          </p>
          <Link to={"/company"}>
          <button className="mt-6 px-6 py-3 bg-white text-black rounded-full shadow hover:bg-gray-200 transition">
          Explore Now
          </button>
          </Link>
        </div> */}
      </div>

      {/* <div className="flex justify-around mt-42">
        <BounceCards
          className="custom-bounceCards"
          images={images}
          containerWidth={700}
          containerHeight={250}
          animationDelay={1}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={true}
        />

        <div className="relative bg-gradient-to-br from-black via-[#0f172a] to-blue-900 text-white p-6 md:p-10 rounded-2xl max-w-xl shadow-md border border-gray-700 hover:border-indigo-500 transition-all duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-500/10 to-transparent pointer-events-none" />
      <h2 className="text-3xl md:text-3xl font-bold mb-4 relative z-10">
        Let’s Build Something Great Together.
      </h2>
      <p className="text-lg md:text-xl mb-6 text-slate-300 relative z-10">
        Partner with us to bring your digital ideas to life—crafted with precision, passion, and purpose.
      </p>
      
        </div>
      </div> */}
<div className="px-4 sm:px-6 lg:px-34 mt-44">
  <section className="bg-gradient-to-r from-[#002244] to-[#006AFE] text-white rounded-xl p-6 sm:p-10 md:p-16 my-12 relative overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
      <div className="text-center md:text-left">
        <p className="text-xs sm:text-sm uppercase text-yellow-200 tracking-wide font-semibold mb-2 sm:mb-3">
          Facing digital challenges?
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Let’s transform your tech needs into impactful results
        </h2>
      </div>

      <div className="flex justify-center md:justify-end">
        <Link to={"/contact"}>
        <button className="relative border-2 border-white px-6 sm:px-8 py-2 sm:py-3 font-medium rounded-md hover:bg-white hover:text-[#006AFE] transition duration-300">
          get started
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white"></span>
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white"></span>
        </button>
        </Link>
      </div>
    </div>
  </section>
</div>



<div className="flex flex-col lg:flex-row mt-12 px-4 gap-4 md:px-20">
  {/* Left Content */}
  <div className=" mt-12 lg:mt-28 space-y-3 text-center lg:text-left">
    <h2 className="text-xl font-medium text-white">Our Core Services</h2>
    <p className="text-2xl sm:text-3xl font-semibold text-[#006AFE]">
      Smart Solutions to Power Your Digital Journey
    </p>
    <p className="text-sm sm:text-md text-white">
      Explore our full suite of software and digital marketing services
      designed to boost visibility, engagement, and performance.
    </p>
    <p className="text-sm sm:text-md text-white">
      Whether you're building a brand or scaling operations, our tailored
      solutions are built to match your goals.
    </p>
    <div className="mt-6  sm: hidden  justify-center lg:flex justify-start">
  <Sharecard />
</div>
  </div>

  {/* Right Card Section */}
  <div className="flex flex-col gap-10 mt-16 w-full">
    {/* Row 1 */}
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center lg:justify-start">
      <SpotlightCard className="custom-spotlight-card w-full md:w-70" spotlightColor="rgba(122, 233, 243, 0.2)">
        <div className="p-4 gap-4">
          <div className="text-5xl mb-4 text-white"><FiPenTool /></div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl text-white font-semibold">Logo Design</h3>
            <p className="text-white text-sm sm:text-lg">Crafting memorable identities that speak your brand’s language.</p>
          </div>
        </div>
      </SpotlightCard>

      <SpotlightCard className="custom-spotlight-card w-full md:w-70" spotlightColor="rgba(0, 229, 255, 0.2)">
        <div className="p-4 gap-4">
          <div className="text-5xl mb-4 text-white"><FaLaptopCode /></div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl text-white font-semibold">Web Development</h3>
            <p className="text-white text-sm sm:text-lg">Transforming ideas into interactive digital experiences.</p>
          </div>
        </div>
      </SpotlightCard>

      <SpotlightCard className="custom-spotlight-card w-full md:w-70" spotlightColor="rgba(0, 229, 255, 0.2)">
        <div className="p-4 gap-4">
          <div className="text-5xl mb-4 text-white"><FaChartLine /></div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl text-white font-semibold">Digital Marketing</h3>
            <p className="text-white text-sm sm:text-lg">Turning clicks into clients with intelligent marketing.</p>
          </div>
        </div>
      </SpotlightCard>
    </div>

    {/* Row 2 */}
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center lg:justify-start">
      <SpotlightCard className="custom-spotlight-card w-full md:w-70" spotlightColor="rgba(0, 229, 255, 0.2)">
        <div className="p-4 gap-4">
          <div className="text-5xl mb-4 text-white"><FaScrewdriverWrench /></div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl text-white font-semibold">Custom Software</h3>
            <p className="text-white text-sm sm:text-lg">Solving real problems with smart, scalable software.</p>
          </div>
        </div>
      </SpotlightCard>

      <SpotlightCard className="custom-spotlight-card w-full md:w-70" spotlightColor="rgba(0, 229, 255, 0.2)">
        <div className="p-4 gap-4">
          <div className="text-5xl mb-4 text-white"><MdDesignServices /></div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl text-white font-semibold">Graphic Design</h3>
            <p className="text-white text-sm sm:text-lg">Visually striking graphics that communicate your message clearly and creatively.</p>
          </div>
        </div>
      </SpotlightCard>

      <SpotlightCard className="custom-spotlight-card w-full md:w-70" spotlightColor="rgba(0, 229, 255, 0.2)">
        <div className="p-4 gap-4">
          <div className="text-5xl mb-4 text-white"><MdStorefront /></div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl text-white font-semibold">E-commerce Development</h3>
            <p className="text-white text-sm sm:text-lg">Build seamless and scalable online stores that convert.</p>
          </div>
        </div>
      </SpotlightCard>
    </div>

    {/* Button */}
    <div className="flex justify-center items-center">
      <Link to={"/services"}>
      <button className="mt-6 px-6 py-3 text-white rounded-full shadow border-t-2 border-[#006AFE] border-b-2 transition">
        Explore Services
      </button>
      </Link>
    </div>
  </div>
</div>


<div className="px-4 sm:px-6 md:px-12 lg:px-20">
  <BlurText
    text="Less noise. More impact."
    delay={150}
    animateBy="words"
    direction="top"
    onAnimationComplete={handleAnimationComplete}
    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center text-white mt-20 lg:mt-42 lg:ps-70"
  />
  <BlurText
    text="Where code meets creativity — and results follow."
    delay={200}
    animateBy="words"
    direction="bottom"
    onAnimationComplete={handleAnimationComplete}
    className="text-base sm:text-lg md:text-xl lg:text-3xl text-center text-white mt-4 lg:ps-80"
  />
</div>

<div className="flex flex-col justify-center items-center mt-62 gap-4 px-4 md:px-0">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-md text-white text-center">
    Projects That Prove the Point
  </h2>
  <p className="text-lg sm:text-xl font-semibold text-[#006AFE] italic text-center">
    We don't just talk results. We build them — and this is where they live.
  </p>
  <p className="text-base sm:text-lg text-white text-center">
    Take a look behind the scenes of our digital craftsmanship. These case
    studies reflect <br className="hidden sm:block" />
    the depth of our expertise and the trust our clients place in us.
  </p>
</div>

<div className="mt-34  px-8">
  {/* First Row */}
  <div className="grid grid-cols-1  sm:grid-cols-2  md:flex md:justify-around md:gap-0 gap-x-6 space-y-44 md:space-y-12 mt-10">
    <TiltedCard
      imageSrc="Images/portfolio-imgs/FB_IMG_1746774797610 (1) (1).jpg"
      altText="Infra group"
      captionText="Digital marketing"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="400px"
      imageWidth="300px"
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <div className="relative top-82 left-0 w-full px-4 text-white">
          <div className="bg-black/60 backdrop-blur-sm py-2 px-3 rounded-md shadow-lg">
            <p className="text-sm font-bold uppercase tracking-wide">
              Digital Marketing <br /> Infra Group
            </p>
          </div>
        </div>
      }
    />

    <TiltedCard
      imageSrc="Images/portfolio-imgs/FB_IMG_1746774861716 (1) (1).jpg"
      altText="Subhash mangat and co."
      captionText="Logo design"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="400px"
      imageWidth="300px"
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <div className="relative top-82 left-0 w-full px-4 text-white">
          <div className="bg-black/60 backdrop-blur-sm py-2 px-3 rounded-md shadow-lg">
            <p className="text-sm font-bold uppercase tracking-wide">
              Logo design <br /> Subhash mangat and co.
            </p>
          </div>
        </div>
      }
    />

    <TiltedCard
      imageSrc="Images/portfolio-imgs/RAJ-VERMA (1).jpg"
      altText="Rajverma photography"
      captionText="Social media"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="400px"
      imageWidth="300px"
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <div className="relative top-82 left-0 w-full px-4 text-white">
          <div className="bg-black/60 backdrop-blur-sm py-2 px-3 rounded-md shadow-lg">
            <p className="text-sm font-bold uppercase tracking-wide">
              Social media <br /> Rajverma photography
            </p>
          </div>
        </div>
      }
    />
  </div>

  {/* Second Row */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:justify-around md:gap-0 gap-x-6 space-y-44 mt-44 md:space-y-20 ">
    <TiltedCard
      imageSrc="Images/portfolio-imgs/BLOSSOM (1).jpg"
      altText="blossom Salon"
      captionText="Template design"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="400px"
      imageWidth="300px"
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <div className="relative top-82 left-0 w-full px-4 text-white">
          <div className="bg-black/60 backdrop-blur-sm py-2 px-3 rounded-md shadow-lg">
            <p className="text-sm font-bold uppercase tracking-wide">
              Template design <br /> blossom Salon
            </p>
          </div>
        </div>
      }
    />

    <TiltedCard
      imageSrc="Images/portfolio-imgs/SITA-RAM (1).jpg"
      altText="Sita ram & sons"
      captionText="Digital promotion"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="400px"
      imageWidth="300px"
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <div className="relative top-82 left-0 w-full px-4 text-white">
          <div className="bg-black/60 backdrop-blur-sm py-2 px-3 rounded-md shadow-lg">
            <p className="text-sm font-bold uppercase tracking-wide">
              Digital promotion <br /> Sita ram & sons
            </p>
          </div>
        </div>
      }
    />

    <TiltedCard
      imageSrc="Images/portfolio-imgs/BETTER-WORLD.jpg"
      altText="better world"
      captionText="Website designing"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="400px"
      imageWidth="300px"
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <div className="relative top-82 left-0 w-full px-4 text-white">
          <div className="bg-black/60 backdrop-blur-sm py-2 px-3 rounded-md shadow-lg">
            <p className="text-sm font-bold uppercase tracking-wide">
              Website designing <br /> better world
            </p>
          </div>
        </div>
      }
    />
  </div>
</div>


      <div className="mt-64 md:p-28">
        <FounderCard />
      </div>

      <div className=" px-8 lg:px-24 mt-42 space-y-3">
  <h2 className="text-3xl font-md text-white font-inter">
    Voices Behind the Vision{" "}
  </h2>
  <p className="text-xl font-semibold text-[#006AFE] italic">
    Clients Chronicles — crafted through trust, driven by results.
  </p>
  <p className="text-md text-white">
    Explore the milestones, moments, and meaningful stories from those who’ve grown with us.
  </p>
</div>

<div className="space-y-4 lg:flex lg:space-y-0 justify-around p-12 mt-14 gap-6 lg:gap-6 sm:gap-6">
  <ClientCard
    image="Images/closeup-shot-.jpg"
    name="Aman Anand"
    role="Director"
    company="Fima CF India"
    quote="Working with them was seamless and results-driven — truly exceeded expectations."
  />

  <ClientCard
    image="Images/closeup-shot-.jpg"
    name="Aman Anand"
    role="Director"
    company="Fima CF India"
    quote="Working with them was seamless and results-driven — truly exceeded expectations."
  />

  <ClientCard
    image="Images/closeup-shot-.jpg"
    name="Aman Anand"
    role="Director"
    company="Fima CF India"
    quote="Working with them was seamless and results-driven — truly exceeded expectations."
  />

  <ClientCard
    image="Images/closeup-shot-.jpg"
    name="Aman Anand"
    role="Director"
    company="Fima CF India"
    quote="Working with them was seamless and results-driven — truly exceeded expectations."
  />
</div>


      <div className="   py-20 overflow-hidden md:mt-34">
        <ScrollVelocity
          texts={[
            "Crafting Memorable Brands",
            "Designs that Speak, Code that Works",
            "Let's Shape the Future Together",
          ]}
          velocity={100}
          className="text-white text-3xl md:text-8xl"
        />
      </div>

      <div className="relative mt-16 w-full min-h-screen overflow-hidden bg-black text-white">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-10">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Transforming Ideas into Digital Excellence.
                </h1>
        <p className="text-lg font-semibold md:text-xl text-gray-300 mb-6 max-w-2xl">
        Collaborate with us to shape your digital vision into impactful experiences—built with strategy, creativity, and purpose-driven innovation.
        </p>
        <Link to={"/contact"}>
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Get in Touch →
        </button>
        </Link>
      </div>
    </div>
    </>
  );
}
