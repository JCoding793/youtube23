import React,{useEffect} from "react";
import HomeBannerImg from "../asest/modenbg.png"
import styled from "styled-components";
import { Cube } from "./Cube";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import MoonImg  from "../asest/moon.png";
import LineImg from "../asest/line.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Section = styled.div`
  scroll-snap-align: center;
  
`;

const Container = styled.div`

  scroll-snap-align: center;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
 width:50%;

  @media only screen and (max-width: 768px) {
    display: none;
    width:100%;
  }
`;



const Right = styled.div`
  width:50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // gap: 20px;

  @media only screen and (max-width: 768px) {
    width:100%;
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;



const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
gsap.registerPlugin(ScrollTrigger);
const NewWho = () => {
  useEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutus-animation", 
        start: "top bottom",
        end: "bottom",
      },
    })
    tl.from(".about-h-animation", {
      opacity: 0,
      y:100,
      duration:1.4,
      stagger: 0.3,
    })
     }, [])
  return (
    <div className="px-[4%] " style={{
      backgroundImage: `linear-gradient(rgba(24, 9 ,39, 0.8) , rgba(24, 9, 39, 0.8)), url(${HomeBannerImg})`
    }}>
      <Section className="aboutus-animation py-[4.7rem] max-w-[1440px] m-auto" >
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right className=" overflow-hidden">
          <h1 className="text-3xl md:text-5xl about-h-animation"><span className="span-color-text font-semibold ">About Us</span></h1>
          <h3 className="text-[0.9rem] md:text-xl font-bold w-2/3  pt-4 pb-4 about-h-animation">
          Unveiling Our Creative Journey: Crafting Stories, Igniting Imagination
          </h3>
          <p className="text-[0.8rem] md:text-[1rem] font-normal about-h-animation">Welcome to Design Plus, where creativity knows no bounds. We are a passionate team of visionaries, storytellers, and innovators dedicated to shaping unique narratives and bringing ideas to life. Our journey began with a shared belief in the transformative power of creativity, and since then, we've been on a mission to redefine the way stories are told. From conceptualization to execution, we thrive on pushing boundaries, embracing challenges, and turning visions into captivating realities. At Design Plus, creativity is not just a service; it's our essence. Join us in exploring the endless possibilities as we embark on a collaborative journey to inspire, engage, and leave an indelible mark on the world of creative expression. This is not just our story; it's a canvas waiting for your narrative. Welcome to the heart of creativity – welcome to Design Plus.</p>
          <div className="flex justify-between w-2/3 pt-10 overflow-hidden">
          <div className="about-h-animation">
              <p className="text-[1.4rem] md:text-3xl font-semibold ">250+</p>
              <p className="text-[0.8rem] md:text-[1rem]">Clients</p>
            </div>
            <div  className="about-h-animation"> 
              <p className="text-[1.4rem] md:text-3xl font-semibold ">5K+</p>
              <p  className="text-[0.8rem] md:text-[1rem]">Projects</p>
            </div>
            <div  className="about-h-animation">
              <p className="text-[1.4rem] md:text-3xl font-semibold ">4</p>
              <p  className="text-[0.8rem] md:text-[1rem]">Years</p>
            </div>
          </div>
          {/* <Button>See our work</Button> */}
        </Right>
      </Container>
    </Section>
    </div>
    
  );
};

export default NewWho;
