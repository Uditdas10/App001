// const heading = React.createElement("h1", {},"Hello world React...");
const parent = React.createElement("div", {"id":"parent"},
    [React.createElement("div", {"id":"child"},
        [React.createElement("h1", {"id":"heading"}, "This is nested H1 01 from nested component..."),
         React.createElement("h2", {"id":"chota_heading"}, "This is nested H2 01 from nested component...")]
    ),
    React.createElement("div", {"id":"child"},
    [React.createElement("h1", {"id":"heading"}, "This is nested H1 02 from nested component..."),
     React.createElement("h2", {"id":"chota_heading"}, "This is nested H2 02 from nested component...")]
    )]

);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);