import React from "react";
import Nav from "./Nav";

export default function NotFound() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="App">
        <h1>404</h1>
        <h1>Page Not Found</h1>
      </div>
    </div>
  );
}
