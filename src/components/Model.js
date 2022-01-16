import React, { useRef } from 'react'
import { useLoader, useFrame } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const Model = (props) => {
    const gltf = useLoader(GLTFLoader, 'models/logo.gltf')
    const ref = useRef()
  
    useFrame((_, delta) => ref.current.rotation.z += delta / 2)
  
    return (
      <mesh {...props} ref={ref} castShadow>
        <primitive object={gltf.scene} />
      </mesh>
    )
  }

  export default Model