/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 chair.gltf --transform 
Files: chair.gltf [27.31MB] > C:\Users\jatin\Desktop\rocking_chair\chair-transformed.glb [460.57KB] (98%)
Author: Lassi Kaukonen (https://sketchfab.com/thesidekick)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/rocking-chair-ad9874cd2d734e64ba2b13cef46279b6
Title: Rocking chair
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Chair(props) {
  const { nodes, materials } = useGLTF('/chair-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Rocking_chair} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/chair-transformed.glb')
