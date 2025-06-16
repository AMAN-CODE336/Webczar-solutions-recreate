import TiltedCard from "./Titledcard";
import ScrollVelocity from "./Scrolltext";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
export default function Portfoliopage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    " /WEBCZAR-BANNER-3.mp4" ,
 ];
  
  return (
    <>
      {/* <div className="  flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">
          Showcasing Our Digital Craftsmanship
        </h1>
        <p className="text-lg font-semibold md:text-xl text-gray-300 mb-6 max-w-2xl">
          Explore the solutions we've built — from sleek websites to smart
          systems that solve real problems.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
        View Projects
        </button>
      </div> */}

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

      </div>

      <div className="flex flex-col">
        <div className="flex flex-wrap justify-around space-y-24 lg:space-y-16 gap-6 mt-20 lg:mt-20">
          <TiltedCard
            imageSrc="Images/portfolio-imgs/FB_IMG_1746774797610 (1) (1).jpg"
            altText="Infra group"
            captionText="Digital marketing"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            // rotateAmplitude={8}
            // scaleOnHover={1.1}
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
            // rotateAmplitude={8}
            // scaleOnHover={1.1}
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
            altText="Rajverma photography "
            captionText="Social media"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            // rotateAmplitude={8}
            // scaleOnHover={1.1}
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

        <div className="flex flex-wrap justify-around space-y-24 lg:space-y-16 gap-6 mt-28 lg:mt-20">
          <TiltedCard
            imageSrc="Images/portfolio-imgs/BLOSSOM (1).jpg"
            altText="blossom Salon "
            captionText="Template design"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            // rotateAmplitude={8}
            // scaleOnHover={1.1}
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
            // rotateAmplitude={8}
            // scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="relative top-82 left-0 w-full px-4 text-white">
                <div className="bg-black/60 backdrop-blur-sm py-2 px-3 rounded-md shadow-lg">
                  <p className="text-sm font-bold uppercase tracking-wide">
                    Digital promotion
                    <br /> Sita ram & sons
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
            // rotateAmplitude={8}
            // scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="relative top-82 left-0 w-full px-4 text-white">
                <div className="bg-black/60 backdrop-blur-sm py-2 px-3 rounded-md shadow-lg">
                  <p className="text-sm font-bold uppercase tracking-wide">
                    Website designing
                    <br /> better world
                  </p>
                </div>
              </div>
            }
          />
        </div>

        <div className="flex flex-wrap justify-around space-y-24 lg:space-y-16 gap-6 mt-28 lg:mt-20">
          <TiltedCard
            imageSrc="/Images/portfolio-imgs/AGENCY-44 (1).jpg"
            altText="Agency-44"
            captionText="Search Optimization"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            // rotateAmplitude={8}
            // scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="relative top-82 left-0 w-full px-4 text-white">
                <div className="bg-black/60 backdrop-blur-sm py-2 px-3 rounded-md shadow-lg">
                  <p className="text-sm font-bold uppercase tracking-wide">
                  Search Optimization <br /> Agency-44
                  </p>
                </div>
              </div>
            }
          />

          <TiltedCard
            imageSrc="/Images/portfolio-imgs/MOHALI ROCKS (1).jpg"
            altText="Mohali rocks"
            captionText="logo design"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            // rotateAmplitude={8}
            // scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="relative top-82 left-0 w-full px-4 text-white">
                <div className="bg-black/60 backdrop-blur-sm py-2 px-3 rounded-md shadow-lg">
                  <p className="text-sm font-bold uppercase tracking-wide">
                    logo design
                    <br /> Mohali rocks
                  </p>
                </div>
              </div>
            }
          />

          <TiltedCard
            imageSrc="/Images/portfolio-imgs/SPARKLE-MATTE (1).jpg"
            altText="Sparkle matte"
            captionText="Online Promotion"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            // rotateAmplitude={8}
            // scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="relative top-82 left-0 w-full px-4 text-white">
                <div className="bg-black/60 backdrop-blur-sm py-2 px-3 rounded-md shadow-lg">
                  <p className="text-sm font-bold uppercase tracking-wide">
                  Online Promotion
                    <br /> Sparkle matte
                  </p>
                </div>
              </div>
            }
          />
        </div>

        <div className="flex flex-wrap justify-around space-y-24 lg:space-y-16 gap-6 mt-28  lg:mt-20">
          <TiltedCard
            imageSrc="Images/portfolio-imgs/WINNI-CAKES (1).jpg"
            altText="Winni cakes "
            captionText="Creative Design"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            // rotateAmplitude={8}
            // scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="relative top-82 left-0 w-full px-4 text-white">
                <div className="bg-black/60 backdrop-blur-sm py-2 px-3 rounded-md shadow-lg">
                  <p className="text-sm font-bold uppercase tracking-wide">
                  Creative Design <br /> Winni cakes
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
            // rotateAmplitude={8}
            // scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="relative top-82 left-0 w-full px-4 text-white">
                <div className="bg-black/60 backdrop-blur-sm py-2 px-3 rounded-md shadow-lg">
                  <p className="text-sm font-bold uppercase tracking-wide">
                    Digital promotion
                    <br /> Sita ram & sons
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
            // rotateAmplitude={8}
            // scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="relative top-82 left-0 w-full px-4 text-white">
                <div className="bg-black/60 backdrop-blur-sm py-2 px-3 rounded-md shadow-lg">
                  <p className="text-sm font-bold uppercase tracking-wide">
                    Website designing
                    <br /> better world
                  </p>
                </div>
              </div>
            }
          />
        </div>

        <div className="flex flex-wrap justify-around space-y-24 lg:space-y-16 gap-6 mt-28  lg:mt-20">
          <TiltedCard
            imageSrc="Images/portfolio-imgs/BLOSSOM (1).jpg"
            altText="blossom Salon "
            captionText="Template design"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            // rotateAmplitude={8}
            // scaleOnHover={1.1}
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
            // rotateAmplitude={8}
            // scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="relative top-82 left-0 w-full px-4 text-white">
                <div className="bg-black/60 backdrop-blur-sm py-2 px-3 rounded-md shadow-lg">
                  <p className="text-sm font-bold uppercase tracking-wide">
                    Digital promotion
                    <br /> Sita ram & sons
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
            // rotateAmplitude={8}
            // scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="relative top-82 left-0 w-full px-4 text-white">
                <div className="bg-black/60 backdrop-blur-sm py-2 px-3 rounded-md shadow-lg">
                  <p className="text-sm font-bold uppercase tracking-wide">
                    Website designing
                    <br /> better world
                  </p>
                </div>
              </div>
            }
          />
        </div>

      </div>


      <div className="   py-20 overflow-hidden mt-34">
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
    </>
  );
}
