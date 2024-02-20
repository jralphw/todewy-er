import { todo } from "../components/types";

function todew({ item }: { item: todo }) {
  return (
    <a href={"./"}>
      <div class="rounded-lg m-auto">
        {item.category ? (
          <p class="text-sm text-left">{item.category}</p>
        ) : null}
        <p class="text-base text-center">{item.content}</p>
      </div>
    </a>
  );
}
export default function Todo() {
  return <p>Todo</p>;
}
