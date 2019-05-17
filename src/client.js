// Using `import` with a name and `from`
// will simply execute the file without creating a variable.
// import "./a";
// console.log("Hello, Universe!");
import React from "react";
import ReactDOM from "react-dom";

import GoTCastUrl from "./images/got_cast.jpg";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.createElement("div");
  document.body.append(root);

  ReactDOM.render(
    <img
      style={{
        borderRadius: "20px",
        filter: "blur(5px)"
      }}
      width="200px"
      src={GoTCastUrl}
    />,
    root
  );
});
