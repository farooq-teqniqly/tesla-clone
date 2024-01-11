interface Props {
  text: string;
  additionalButtonStyle?: string;
}

function Button({ text, additionalButtonStyle = "" }: Props) {
  return (
    <button className={`uppercase w-96 h-10 md:w-60 rounded-full md:w-60 ${additionalButtonStyle}`}>
      {text}
    </button>
  );
}

export default Button;
