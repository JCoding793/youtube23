import React, { useEffect } from "react";
import Img from "../asest/testimonial1.png";
import {gsap , Power1} from "gsap";
export default function TestimonialClient() {

  useEffect(()=>{
   const vector1 = "M436.404 21.3523C307.354 65.828 198.768 68.9593 117.669 74.3436C-0.957972 82.2193 -7.22661 211.043 3.76422 277.31C28.5435 439.683 271.707 449.398 406.928 408.788C605.394 349.184 678.338 344.916 689.692 258.313C727.714 -31.6968 552.973 -18.8223 436.404 21.3523Z";
   const vector2 = "M384.388 26.7326C241.237 50.1604 164.109 -0.00106372 111.472 0C-2.45113 0.00230229 -12.9925 168.053 9.78593 247.15C66.3886 443.699 229.993 448.329 414.008 410.338C584.537 375.131 687.764 337.521 694.205 241.38C701.361 134.572 665.026 -19.196 384.388 26.7326Z";
   const vector3 = "M383.47 27.4194C239.896 51.449 237.299 -0.00263607 109.748 0C-4.51153 0.0023614 -10.2944 189.379 7.76168 253.499C64.5313 455.098 225.718 434.653 413.178 420.879C599.469 407.192 687.743 346.192 694.203 247.582C701.38 138.03 664.938 -19.6892 383.47 27.4194Z";
   const vector4 = "M383.065 36.5071C241.952 73.543 233.003 -32.1084 109.085 10.1618C0.168027 47.3152 -11.0706 192.122 7.00256 253.73C73.1566 479.239 225.164 427.787 412.801 414.553C638.107 398.662 687.624 342.791 694.09 248.044C701.274 142.784 671.986 -39.3217 383.065 36.5071Z";
   const vector5 = "M381.24 31.6565C239.453 67.6148 225.424 -23.7158 105.953 6.07771C3.38295 31.6564 -7.54345 175.882 3.3829 242.56C40.4484 468.751 227.429 444.251 411.118 398.704C641.672 341.536 687.252 329.03 693.749 237.039C702.558 112.321 671.539 -41.9661 381.24 31.6565Z";
   const vector6 = "M381.16 33.042C242.344 82.4434 225.377 -25.7193 105.931 5.89774C3.38224 33.042 -7.54188 186.095 3.38219 256.853C40.4399 496.888 224.414 390.532 411.032 422.554C610.184 456.726 686.21 348.539 693.605 250.995C703.535 120.008 666.584 -68.5329 381.16 33.042Z";
   const vector7 = "M382.173 27.4149C236.911 45.4015 238.103 0.0024365 106.606 0C0.96099 -0.00195747 -7.69353 177.495 3.93238 253.458C41.0352 495.885 225.235 388.469 412.081 420.81C611.477 455.323 695 377.568 695 247.541C695 136.201 695 -11.3199 382.173 27.4149Z";
   const vector8 = "M387.273 31.2368C244.718 11.9761 244.742 -10.5333 116.342 5.41304C-21.9734 22.5909 -8.92774 176.291 15.3955 244.161C116.342 525.835 202.973 401.801 416.679 401.801C614.581 401.801 694.838 361.068 694.838 238.587C694.838 135.772 712.213 75.1397 387.273 31.2368Z";
   const vector9 = "M385.265 43.6878C241.764 25.1209 234.158 -28.0281 112.535 18.7953C-1.68879 62.7705 -14.3461 183.815 10.9182 248.933C112.535 510.851 208.855 338.261 414.866 400.889C694.872 486.011 694.872 361.625 694.872 243.561C694.872 125.497 710.874 85.8166 385.265 43.6878Z";
   const vector10 = "";
  gsap.to("#myPath", {
    keyframes: {
    //  "0%":  {  autoAlpha: true, attr: { d:vector6 },},
    //  "15%": { autoAlpha: true, attr: { d:vector2 },}, 
     "0%": { autoAlpha: true, attr: { d:vector9 },},
     "25%": { autoAlpha: true, attr: { d:vector4 },},
     "50%": { autoAlpha: true, attr: { d:vector3 },},
     "75%": { autoAlpha: true, attr: { d:vector5 },},
     "100%": { autoAlpha: true, attr: { d:vector8 },},
    
    },
    repeat: -1,
    autoAlpha: true,
    yoyo: true,

    ease: "none", // ease the entire keyframe block
    duration: 8,
   })
         
  })
  
  return (
    <div className="bg-[#080017]">
      <div className="testimonial-container max-w-[1440px] m-auto text-center py-12">
        <div>
          <h1 className="text-3xl md:text-5xl font-medium pb-6"><span className="span-color-text ">Testimonials</span></h1>
          <p className=" text-[1rem] md:text-2xl font-bold">Voices of Trust: What Our Clients Say</p>
        </div>
        <div className="py-20 ">
          <div className="flex flex-col justify-center items-center relative w-full md:w-[692px] m-auto">
          {/* width="800" height="416" */}
            <svg  className="w-[80%] md:w-[670px] md:h-[429px] " viewBox="0 0 692 416" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="myPath" d="M383.065 36.5071C241.952 73.543 233.003 -32.1084 109.085 10.1618C0.168027 47.3152 -11.0706 192.122 7.00256 253.73C73.1566 479.239 225.164 427.787 412.801 414.553C638.107 398.662 687.624 342.791 694.09 248.044C701.274 142.784 671.986 -39.3217 383.065 36.5071Z" fill="#F7FAFF"/>
         </svg>
          <div className="flex flex-col  gap-6 md:gap-14 justify-between  items-center text-center absolute md:h-[416px] md:pb-14 md:px-12 testimonial-content">
            <img src={Img} className="h-14 w-14 md:h-28 md:w-28" alt=".. " />
            <div>
              <p className="text-black text-[0.7rem] md:text-[1rem] w-4/6 md:w-auto m-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, omnis repellendus cupiditate dolor recusandae voluptas velit doloremque vero, error, in voluptatem blanditiis et itaque tenetur consequatur dolores ducimus libero tempora quod?
            </p>
            <h1 className="text-[#333CD8] font-semibold text-[0.8rem] md:text-xl">Georgia Jones</h1>
            <h4 className="text-[0.6rem] md:text-[0.9rem] text-[#FA9521]">UI/UX Desinger</h4>
            </div>    
          </div>
          </div>
       

        </div>
        </div>
    </div>
  );
}
