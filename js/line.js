// Line: Average spot price by Year
d3.csv("data/Ex5_ARE_Spot_Prices.csv", d => ({
  date: new Date(+d.Year, 0, 1),
  price: +d["Average Price (notTas-Snowy)"]
})).then(data => {
  const viewW = 600, viewH = 400;
  const margin = {top: 20, right: 20, bottom: 40, left: 60};
  const svg = d3.select("#linechart").append("svg")
    .attr("viewBox", `0 0 ${viewW} ${viewH}`).attr("width", 700).attr("height", 400);

  const x = d3.scaleTime().domain(d3.extent(data, d => d.date))
    .range([margin.left, viewW - margin.right]);
  const y = d3.scaleLinear().domain([0, d3.max(data, d => d.price)]).nice()
    .range([viewH - margin.bottom, margin.top]);

  svg.append("g").attr("transform", `translate(0,${viewH - margin.bottom})`).call(d3.axisBottom(x).ticks(10));
  svg.append("g").attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(y));

  svg.append("path").datum(data).attr("fill", "none").attr("stroke", "steelblue")
    .attr("stroke-width", 2).attr("d", d3.line().x(d => x(d.date)).y(d => y(d.price)));
});
