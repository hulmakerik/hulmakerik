# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Models:

## How to make a human .gltf model with animations
 1. Generate models using blender and [human generator](https://www.humgen3d.com/).
 2. Bake the textures using [this](https://www.youtube.com/watch?v=NROaBVaQ0do) tutorial.
 3. Export the model to .fbx format (.glb won't work - bug)
 4. Import the model to [mixamo](https://www.mixamo.com) and pick animations. Save all animations to a corresponding .fbx file.
 5. Load all .fbx files from mixamo and delete all models except the first one. In the animation tab, rename all animations.
 6. Apply the textures (base color, normal, roughness, specular) using shader editor [tutorial](https://www.youtube.com/watch?v=mX5O5v_d3aE)
 7. Export the model with animations to .glb (the bug is now gone thanks to the mixamo)
 8. Compress the .glb file using [aspose](https://products.aspose.app/3d/compression/gltf) (but it does not always work with animations and textures - it did not work for me, so I use the uncompressed model).
 9. Finally, you can use [this tool](https://gltf.pmnd.rs/) to create a component from the .glb/.gltf file.

I literally spend 2 days figuring out how to get the model with textures and animations to the three.js. It seems like this is the only way, once animations does not work, then texture map is off, bugs with exportation, etc, etc. It was really painful.

Few models can also be downloaded from [renderpeople.com](https://renderpeople.com/free-3d-people/) - it is a free version without modifications.