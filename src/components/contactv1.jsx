import React,{useEffect} from "react";
import Global from "../asest/bgloable.svg";
import Gmail from "../asest/mail-fill.svg";
import Phone from "../asest/bphone.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ContactVersion1() {
  useEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-container", 
        start: "top bottom",
        end: "bottom",
      },
    })
    tl.from(".contact-animation", {
      opacity: 0,
      y:80,
      duration:1.4,
      stagger: 0.3,
    })
    tl.from(".contact-animation-right" , {
     opacity: 0,
     y:100,
     duration: 1.8, 
     stagger: 0.2,
    }, "-=3")
  }, [])
  return (
      <div className="bg-[#15002c] px-[4%] contact-container">
      <div className="flex gap-10 md:gap-6  flex-col md:flex-row max-w-[1440px] m-auto py-10 md:py-[4.7rem] ">
        <div className="w-full md:w-1/2  md:pt-10">
          <div>
            <p className="pb-1 text-[0.8rem] md:text-[1rem] contact-animation"># Contact Detils</p>
            <h1 className=" font-bold text-3xl md:text-5xl pb-3 md:pb-6 contact-animation"><span className="span-color-text">Contact us</span></h1>
            <p className="w-full md:w-[65%] text-[0.8rem] md:text-[1rem] contact-animation">
              Give us call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours on business day we will be happy to
              answer you questions
            </p>
          </div>
          <div className="pt-5 md:pt-10 flex flex-col gap-4 md:gap-7  md:pl-8">
            <div>
              <div className="contact-animation  flex gap-4">
                <img src={Global} alt="" className="h-5 md:h-9" />
                
                <div className="w-2/3">
                  <h1 className="font-semibold text-[0.8rem] md:text-[1rem]">Our Addresss</h1>
                  <p className="text-[0.8rem] md:text-[1rem]">
                    Plot No. 31 First Floor, Sai Enclave Sector-23, Dwarker, New
                    Delhi-110077
                  </p>
                </div>
              </div>
            </div>  
            <div>
              <div className="contact-animation  flex gap-4">
                <img src={Gmail} alt=""  className="h-5 md:h-9"/>
                <div>
                  <h1 className="font-semibold text-[0.8rem] md:text-[1rem]">Our Mailbox</h1>
                  <p className="text-[0.8rem] md:text-[1rem]">info@creativiews.com</p>
                </div>
              </div>
            </div>
            <div>
              <div className="contact-animation  flex gap-4">
                <img src={Phone} alt="" className="h-5 md:h-9"/>
                <div>
                  <h1 className="font-semibold text-[0.8rem] md:text-[1rem]">Our Phone</h1>
                  <p className="text-[0.8rem] md:text-[1rem]">+91-9310011004</p>
                  <p className="text-[0.8rem] md:text-[1rem]">+91-9310511304</p>
                  <p className="text-[0.8rem] md:text-[1rem]">+91-9312211342</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full first-letter:md:w-1/2 border border-slate-600 rounded-2xl py-8 px-5 md:py-16 md:px-10">
          <h1 className=" text-3xl md:text-5xl font-bold pb-2 contact-animation-right">Ready To Get Started?</h1>
          <p className="text-[0.8rem] md:text-[1rem] pb-4 contact-animation-right">
            Your email address will not be published, Required fields are marked{" "}
          </p>
          <div className="flex flex-col gap-4">
            <input
              type="text "
              placeholder="Your Name*"
              className="contact-animation-right p-3 md:p-4 rounded-xl bg-[#5c4d6c] text-[0.8rem] md:text-[1rem]"
            />
            <input
              type="text"
              placeholder="Your Email*"
              className="contact-animation-right  p-3 md:p-4 rounded-xl  bg-[#5c4d6c] text-[0.8rem] md:text-[1rem]"
            />
            <input
              type="text"
              placeholder="Your Mobile Number*"
              className="contact-animation-right p-3 md:p-4 rounded-xl  bg-[#5c4d6c] text-[0.8rem] md:text-[1rem]"
            />
            <textarea
              type="text"
              placeholder="Your Message*"
              className="contact-animation-right  p-3 md:p-4 rounded-xl bg-[#5c4d6c] text-[0.8rem] md:text-[1rem]"
              rows={5}
            />
            <button className="contact-animation-right bg-[#DA4EA2] border-0  p-2 md:p-3 rounded-md text-[0.8rem] md:text-[1rem]">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
