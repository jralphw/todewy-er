import { createSignal, lazy } from "solid-js";
import Todo from "./pages/Todo";
import Profile from "./pages/Profile";
const Feed = lazy(() => import("./pages/Feed"));
import { navBarRoute } from "./components/types";

let [page, setPage] = createSignal<navBarRoute>("todo");

function NavBar() {
  function NavButton({ path }: { path: navBarRoute }) {
    return (
      <div
        class={
          path === page()
            ? "rounded-full bg-sky-900 h-8 w-8"
            : "rounded-full bg-inherit h-8 w-8"
        }
        onClick={() => {
          setPage(path);
        }}
      ></div>
    );
  }

  return (
    <div class="fixed bottom-2 bg-sky-100/55 rounded-full w-fit h-fit p-2 flex gap-1 left-1/2 transform -translate-x-1/2">
      <NavButton path="todo" />
      <NavButton path="feed" />
      <NavButton path="prof" />
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
      default:
        return <Todo />;
    }
  };
  return (
    <div class="h-screen">
      {shown()}
      <NavBar />
    </div>
  );
}

export default App;
