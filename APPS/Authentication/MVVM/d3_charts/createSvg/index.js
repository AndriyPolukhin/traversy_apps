/**
 * CREATE AN SVG ELEMENT
 */

// 1. Set the variables
const svgWidth = 600, svgHeight = 500;
const svg = d3.select('svg')
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .attr("class", "svg-container")

// 2. Create a line
const line = svg
  .append("line")
  .attr("x1", 100)
  .attr("x2", 500)
  .attr("y1", 50)
  .attr("y2", 50)
  .attr("stroke", "red")
  .attr("stroke-width", 3);

// 3. Create a Rectangle
const react = svg
  .append("rect")
  .attr("x", 100)
  .attr("y", 100)
  .attr("width", 200)
  .attr("height", 100)
  .attr("fill", "#9805FF");

// 4. Create a circle
const circle = svg
  .append("circle")
  .attr("cx", 200)
  .attr("cy", 300)
  .attr("r", 80)
  .attr("fill", "#f208d5");