/**
 * CREATING A PIE CHART
 */

// 1. VARIABELS
const data = [
  { 'platform': 'Android', 'percentage': 40.11 },
  { 'platform': 'Windows', 'percentage': 36.69 },
  { 'platform': 'iOS', 'percentage': 13.06 }
];

const
  svgWidth = 500,
  svgHeight = 300,
  radius = Math.min(svgWidth, svgHeight) / 2;
const svg = d3
  .select('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

// 2. Create group element to hold pie chart
const g = svg.append('g')
  .attr('transform', 'translate(' + radius + ',' + radius + ')');

const color = d3.scaleOrdinal(d3.schemeCategory10);

const pie = d3.pie().value((d) => {
  return d.percentage;
});

const path = d3
  .arc()
  .outerRadius(radius)
  .innerRadius(0);

const arc = g.selectAll('arc')
  .data(pie(data))
  .enter()
  .append("g");

arc.append("path")
  .attr("d", path)
  .attr("fill", (d) => {
    return color(d.data.percentage);
  });

const label = d3.arc()
  .outerRadius(radius)
  .innerRadius(0);
arc.append("text")
  .attr("transform", (d) => {
    return "translate(" + label.centroid(d) + ")";
  })
  .attr("text-anchor", "middle")
  .text((d) => {
    return d.data.platform + ':' + d.data.percentage + '%';
  });