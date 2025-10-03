// Scatter: star2 vs energy_consumpt
d3.csv("data/Ex5_TV_energy.csv", d => ({
  star: +d.star2,
  energy: +d.energy_consumpt
})).then(data => {
  const viewW = 500, viewH = 400;
  const margin = {top: 20, right: 20, bottom: 40, left: 50};
  const svg = d3.select("#scatter").append("svg")
    .attr("viewBox", `0 0 ${viewW} ${viewH}`).attr("width", 600).attr("height", 400);

  const x = d3.scaleLinear().domain(d3.extent(data, d => d.star)).nice()
    .range([margin.left, viewW - margin.right]);
  const y = d3.scaleLinear().domain(d3.extent(data, d => d.energy)).nice()
    .range([viewH - margin.bottom, margin.top]);

  svg.append("g").attr("transform", `translate(0,${viewH - margin.bottom})`).call(d3.axisBottom(x).ticks(6));
  svg.append("g").attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(y));

  svg.selectAll("circle").data(data).join("circle")
    .attr("cx", d => x(d.star)).attr("cy", d => y(d.energy)).attr("r", 3.5).attr("fill", "steelblue");
});
