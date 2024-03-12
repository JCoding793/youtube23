import React,{useEffect} from "react";
import Team1 from "../asest/team1.png";
import Team2 from "../asest/team2.png";
import Team3 from "../asest/team3.png";
import Team4 from "../asest/team4.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const teamMember = [
  {
    bgImg: Team1,
    member: "Benjamin Evalent",
    profession: " Ui Designer",
  },
  {
    bgImg: Team2,
    member: "Benjamin Evalent",
    profession: " Ui Designer",
  },
  {
    bgImg: Team3,
    member: "Benjamin Evalent",
    profession: " Ui Designer",
  },
  {
    bgImg: Team4,
    member: "Benjamin Evalent",
    profession: " Ui Designer",
  },
];
gsap.registerPlugin(ScrollTrigger);
export default function OurTeam() {
  useEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".our-team-container", 
        start: "top bottom",
        end: "bottom",
      },
    })
    tl.from(".our-team-animation", {
      opacity: 0,
      y:100,
      duration:1.4,
      stagger: 0.3,
    })
    
  }, [])
  return (
    <div className="bg-[#080017] px-[4%] our-team-container">
      <div className="main-team-container  max-w-[1440px] m-auto py-20 overflow-hidden">
        <h1 className="text-3xl md:text-5xl text-center  pb-3md:pb-6 font-medium our-team-animation">Our <span className="span-color-text">Team</span></h1>
        <div className="flex gap-10 md:gap-2 md:justify-center lg:justify-between flex-wrap py-8 overflow-hidden">
          {teamMember.map((item , index) => {
            return (
              <div className="w-full  md:w-[46%] lg:w-[22%] text-center our-team-animation" key={index} >
                <div
                  className="teambackground  h-[360px]  md:h-[400px] bg-no-repeat bg-cover bg-center rounded-3xl"
                  style={{ backgroundImage: `url(${item.bgImg})` }}
                ></div>
                <h1 className="text-[22px] font-semibold pt-3 md:pt-6">{item.member}</h1>
                <h6 className="text-[1rem] md:pt-2 uppercase">{item.profession}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
