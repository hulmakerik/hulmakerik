import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, forwardRef, useState } from 'react';


import vertexMain from '../shaders/lychee/vertex_main.glsl';
import vertexPars from '../shaders/lychee/vertex_pars.glsl'
import fragmentMain from '../shaders/lychee/fragment_main.glsl'
import fragmentPars from '../shaders/lychee/fragment_pars.glsl'


class bloomAutomat{
    /*
      linearly interpolates between 0 and 1 based on the time difference
      When mouse down -> decreases to min
      when mouse up -> increases to max
    */
    constructor(x0, duration, min=0.0, max=1.0) {
      this.constant = 1/duration;
      this.x = x0;
      this.time = 0.0;
      this.down = false;
      this.min = min;
      this.max = max;
    }

    update(time) {
        const step = (time-this.time) * this.constant
        if (this.down)
            this.x = Math.max(this.min, this.x - step)
        else
            this.x = Math.min(this.max, this.x + step)
        this.time = time
        return this.x
    }
  }


export default function Lychee(props) {
    // meshes
    const geometry = new THREE.IcosahedronGeometry(1, 300)
    // tutorial on how to inject custom shaders into threejs:
    // https://www.youtube.com/watch?v=oKbCaj1J6EI&t=659s
    // https://youtu.be/vowT_8oVFmM?si=j1gi8878Nh_rbl3l
    // const material = new THREE.MeshStandardMaterial()
    const {size, viewport} = useThree()
    const material = new THREE.MeshStandardMaterial({
        onBeforeCompile: (shader) => {
            // storing a reference to the shader object
            material.userData.shader = shader

            // uniforms
            shader.uniforms.uTime = { value: 0.0 }
            shader.uniforms.uBloom = { value: 1.0 }
            // shader.uniforms.uMouse = { value: new THREE.Vector2(0.0, 0.0) }
            shader.uniforms.uMouse = { value: new THREE.Vector2(size.width/2, size.height/2) }
            shader.uniforms.uResolution = { value: new THREE.Vector2(size.width, size.height) }

            const parsVertexString = /* glsl */`#include <displacementmap_pars_vertex>`
            shader.vertexShader = shader.vertexShader.replace(
                parsVertexString,
                parsVertexString + "\n" + vertexPars
            )
            const mainVertexString = /* glsl */`#include <displacementmap_vertex>`
            shader.vertexShader = shader.vertexShader.replace(
                mainVertexString,
                mainVertexString + "\n" + vertexMain
            )
            const parsFragmentString = /* glsl */`#include <bumpmap_pars_fragment>`
            shader.fragmentShader = shader.fragmentShader.replace(
                parsFragmentString,
                parsFragmentString + "\n" + fragmentPars + "\n"
            )
            const mainFragmentString = /* glsl */`#include <normal_fragment_maps>`
            shader.fragmentShader = shader.fragmentShader.replace(
                mainFragmentString,
                mainFragmentString + "\n" + fragmentMain + "\n"
            )
        },
    })

    const model = new THREE.Mesh(geometry, material)
    const ref = useRef()
    let bloom = new bloomAutomat(0.0, 1.0, 0.4, 1.0)

    // hooks: https://docs.pmnd.rs/react-three-fiber/api/hooks
    useFrame(({clock, pointer }) => {
        if (ref.current.material.userData.shader) {
            ref.current.material.userData.shader.uniforms.uTime.value = clock.getElapsedTime()
            ref.current.material.userData.shader.uniforms.uMouse.value.x = pointer.x
            ref.current.material.userData.shader.uniforms.uMouse.value.y = pointer.y
            // ref.current.material.userData.shader.uniforms.uMouse.value = pointer.x
            const intensity = bloom.update(clock.getElapsedTime())
            ref.current.material.userData.shader.uniforms.uBloom.value = intensity
            // console.log(pointer)
            // console.log(intensity)
        }
        // console.log(events)
        // console.log(ref.current.material.userData.shader)
        // ref.current.material.userData.shader.uniforms.uTime.value = clock.getElapsedTime()
        // ref.current.uniforms.uTime = clock.getElapsedTime();
    });
            //ref={ref}

    // events: https://gracious-keller-98ef35.netlify.app/docs/api/events/
    return (
        <primitive
            {...props}
            ref={ref}
            object={model}
            // onPointerDown={() => setPointerDown(true)}
            // onPointerUp={() => setPointerDown(false)}
        />
    )
}