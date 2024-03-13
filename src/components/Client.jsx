import React,{useEffect} from 'react'
import Client1 from "../asest/bclient.png";
import Client2 from "../asest/bclient1.png";
import Client3 from "../asest/bclient2.png";
import Client4 from "../asest/bclient3.png";
import Client5 from "../asest/bclient4.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Client() {
  useEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".client-container", 
        start: "top bottom",
        end: "bottom",
      },
    })
    tl.from(".client-animation", {
      opacity: 0,
      y:80,
      duration:1.4,
      stagger: 0.3,
    })
    tl.from(".client-cards" , {
     opacity: 0,
     y:100,
     duration: 1.8, 
     stagger: 0.2,
    })
  }, [])
  return (
    <div className="bg-[#080017] client-container">
        {/* our Client Section  */}
      <div className='py-10 md:py-[4.7rem] max-w-[1440px] m-auto '>
        <h1 className=' text-3xl md:text-5xl text-center font-medium client-animation'>Our <span className="span-color-text">Clients</span></h1>
        <div className=' flex  justify-center md:justify-between  flex-wrap md:flex-nowrap overflow-hidden'>
            <img src={Client1}  className="client-cards  object-contain h-[60px] md:h-[100px] w-100px md:w-[150px]" alt="..n"/>
            <img src={Client2} className="client-cards object-contain  h-[60px] md:h-[100px] w-100px  md:w-[150px]" alt="..n"/>
            <img src={Client3} className="client-cards object-contain  h-[60px] md:h-[100px] w-100px  md:w-[150px]" alt="..n"/>
            <img src={Client4} className="client-cards object-contain  h-[60px] md:h-[100px] w-100px  md:w-[150px]" alt="..n"/>
            <img src={Client5} className="client-cards object-contain  h-[60px] md:h-[100px] w-100px  md:w-[150px]" alt="..n"/> 
        </div>
      </div>  
    </div>
  )
}
