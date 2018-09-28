/**
 * CREATE A LINE CHART
 */

// 1. API to fetch historical data of Bitcoin Price Index
const api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-09-20&end=2018-09-27';

/**
 * Loading data from API when DOM Content has been loaded
 */
document.addEventListener("DOMContentLoaded", (event) => {
  fetch(api)
    .then((response) => { return response.json(); })
    .then((data) => {
      const parsedData = parseData(data);
      drawChart(parsedData);
    })
    .catch((err) => {
      console.log(err);
    })
});

/**
 * PARSE DATA into key-value pairs
 * @param {object} data Object containing historical data of BPI
 */
const parseData = (data) => {
  let arr = [];
  for (let i in data.bpi) {
    arr.push({
      date: new Date(i), //date
      value: +data.bpi[i] //convert string to number
    });
  }
  return arr;
}

/**
 * Create a CHART using d3
 * @param {object} data Object containing historical data of BPI
 */
const drawChart = (data) => {
  // 1. Set the Variables
  const svgWidth = 600, svgHeight = 400;
  const margin = { top: 20, right: 20, bottom: 30, left: 50 };
  const width = svgWidth - margin.left - margin.right;
  const height = svgHeight - margin.top - margin.bottom;
  // 2. Assign the variables to the svg elements
  const svg = d3
    .select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  const g = svg
    .append('g')
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

  const x = d3.scaleTime()
    .rangeRound([0, width]);

  const y = d3.scaleLinear()
    .rangeRound([height, 0]);

  const line = d3.line()
    .x((d) => { return x(d.date) })
    .y((d) => { return y(d.value) });
  x.domain(d3.extent(data, (d) => { return d.date }));
  y.domain(d3.extent(data, (d) => { return d.value }));

  g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .select(".domain")
    .remove();

  g.append("g")
    .call(d3.axisLeft(y))
    .append("text")
    .attr("fill", "#000")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "0.71em")
    .attr("text-anchor", "end")
    .text("Price ($)");

  g.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 1.5)
    .attr("d", line);
}