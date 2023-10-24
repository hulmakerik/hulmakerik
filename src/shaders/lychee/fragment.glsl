uniform float uTime;
uniform float uBloom;

varying vec3 vPosition;// position of the vertex
varying vec3 vNormal;// normals - same when flat, different with change
varying vec2 vUv;// 0,0 bottom left, 1,1 top right
varying float vDisplacement;
varying vec2 dl;
#define PI 3.1415926535897932384626433832795


void main() {
	// tohle je jen gradient podle vysky
	vec3 col = vDisplacement * vec3(0.9803921568627451, 0.23137254901960785, 0.17647058823529413);

	// tohle se mi celkem libi
	col = vec3(dl.x, dl.y, dl.y-dl.x);

	// float alpha = uClickTime > 0.001 ? 1.0 - min(1.0, uClickTime/1.0) : 1.0;
	col *= smoothstep(0.0,1.0, uBloom);

}

// soucasny plan je, poslat po objektu koule vlny, ktere spolu budou interagovat