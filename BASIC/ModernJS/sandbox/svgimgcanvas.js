/**
 * DRAWING TO CANVAS
 */
var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;
var ctx = canvas.getContext('2d');
ctx.font = '36px Cursive';
ctx.fillText('Hello World', 100, 100);

// document.body.appendChild(canvas);

/**
 * CREATING SVG
 */
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.width = 500;
svg.height = 50;

var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '0');
text.setAttribute('y', '50');
text.style.fontFamily = 'Times New Roman';
text.style.fontSize = '50';
text.textContent = 'Hello World';
svg.appendChild(text);
document.body.appendChild(svg);

/**
 * IMAGE FILES
 */

var img = new Image();
img.src = 'https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg';
img.width = 500;
document.body.appendChild(img);



