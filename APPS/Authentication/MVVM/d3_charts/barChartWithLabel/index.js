/**
 * BAR CHART WITH LABELS USING D3js
 */

/**
 * VARIABLES
 */
const dataset = [80, 100, 56, 120, 160, 36, 40, 120, 160];
const
  svgWidth = 500,
  svgHeight = 300,
  barPadding = 5;
const barWidth = svgWidth / dataset.length;
const svg = d3
  .select('svg')
  .attr("width", svgWidth)
  .attr("height", svgHeight);

/**
 * BAR CHART SET UP
 */
const barChart = svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("y", (d) => {
    return svgHeight - d;
  })
  .attr("height", (d) => {
    return d;
  })
  .attr("width", barWidth - barPadding)
  .attr("class", "bar")
  .attr("transform", (d, i) => {
    const x = [barWidth * i, 0];
    return "translate(" + x + ")";
  });

/**
* BAR LABEL SET UP
*/
const text = svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => {
    return d;
  })
  .attr("y", (d, i) => {
    return svgHeight - d - 2;
  })
  .attr("x", (d, i) => {
    return barWidth * i;
  })
  .attr("fill", "#A64C38");