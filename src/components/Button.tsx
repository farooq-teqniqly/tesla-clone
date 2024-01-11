interface Props {
  text: string;
  textColor: string;
  bgColor: string;
  additionalStyles?: string;
}

function Button({ text, textColor, bgColor, additionalStyles = "" }: Props) {
  return (
    <button
      key={text}
      className={`uppercase w-96 h-10 md:w-60 rounded-full md:w-60 ${bgColor} ${textColor} ${additionalStyles}`}
    >
      {text}
    </button>
  );
}

export default Button;
