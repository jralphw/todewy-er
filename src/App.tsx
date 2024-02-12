import type { Component } from "solid-js";
import { Router, Route } from "@solidjs/router";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";

function NavButton() {}
function NavBar() {
  return (
    <div class="fixed bottom-3 bg-sky-100/55 rounded-full w-fit h-fit p-3"></div>
  );
}

function AppPage(props) {
  return (
    <>
      {props.children}
      <NavBar />
    </>
  );
}

const App: Component = () => {
  return (
    <Router root={AppPage}>
      <Route path="/home" component={Home}></Route>
      <Route path="/feed" component={Feed}></Route>
      <Route path="/prof" component={Profile}></Route>
      <Route path="/" component={Home}></Route>
    </Router>
  );
};

export default App;
