import styled from "styled-components";
import gsap from "gsap";
import React, { Suspense, useEffect} from "react";
import Navbar from "./Navbar";
import bgImg from "../asest/modenbg.png";
import bgnewImg from "../asest/newhome.png";

import { Canvas } from "@react-three/fiber";
import MoonImg  from "../asest/moon.png";
import LineImg  from "../asest/line.png";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
const Section = styled.div`
  height: 100vh;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: calc(100vh - 112px);
  
  @media only screen and (max-width: 768px) {
    width: 100%;
    height:1110px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
//   gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 49px;

  @media only screen and (max-width: 768px) {
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

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: fit-content;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 450px;
  height: 450px;
  object-fit: contain;
  position: absolute;
  inset: 0px;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
function NewHero() {
    const tl = gsap.timeline();
    useEffect(()=>{
        tl.from(".banner-animation", {
            opacity: 0,
            y:30,
            stagger: 0.2
          })
    }, [])
  return (
    <Section className=" bg-center bg-contain" style={{backgroundImage: `linear-gradient(rgba(51, 17, 86, 0.8), rgba(51, 17, 86, 0.8)), url(${bgImg})`}}>
    <div className="max-w-[1440px] m-auto">
      <Navbar timeline={tl}/>
      <Container  className="flex justify-between">
        <Left>
            <div className="text-center md:text-left overflow-hidden"></div>
          <h1 className=" text-center md:text-left text-3xl md:text-5xl text-white md:pb-3 banner-animation">Elevate Your Brand: <span className=" span-color-text">Invent</span></h1>
          <h1 className="  text-center md:text-left text-3xl md:text-5xl text-white pb-3 banner-animation">Transforming Visions into Reality!</h1>
          {/* <WhatWeDo>
             <Line src={LineImg} />
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo> */}
          <p className="text-center md:text-left w-full md:w-2/3 pt-7 pb-10 text-[0.9rem] md:text-xl banner-animation">
          We take pleasure in crafting delightful, human-centered digital experiences.
          </p>
          <Button className="banner-animation text-[1rem] py-3 px-2 md:px-4 md:py-5">Learn More</Button>
        </Left>
        <Right>
        <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.2}>
                <MeshDistortMaterial
                  color="#633783"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src={bgnewImg} />
        </Right>
      </Container>
    </div>
      
    </Section>
  );
}

export default NewHero;
