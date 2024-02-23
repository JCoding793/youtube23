import React ,{Suspense}from 'react'
import { Canvas } from '@react-three/fiber';
import styled from "styled-components";
import { OrbitControls, Stage } from '@react-three/drei';
import Shoe from './Shoes';
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
const ProductDesign= ()=>{
  return (
    <>
    <Canvas>
      <Suspense fallback={null}>

     <Stage environment={"forest"} intensity={0.5}>
     <Shoe />
     </Stage>
     <OrbitControls enableZoom={false} autoRotate/>
    </Suspense>
    </Canvas>
    <Desc>We desgin products with a strong focus on both world class design and ensuring you product is a market success </Desc> 
</>
  )
}


export default ProductDesign;