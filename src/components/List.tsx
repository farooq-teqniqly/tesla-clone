interface Props {
  items: string[];
  additionalListStyles?: string;
  additionalListItemStyles?: string;
}

function List({ items, additionalListStyles = "", additionalListItemStyles = "" }: Props) {
  return (
    <ul className={`${additionalListStyles}`}>
      {items.map((i) => (
        <li
          key={i}
          className={`py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer ${additionalListItemStyles}`}
        >
          {i}
        </li>
      ))}
    </ul>
  );
}

export default List;
