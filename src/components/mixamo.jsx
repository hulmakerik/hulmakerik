/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";


export default function Model(props) {
    const group = useRef();
    const { nodes, animations } = useGLTF("./human/mixamo_small.glb");
    const { actions } = useAnimations(animations, group);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
                    <skinnedMesh
                        name="HG_Body"
                        geometry={nodes.HG_Body.geometry}
                        material={nodes.HG_Body.material}
                        skeleton={nodes.HG_Body.skeleton}
                    />
                    <skinnedMesh
                        name="HG_Eyes"
                        geometry={nodes.HG_Eyes.geometry}
                        material={nodes.HG_Eyes.material}
                        skeleton={nodes.HG_Eyes.skeleton}
                    />
                    <skinnedMesh
                        name="HG_TeethLower"
                        geometry={nodes.HG_TeethLower.geometry}
                        material={nodes.HG_TeethLower.material}
                        skeleton={nodes.HG_TeethLower.skeleton}
                    />
                    <skinnedMesh
                        name="HG_TeethUpper"
                        geometry={nodes.HG_TeethUpper.geometry}
                        material={nodes.HG_TeethUpper.material}
                        skeleton={nodes.HG_TeethUpper.skeleton}
                    />
                    <primitive object={nodes.mixamorigHips} />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("./human/mixamo_small.glb");
