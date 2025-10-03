// Donut: energy by Screen_Tech (all TVs)
d3.csv("data/Ex5_TV_energy_Allsizes_byScreenType.csv", d => ({
  screen: d.Screen_Tech,
  energy: +d["Mean(Labelled energy consumption (kWh/year))"]
})).then(data => {
  const width = 500, height = 400, radius = Math.min(width, height)/2;
  const svg = d3.select("#donut").append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`).attr("width", 500).attr("height", 400)
    .append("g").attr("transform", `translate(${width/2},${height/2})`);

  const color = d3.scaleOrdinal(d3.schemeCategory10);
  const pie = d3.pie().value(d => d.energy);
  const arc = d3.arc().innerRadius(100).outerRadius(radius - 6);

  svg.selectAll("path").data(pie(data)).join("path")
    .attr("d", arc).attr("fill", d => color(d.data.screen))
    .attr("stroke", "white").style("stroke-width", "2px");

  svg.selectAll("text").data(pie(data)).join("text")
    .attr("transform", d => `translate(${arc.centroid(d)})`)
    .attr("dy", "0.35em").attr("text-anchor", "middle")
    .style("font-size", "12px").text(d => d.data.screen);
});

