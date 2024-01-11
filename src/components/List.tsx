interface Props {
  items: string[];
  additionalStyles?: string;
}

function List({ items, additionalStyles = "" }: Props) {
  return (
    <ul className="flex space-x-2">
      {items.map((i) => (
        <li
          key={i}
          className={`py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer ${additionalStyles}`}
        >
          {i}
        </li>
      ))}
    </ul>
  );
}

export default List;
