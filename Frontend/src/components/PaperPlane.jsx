// components/PaperPlane.jsx
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const PaperPlane = (props) => {
  const ref = useRef()
  const { scene } = useGLTF('/models/paper_plane_low_poly_game_ready_for_free.glb')

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    ref.current.position.x = Math.sin(t) * 2
    ref.current.position.y = Math.cos(t * 1.5) * 1
    ref.current.position.z = Math.sin(t * 0.7) * 1.5

    ref.current.rotation.y += 0.005
    ref.current.rotation.z += 0.002
  })

  return <primitive ref={ref} object={scene} scale={0.5} {...props} />
}

export default PaperPlane
