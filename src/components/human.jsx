import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";


export default function Human(props) {
  const { nodes, _ } = useGLTF("./human/model.gltf");
  const body_material = new THREE.MeshStandardMaterial(useTexture({
    map: './human/base_color.png',
    normalMap: './human/normal.png',
    roughnessMap: './human/roughness.png',
  }));
  nodes.HG_Eyes.material.map = useTexture('./human/eyes.png')

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HG_Body.geometry}
        material={body_material}
      />
      <mesh
        receiveShadow
        geometry={nodes.HG_Eyes.geometry}
        material={nodes.HG_Eyes.material}
      />
    </group>
  );
}

useGLTF.preload("./human/model.gltf");
useTexture.preload("./human/base_color.png")
useTexture.preload("./human/normal.png")
useTexture.preload("./human/roughness.png")