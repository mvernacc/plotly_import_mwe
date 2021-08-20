// This import works when Snowpack builds to run in Chrome.
import Plotly from "plotly.js-dist-min";

// This import in Chrome results in Plotly being a Module object,
// with the Plotly functions I'd expect on Plotly.default. 
// import * as Plotly from "plotly.js-dist-min";

console.log(Plotly);
