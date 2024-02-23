import React from 'react'
import  styled from "styled-components";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

import Atom from './Atom';
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
const Development= ()=>{
  return (
    <> 
     <Canvas camera={{position:[0,0,10]}}>
      <Atom />
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
    <Desc>
      We desgin products with a strong focus on both world class design and ensuring you product is a market success </Desc>    
    </>

  )
}

export default Development;