/* @refresh reload */
import "./index.css";
import { render } from "solid-js/web";
import App from "./App";
import { Router, Route } from "@solidjs/router";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router>
      <Route path="/" component={App}></Route>
    </Router>
  ),
  root!
);
