// Bars: energy by Screen_Tech (55-inch)
d3.csv("data/Ex5_TV_energy_55inchtv_byScreenType.csv", d => ({
  screen: d.Screen_Tech,
  energy: +d["Mean(Labelled energy consumption (kWh/year))"]
})).then(data => {
  const viewW = 500, viewH = 400;
  const margin = {top: 20, right: 20, bottom: 40, left: 110};
  const svg = d3.select("#bars55").append("svg")
    .attr("viewBox", `0 0 ${viewW} ${viewH}`).attr("width", 600).attr("height", 400);

  const x = d3.scaleLinear().domain([0, d3.max(data, d => d.energy)]).nice()
    .range([margin.left, viewW - margin.right]);
  const y = d3.scaleBand().domain(data.map(d => d.screen))
    .range([margin.top, viewH - margin.bottom]).padding(0.2);

  svg.append("g").attr("transform", `translate(0,${viewH - margin.bottom})`).call(d3.axisBottom(x));
  svg.append("g").attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(y));

  svg.selectAll("rect").data(data).join("rect")
    .attr("x", margin.left).attr("y", d => y(d.screen))
    .attr("width", d => x(d.energy) - margin.left).attr("height", y.bandwidth())
    .attr("fill", "steelblue");

  svg.selectAll("text.value").data(data).join("text")
    .attr("class", "value").attr("x", d => x(d.energy) + 4)
    .attr("y", d => y(d.screen) + y.bandwidth()/2 + 4)
    .style("font-size", "12px").text(d => d.energy.toFixed(1));
});
