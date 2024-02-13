import { createSignal, type Component, lazy } from "solid-js";
import { Route, A } from "@solidjs/router";
import Todo from "./pages/Todo";
import Profile from "./pages/Profile";
const Feed = lazy(() => import("./pages/Feed"));

type navBarRoute = "todo" | "feed" | "prof";
let [page, setPage] = createSignal<navBarRoute>("todo");

function NavButton({ route }: { route: navBarRoute }) {
  return (
    <div
      class={
        route === page()
          ? "rounded-full bg-sky-900 h-8 w-8"
          : "rounded-full bg-inherit h-8 w-8"
      }
      onClick={() => {
        setPage(route);
      }}
    ></div>
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

function App() {
  let shown = () => {
    switch (page()) {
      case "todo":
        return <Todo />;
      case "feed":
        return <Feed />;
      case "prof":
        return <Profile />;
    }
  };
  return (
    <>
      {shown}
      <NavBar />
    </>
  );
}

export default App;
