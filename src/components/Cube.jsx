import React, { useRef } from 'react'
import {useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, RenderTexture, Text } from '@react-three/drei';
export const Cube =()=> {
    const textRef = useRef();

    useFrame(state=>(textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))
  return (
    <mesh>
     <boxGeometry args={[1.7 ,1.7 ,1.7]}/>
     <meshStandardMaterial>
     <RenderTexture attach="map">
    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#dc9dcd"]} />
          <Text ref={textRef} fontSize={2} color="#555">
           Our Story 
          </Text>
        </RenderTexture>
     </meshStandardMaterial>
</mesh>
  )
}
