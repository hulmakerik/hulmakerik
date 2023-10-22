import { useFBX, useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { useEffect } from "react";
import React, { useRef } from 'react';

export default function Nathan(props) {
    const groupRef = useRef()

    // const model = useFBX('./human/anim.fbx')
    const model = useFBX("./rp_nathan_animated_003_walking_FBX/rp_nathan_animated_003_walking.fbx")
    const animations = useAnimations(model.animations, model)
    console.log("nathan")
    console.log(animations.actions['Take 001'])

    useEffect(() => {
        const action = animations.actions['Take 001']
        action.play()
    }, [])

    return (
        <group ref={groupRef}>
            <primitive
                object={model}
                scale={0.02}
            />
        </group>
    )
}