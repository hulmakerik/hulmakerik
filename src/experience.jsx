import { useRef, Suspense, forwardRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Lychee from './components/lychee'
import { useControls } from 'leva'
import * as THREE from 'three'

export default function Experience() {
    const ambientRef = useRef()
    const directionalRef = useRef()
    const pointRef = useRef()
    const spotRef = useRef()

    useControls('Ambient Light', {
        visible: {
            value: false,
            onChange: (v) => {
                ambientRef.current.visible = v
            },
        },
        color: {
            value: 'white',
            onChange: (v) => {
                ambientRef.current.color = new THREE.Color(v)
            },
        },
        intensity: {
            value: 0.5,
            min: 0,
            max: 5,
            step: 0.01,
            onChange: (v) => {
                ambientRef.current.intensity = v
            },
        },
    })

    useControls('Directional Light', {
        visible: {
            value: true,
            onChange: (v) => {
                directionalRef.current.visible = v
            },
        },
        intensity: {
            value: 1.5,
            min: 0,
            max: 5,
            step: 0.01,
            onChange: (v) => {
                directionalRef.current.intensity = v
            },
        },
        position: {
            x: 1,
            y: 1,
            z: 1,
            onChange: (v) => {
                directionalRef.current.position.copy(v)
            },
        },
        color: {
            value: 'white',
            onChange: (v) => {
                directionalRef.current.color = new THREE.Color(v)
            },
        },
    })

    // console.log(lycheeRef.current.children.material.userData.shader)
    // <Human position-y={controls.y_position} />
    // lycheeRef.current.material.userData.shader.uniforms.uBloom.value = controls.uBloom

    return <>
        <Perf position="top-left" />
        <OrbitControls />
        <directionalLight ref={directionalRef} castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight ref={ambientRef} intensity={0.5} />
        <Suspense fallback={<h2>Loading...</h2>}>
            <Lychee />
        </Suspense>
    </>
}