
vec2 dfdx = vec2(dFdx(vDisplacement), dFdy(vDisplacement));
normal = perturbNormalArb( - vViewPosition, normal, dfdx, faceDirection );
// gl_FragColor = vec4(0.1, 0.3, 1., 1.);