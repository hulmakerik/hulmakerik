import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './experience'
import * as THREE from 'three'
import { StrictMode } from 'react'

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  // <StrictMode>
    <Canvas
      // dpr={[1, 2]} // this is the default value to clip pixel ratio optimization
      shadows
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 2, 6]
      }}
    >
    <Experience />
    </Canvas>
  // </StrictMode>
)