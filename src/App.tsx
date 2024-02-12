import { createSignal, type Component, lazy } from "solid-js";
import { Router, Route, A } from "@solidjs/router";
import Todo from "./pages/Todo";
import Profile from "./pages/Profile";
const Feed = lazy(() => import("./pages/Feed"));

type navBarRoute = "todo" | "feed" | "prof";
let [page, setPage] = createSignal<navBarRoute>("todo");

function NavButton({ route }: { route: navBarRoute }) {
  return (
    <A
      class={
        route === page()
          ? "rounded-full bg-sky-900 h-8 w-8"
          : "rounded-full bg-inherit h-8 w-8"
      }
      href={"/" + route}
      onClick={() => {
        setPage(route);
      }}
    ></A>
  );
}
function NavBar() {
  return (
    <div class="fixed bottom-3 bg-sky-100/55 rounded-full w-fit h-fit p-2 flex gap-1 self-center">
      <NavButton route="todo" />
      <NavButton route="feed" />
      <NavButton route="prof" />
    </div>
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
      <Route path="/todo" component={Todo}></Route>
      <Route path="/feed" component={Feed}></Route>
      <Route path="/prof" component={Profile}></Route>
      <Route path="/" component={Todo}></Route>
    </Router>
  );
};

export default App;
