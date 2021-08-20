// This import results in Plotly being undefined in Node/Jest.
// import Plotly from "plotly.js-dist-min";

// This import works in Node/Jest.
import * as Plotly from "plotly.js-dist-min";

test("import plotly", () => {
    console.log(Plotly);
});
