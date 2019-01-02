/**
 * Math.atan2 to find direction
 */

// Math.atan(yComponent, xComponent) return the angle in radius within the range of -Math.PI to Math.PI(-180 to 180 deg)

// Direction of a vector
const vec = { x: 4, y: 3 };
const dir = Math.atan2(vec.y, vec.x);

console.log('Direction of a vector:', dir);

// Direction of a line
const line = {
  p1: { x: 100, y: 128 },
  p2: { x: 320, y: 256 }
}
// direction from p1 to p2
const lineDir = Math.atan2(line.p2.y - line.p1.y, line.p2.x - line.p1.x);
console.log('Direction of a line:', lineDir);

// Direction from a point to another point
const point1 = { x: 123, y: 294 };
const point2 = { x: 354, y: 284 };
// get direction from point1 to point2
const dirFromPointToPoint = Math.atan2(
  point2.y - point1.y,
  point2.x - point1.x
);
console.log('Direction from point to point', dirFromPointToPoint);

/**
 * Sin & Cos to create a vector given direction & distance
 */

// vector in polar form (direction & distance) you will want to convert it to a cartesian vector with a x and y component.
const direction = 1.4536; // direction in radians
const distance = 200; // distance
const vector = {}; // vector
vector.x = Math.cos(direction) * distance; //  get the x component
vector.y = Math.sin(direction) * distance; //  get the y component
console.log('Vector', vector);

//  ignore the distance to create a normalised (1 unit long) vector in the direction of dir

const dir2 = 1.4536;
const vec2 = {};
vec2.x = Math.cos(dir2);
vec2.y = Math.sin(dir2);
console.log('Normalised', vec2);

// If your coordinate system has y as up then you need to switch cos and sin. In this case a positive direction is in a counterclockwise direction from the x axis.

const dir3 = 1.4536;
const vec3 = {};
vec3.x = Math.sin(dir3);
vec3.y = Math.cos(dir3);
console.log('y as up', vec3);

/**
 * Math.hypot
 */

// To find the distance between two points we use pythagoras to get the square root of the sum of the square of the component of the vector between them.

const v1 = { x: 10, y: 5 };
const v2 = { x: 20, y: 10 };
const x = v2.x - v1.x;
const y = v2.y - v2.y;
const distanceBetween = Math.sqrt(x * x + y * y);
console.log('Distance Between:', distanceBetween);

// es5
const v11 = { x: 10, y: 5 };
const v22 = { x: 20, y: 10 };
const x1 = v22.x - v11.x;
const y1 = v22.y - v11.y;
const distanceBetween2 = Math.hypot(x, y);
console.log('Distance Between:', distanceBetween2);

const ax = { x: 10, y: 5 };
const ay = { x: 20, y: 10 };
const adist = Math.hypot(ay.x - ax.x, ay.y - ax.y);
console.log(adist);

// Math.hypot can take any number of dimensions
// 3d distance
const v1_3d = { x: 10, y: 5, z: 7 };
const v2_3d = { x: 20, y: 10, z: 16 };
const dist_3d = Math.hypot(
  v2_3d.x - v1_3d.x,
  v2_3d.y - v1_3d.y,
  v2_3d.z - v1_3d.z
);
console.log('3d dist:', dist_3d);

// // find length of 11th dimensional vector

const v = [1, 3, 2, 6, 1, 7, 3, 7, 5, 3, 1];
let i = 0;
d11 = Math.hypot(
  v[i++], v[i++], v[i++],
  v[i++], v[i++], v[i++],
  v[i++], v[i++], v[i++],
  v[i++], v[i++]);
console.log('11th Dimentional:', d11);

// PERIODIC FUNCTIONS USING MATH.sin

// Math.sin and Math.cos are cyclic with a period of 2*PI radians (360 deg) they output a wave with an amplitude of 2 in the range -1 to 1.


// time is the time in seconds when you want to get a sample
// Frequency represents the number of oscillations per second

const oscillator1 = (time, frequency) => {
  return Math.sin(time * 2 * Math.PI * frequency);
}
console.log(
  'Oscillator1:', oscillator1(100, 2)
);

const oscillator = (
  time,
  frequency = 1,
  amplitude = 1,
  phase = 0,
  offset = 0) => {
  let t = time * frequency * Math.PI * 2; // get phase at time
  t += phase * Math.PI * 2; // add the phase offset
  let v = Math.sin(t); // get the value at the calculated position in the cycle
  v *= amplitude; // set the amplitude
  v += offset; // add the offset
  return v;
}

console.log('Oscillator:', oscillator(100, 1, 1, 2, 2));

const oscillator_fast = (time, frequency = 1, amplitude = 1, phase = 0, offset = 0) => {
  return Math.sin(time * frequency * Math.PI * 2 + phase * Math.PI * 2) * amplitude + offset;
}








