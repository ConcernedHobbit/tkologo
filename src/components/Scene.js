import React from 'react'
import Model from './Model'

const Scene = () => (
    <>
        <pointLight position={[1, 0, 4]} castShadow />
        <Model rotation={[Math.PI / 2, 0, 0]} scale={3} />
    </>
)

export default Scene