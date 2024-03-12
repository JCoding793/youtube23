import portImg1 from "../asest/port1.png";


import portImg2 from "../asest/port2.png";
import portImg3 from "../asest/port3.png";
import portImg4 from "../asest/port4.png";
import portImg5 from "../asest/port5.png";
import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Portfolio() {
useEffect(()=>{
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".portfolio-container", 
      start: "top bottom",
      end: "bottom",
    },
    delay:0.2
  })
  tl.from(".portfolio-animation", {
    opacity: 0,
    y:100,
    duration:1.4,
    stagger: 0.3,
  })
  tl.from(".portfolio-cards" , {
   opacity: 0,
   y:300,
   duration: 1.8, 
   stagger: 0.2,
  })
})
  return (
    <div className="bg-[#080017] px-[4%] portfolio-container">
      <div className=" max-w-[1440px] m-auto py-8 md:py-[4.7rem]">
        <div className="portfolio-content text-center overflow-hidden">
          <h1 className=" text-3xl md:text-5xl text-center pb-2 md:pb-6 font-medium portfolio-animation" ><span className="span-color-text">Portfolio</span></h1>
          <h4 className=" text-[1rem] md:text-xl text-center pb-1 md:pb-7 font-bold portfolio-animation">
            Canvas of Creativity: Showcasing Our Diverse Portfolio
          </h4>
          <p className="m-auto text-center text-[0.8rem] md:text-[1rem] w-full md:w-2/3 portfolio-animation">
            Dive into our portfolio, where innovation meets inspiration, and
            witness the diverse tapestry of our creative prowess. Each project
            showcased is a testament to our unwavering commitment to excellence,
            thoughtful design, and effective problem-solving. As you explore our
            portfolio, you'll witness a diverse tapestry of work, ranging from
            captivating brand identities to seamless digital experiences.
          </p>
        </div>
        <div className="flex flex-col  gap-4 lg:gap-10 pt-10">
          <div className="flex flex-col md:flex-row gap-4 lg:gap-14 overflow-hidden">
            <div
              className="portfolio-cards h-[250px]  md:h-[290px] lg:h-[420px]  w-full md:w-2/5  bg-no-repeat bg-center bg-cover rounded-[2.5rem]"
              style={{ backgroundImage: `url(${portImg2})` }}
            ></div>
            <div
              className=" portfolio-cards h-[250px]  md:h-[290px] lg:h-[420px]   w-full md:w-3/5  bg-no-repeat bg-center bg-cover  rounded-[2.5rem]"
              style={{ backgroundImage: `url(${portImg1})` }}
            ></div>
          </div>
          <div className="flex flex-col md:flex-row  gap-4 lg:gap-14 overflow-hidden">
            <div
              className=" portfolio-cards h-[250px]  md:h-[290px] lg:h-[420px]   w-full md:w-1/3  bg-no-repeat bg-center bg-cover rounded-[2.5rem]"
              style={{ backgroundImage: `url(${portImg3})` }}
            ></div>
            <div
              className="portfolio-cards h-[250px]  md:h-[290px] lg:h-[420px]  w-full md:w-1/3  bg-no-repeat bg-center bg-cover rounded-[2.5rem]"
              style={{ backgroundImage: `url(${portImg4})` }}
            ></div>
            <div
              className="portfolio-cards h-[250px]  md:h-[290px] lg:h-[420px]  w-full md:w-1/3  bg-no-repeat bg-center bg-cover rounded-[2.5rem]"
              style={{ backgroundImage: `url(${portImg5})` }}
            ></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
