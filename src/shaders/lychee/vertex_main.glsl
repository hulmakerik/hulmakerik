float spike_size = 0.3;
dl = response(normal);
vDisplacement = dl.y-dl.x;

// uMouse is in range -1, 1 -> length(uMouse) is distance from screen center
// thats why we scale displacement with it
float sqrt2 = 1.414213562373095048801;
vDisplacement *= smoothstep(0.0, sqrt2, sqrt2-length(uMouse)) * spike_size;
transformed += normalize(objectNormal) * vDisplacement;