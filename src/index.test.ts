// This import used to result in Plotly being undefined in Node/Jest.
// Now with `"esModuleInterop": true` in `tsconfig.json` it works in Jest.
import Plotly from "plotly.js-dist-min";

// This import works in Node/Jest.
// import * as Plotly from "plotly.js-dist-min";

test("import plotly", () => {
    console.log(Plotly);
});
