import HomeBannerImg from "../asest/modenbg.png"

import React,{useEffect , useRef } from "react";
import infoGraphic from "../asest/infographics.png";
import { InstancedBufferGeometry } from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HowWeWork() {
  useEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-container", 
        start: "top bottom",
        end: "bottom",
      },
    })
    tl.from(".work-animation", {
      opacity: 0,
      y:100,
      duration:1.4,
      stagger: 0.3,
    })
    tl.from(".work-cards" , {
     opacity: 0,
     y:200,
     duration: 1.8, 
     stagger: 0.2,
    })
  }, [])
  return (
    <div  className="px-[4%] work-container" style={{
      backgroundImage: `linear-gradient(rgba(24, 9 ,39, 0.8) , rgba(24, 9, 39, 0.8)), url(${HomeBannerImg})`
    }}>
      <div className=" max-w-[1440px] m-auto text-center py-10 md:py-[4.7rem] overflow-hidden">
        <h1 className=" text-3xl md:text-5xl font-medium  pb-3 md:pb-6 work-animation">How <span className="span-color-text">We</span> Work</h1>
        <p className=" text-[0.8rem] md:text-[1rem] md:pb-10 lg:pb-20 w-full md:w-2/3 m-auto  work-animation">
          Design Plus, our approach to work is rooted in collaboration,
          creativity, and client-centricity. We embark on each project with a
          meticulous process that begins with attentive listening to understand
          your goals, challenges, and aspirations. Our dedicated team of experts
          then translates these insights into a tailored strategy, ensuring that
          every solution aligns seamlessly with your objectives.
        </p>
        <div className="work-cards bg-contain bg-center bg-no-repeat  h-[180px] md:h-[250px] lg:h-[500px] py-4 lg:py-10" style={{backgroundImage: `url(${infoGraphic})`}}></div>
      </div>
    </div>
  );
}
