import React, { useEffect } from "react";
import Img from "../asest/testimonial1.png";
import { gsap, Power1 } from "gsap";
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

export default function TestimonialClientModel() {
  return (
    <div className="bg-[#080017]">
      <div className="testimonial-container max-w-[1440px] m-auto text-center py-12">
        <div>
          <h1 className="text-3xl md:text-5xl font-medium pb-6">
            <span className="span-color-text ">Testimonials</span>
          </h1>
          <p className=" text-[1rem] md:text-2xl font-bold">
            Voices of Trust: What Our Clients Say
          </p>
        </div>
        <div className=""> 
        
          <div className="flex flex-col justify-center items-center relative m-auto">
            {/* w-full md:w-[692px]  */}
            <div className="h-[400px] w-[100vh] md:h-[600px] md:w-[1000px] touch-none">
              <Canvas  >
              <OrbitControls  enableZoom={false} />
              <ambientLight  intensity={5} />
              <directionalLight position={[3,2,1]}/>
                <Sphere args={[1, 25, 30]} scale={[3.6, 2, 2.8]}>
                 <MeshDistortMaterial color={"#fff"}
                 attach={"material"}
                 distort={0.5}
                 speed={1}
                 />
              </Sphere>
            </Canvas>
            </div>
           

            <div className="flex flex-col  gap-6 md:gap-14 justify-between absolute items-center text-center  md:h-[416px] md:pb-14 md:px-12 testimonial-content md:w-[602px] m-auto">
              <img src={Img} className="h-14 w-14 md:h-28 md:w-28" alt=".. " />
              <div>
                <p className="text-black text-[0.7rem] md:text-[1rem] w-4/6 md:w-auto m-auto">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Perspiciatis, omnis repellendus cupiditate dolor recusandae
                  voluptas velit doloremque vero, error, in voluptatem
                  blanditiis et itaque tenetur consequatur dolores ducimus
                  libero tempora quod?
                </p>
                <h1 className="text-[#333CD8] font-semibold text-[0.8rem] md:text-xl">
                  Georgia Jones
                </h1>
                <h4 className="text-[0.6rem] md:text-[0.9rem] text-[#FA9521]">
                  UI/UX Desinger
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    // <Canvas>
    //   <OrbitControls enableZoom={false} />
    //   <ambientLight intensity={1} />
    //   <directionalLight position={[3, 2, 1]} />
    //   <OvalBlobGeometry />
    // </Canvas>
  );
}

// function OvalBlobGeometry() {
//   const geometry = new THREE.SphereGeometry(1, 20, 32); // Adjust segments for smoother curve
//   geometry.scale(3, 2, 1); // Scale the sphere to create an oval shape
//   const material = new THREE.MeshPhongMaterial({ color: "#fff" });

//   return (
//     <mesh geometry={geometry} material={material}>
//       <MeshDistortMaterial
//         color={"#fff"}
//         attach={"material"}
//         distort={0.4}
//         speed={1.2}
//       />
//     </mesh>
//   );
// }