import { todo } from "./types";

export default function Todew({ item }: { item: todo }) {
  return (
    <a href={"../detail"}>
      <div class="rounded-lg m-auto bg-sky-200 size-full">
        {item.category ? (
          <p class="text-sm text-left">{item.category}</p>
        ) : null}
        <p class="text-base text-center">{item.content}</p>
      </div>
    </a>
  );
}