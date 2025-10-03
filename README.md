# T05
📊 COS30045 – Exercise 5: Multi-Chart Webpage
Overview

This project demonstrates how to use D3.js to build multiple responsive chart types from CSV data.
The charts are combined into a single webpage with a clean, responsive layout.

Charts Implemented

Scatter Plot – TV Energy Consumption vs Star Rating
Data: Ex5_TV_energy.csv (columns: star2, energy_consumpt)

Donut Chart – Energy Consumption by Screen Technology (All TVs)
Data: Ex5_TV_energy_Allsizes_byScreenType.csv (columns: Screen_Tech, Mean(Labelled energy consumption (kWh/year)))

Bar Chart – Energy Consumption by Screen Technology (55-inch TVs only)
Data: Ex5_TV_energy_55inchtv_byScreenType.csv

Line Chart – Spot Power Prices (1998–2024)
Data: Ex5_ARE_Spot_Prices.csv (columns: Year, Average Price (notTas-Snowy))

Each chart is contained in its own JavaScript file and embedded in the webpage via index.html.

Project Structure
T05/
  index.html
  README.md
  /css/
    styles.css
  /data/
    Ex5_TV_energy.csv
    Ex5_TV_energy_Allsizes_byScreenType.csv
    Ex5_TV_energy_55inchtv_byScreenType.csv
    Ex5_ARE_Spot_Prices.csv
  /js/
    scatter.js
    donut.js
    bars55.js
    line.js

Features

Responsive grid layout (auto-adjusts 2×2 on desktop, stacked on mobile).

Interactive hover effects for bars, scatter points, and donut slices.

Scalable SVGs using viewBox and D3 scales (scaleLinear, scaleBand, scaleTime, scaleOrdinal).

Clean and readable styling via styles.css.

How to Run

Clone or download this repository.

Open the project folder in VS Code (or another editor).

Run with Live Server (CSV loading won’t work from file://).

Open index.html in the browser.

About the Data

Source: Provided TV energy datasets and ARE spot prices CSVs.

Processing: Minimal preprocessing; direct CSV loading in D3 with type conversion (+d.value).

Privacy: The datasets are academic and contain no personal information.

Accuracy & Limitations:

Energy data represents averages per screen technology and may not cover all brands.

Spot prices dataset uses averages, omitting outliers.

Ethics: Charts are used purely for academic demonstration and learning.

AI Declaration

Parts of this exercise were developed with the assistance of GenAI (Copilot), especially for:

Debugging mismatched CSV column names

Writing D3.js boilerplate code for each chart type

Creating the responsive CSS grid layout

All code was reviewed, tested, and modified by me to ensure correct operation.
