import Todew from "../components/Todew";
import { md } from "../components/MOCK_DATA";
import { For } from "solid-js";

export default function Todo() {
  return (
    <>
      <p>Todo</p>
      <div class="grid grid-cols-2 gap-2 p-4 lg:grid-cols-3">
        <For each={md}>{(todew) => <Todew item={todew} />}</For>
      </div>
    </>
  );
}
