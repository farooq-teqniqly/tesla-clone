import { ComponentPropsWithoutRef } from "react";

type Props = {
  items: string[];
} & ComponentPropsWithoutRef<"ul">;

function List({ items, ...listProps }: Props) {
  return (
    <ul {...listProps}>
      {items.map((i) => (
        <li key={i} className={`py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer`}>
          {i}
        </li>
      ))}
    </ul>
  );
}

export default List;
