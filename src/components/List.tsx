interface Props {
  items: string[];
  additionaListStyle?: string;
}

function List({ items, additionaListStyle }: Props) {
  return (
    <ul className={additionaListStyle}>
      {items.map((i) => (
        <li key={i} className={`py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer`}>
          {i}
        </li>
      ))}
    </ul>
  );
}

export default List;
