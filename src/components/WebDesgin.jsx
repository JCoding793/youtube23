import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber';
import { Chair } from './Chair';
import styled from "styled-components"
import Mac from './Mac';
import { OrbitControls , Stage } from '@react-three/drei';
const Desc = styled.div`
width : 200px;
height: 70px;
padding: 20px;
background-color: white;
 border-radius: 10px;
 position: absolute;
 top:100px;
 right: 100px;

 @media only screen and (max-width: 768px) {
  top: 0;
  bottom: 0;
  left: 17%;
  margin: 0 auto;
}
`;
const WebDesgin= ()=>{
  return (
    <>
     <Canvas>
      <Suspense fallback={null}>

      
      <Stage environment={"city"} intensity={0.6}>
      <Mac />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
      </Suspense>
    </Canvas>
    <Desc>We desgin products with a strong focus on both world class design and ensuring you product is a market success </Desc> 
    </>
   
  )
}

export default WebDesgin;