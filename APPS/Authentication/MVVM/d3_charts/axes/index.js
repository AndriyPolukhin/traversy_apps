/**
 * BAR CHART WITH LABELS USING D3js
 */

/**
 * VARIABLES
 */
// const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
const dataset = [1, 2, 3, 4, 5];

const
  svgWidth = 500,
  svgHeight = 300,
  barPadding = 5;
const barWidth = (svgWidth / dataset.length);
const svg = d3
  .select('svg')
  .attr("width", svgWidth)
  .attr("height", svgHeight);

/**
* BAR SCALE SET UP
*/
const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, svgHeight]);

/**
 * BAR CHART SET UP
 */
const barChart = svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("y", (d) => {
    return svgHeight - yScale(d);
  })
  .attr("height", (d) => {
    return yScale(d);
  })
  .attr("width", barWidth - barPadding)
  .attr("transform", (d, i) => {
    const translate = [barWidth * i, 0];
    return "translate(" + translate + ")";
  });


