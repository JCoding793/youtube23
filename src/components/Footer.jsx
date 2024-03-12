import React, {useEffect} from "react";
import FooterLogo from "../asest/newlogo.png";
import Global from "../asest/bgloable.svg";
import Gmail from "../asest/mail-fill.svg";
import Phone from "../asest/bphone.svg";
import {gsap , Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// #fff3f3

export default function Footer() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
         trigger: ".footer-section",
         start: "-=200",
         end: "bottom",
         // scrub: 1, 
        //  markers: true
       },
    });
   
   tl.from(".footer-list", {
       opacity:0,
       y:100,
       duration: 1.5,
       stagger: 0.2
     })
  }, []);
  return (
    <div className="bg-[#15002c] px-[4%] footer-section">
      <div className=" max-w-[1440px] m-auto text-center py-16">
        {/* insert Logo */}
        <div className="flex flex-col items-center">
          <img src={FooterLogo} alt="" className=""/>
        </div>
        {/* insert footer content */}
        <div className="flex justify-center md:justify-between gap-y-10  items-start flex-row flex-wrap py-14 md:py-20 lg:py-40">
          <div className=" footer-list w-full md:w-1/3 text-center flex flex-col justify-center items-center md:border-l border-[#2c1a41]">
            <img src={Global} alt="" className="h-10 w-10 object-contain"/>
            <p className="pt-5 w-2/3 text-[0.8rem] md:text-[1rem]">
              Plot No. 31 First Floor, Sai Enclave , Sector-23, Dwarker, New
              Delhi-110077
            </p>
            <p className="pt-3 text-[0.8rem] md:text-[1rem] font-bold">Our Addresss</p>
          </div>
          <div className=" footer-list w-full md:w-1/3 flex flex-col  items-center justify-center text-center md:border-l border-[#2c1a41]">
            <img src={Gmail} alt="" className="h-10 w-10  object-contain "/>
            <p className="pt-5 text-[0.8rem] md:text-[1rem]">info@creativiews.com</p>
            <p className="pt-3 text-[0.8rem] md:text-[1rem] font-bold">Our Mailbox</p>
          </div>
          <div className="footer-list w-full md:w-1/3 flex flex-col  items-center justify-center text-center md:border-l border-[#2c1a41]">
            <img src={Phone} alt="" className="h-10 w-10 object-contain"/>
            <p className="pt-5 text-[0.8rem] md:text-[1rem]">+91-9310011004</p>
            <p className="text-[0.8rem] md:text-[1rem]">+91-9310511304</p>
            <p  className="text-[0.8rem] md:text-[1rem]">+91-9312211342</p>
            <p className="pt-3 text-[0.8rem] md:text-[1rem] font-bold">Our Phone</p>
          </div>
        </div>
        <div className=" flex flex-col gap-10">
          <p className="tracking-widest text-[0.8rem] md:text-[1rem]">
            Privacy Policy &nbsp;&nbsp;|&nbsp;&nbsp; Terms & Conditions &nbsp;&nbsp;|&nbsp;&nbsp; Pricing and Refund Policy &nbsp;&nbsp;|
            &nbsp;&nbsp;Shipping and Delivery Policy{" "}
          </p>
          <p className="text-[0.8rem] md:text-[1rem]">CopyRight &copy; 2020 Creativews. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
