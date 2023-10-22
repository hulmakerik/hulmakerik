import { useFBX, useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { useEffect } from "react";
import React, { useRef } from 'react';
import * as THREE from "three";


export default function Anim(props) {
    const model = useGLTF('./human/mixamo.glb')
    const animations = useAnimations(model.animations, model.scene)
    // const body = model.children.find(item => item.name === "HG_Body");
    // body.material = new THREE.MeshStandardMaterial(useTexture({
    //     map: './human/base_color.png',
    //     normalMap: './human/normal.png',
    //     roughnessMap: './human/roughness.png',
    // }));
    // const eyes = model.children.find(item => item.name === "HG_Eyes");
    // eyes.material = new THREE.MeshStandardMaterial(useTexture({
    //     map: './human/eyes.png',
    // }));
    console.log(animations.actions)

    // useEffect(() => {
    //     // const action = animations.actions['HG_Elliot|WalkCycleAction']
    //     const action = animations.actions['sitting_cry']
    //     action.play()
    // }, [])
    // console.log(model)

    return <primitive
        {...props}
        castShadow
        recieveShadow
        object={model.scene}
        scale={1}
    />
}


// export default function Anim(props) {
//     const model = useFBX('./human/mixamo.fbx')
//     // const model = useGLTF('./human/anim.gltf')
//     const animations = useAnimations(model.animations, model)
// 
//     const body = model.children.find(item => item.name === "HG_Body");
//     body.material = new THREE.MeshStandardMaterial(useTexture({
//         map: './human/base_color.png',
//         normalMap: './human/normal.png',
//         roughnessMap: './human/roughness.png',
//     }));
//     const eyes = model.children.find(item => item.name === "HG_Eyes");
//     eyes.material = new THREE.MeshStandardMaterial(useTexture({
//         map: './human/eyes.png',
//     }));
//     console.log(animations.actions)
// 
//     useEffect(() => {
//         // const action = animations.actions['HG_Elliot|WalkCycleAction']
//         const action = animations.actions['Armature|sitting_cry']
//         action.play()
//     }, [])
//     console.log(model)
// 
//     return <primitive
//         {...props}
//         castShadow
//         recieveShadow
//         object={model}
//         scale={0.02}
//     />
// }


useFBX.preload("./human/model.gltf");
useTexture.preload("./human/base_color.png")
useTexture.preload("./human/eyes.png")
useTexture.preload("./human/normal.png")
useTexture.preload("./human/roughness.png")