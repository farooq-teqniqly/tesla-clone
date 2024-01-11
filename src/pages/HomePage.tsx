import Logo from "../components/Logo";
import Chevron from "../components/Chevron";
import List from "../components/List";

const products = ["Model S", "Model 3", "Model X", "Model Y", "Cybertruck"];
const navItems = ["Shop", "Account", "Menu"];

const buttonDefs = [
  {
    text: "Custom Order",
    textColor: "text-black",
    bgColor: "bg-white",
    hover: "hover:bg-slate-100",
    additionalStyles: "",
  },
  {
    text: "Browse Inventory",
    textColor: "text-white",
    bgColor: "bg-black",
    hover: "hover:bg-slate-800",
    additionalStyles: "mt-4 md:mt:0",
  },
];

function HomePage() {
  return (
    <div className="relative h-screen bg-center bg-cover bg-[url('https://digitalassets-secure.tesla.com/image/upload/f_auto,q_auto/xufyfcvqhmq36szytod7.jpg')]">
      <div className="pt-5 flex justify-between items-center font-semibold text-sm">
        <div className="ml-5">
          <Logo></Logo>
        </div>
        <div className="hidden lg:inline">
          <List items={products}></List>
        </div>
        <div>
          <ul className="flex space-x-4 mr-2">
            <List items={navItems}></List>
          </ul>
        </div>
        <div className="flex flex-col absolute top-20 left-[50%] translate-x-[-50%] translate-y-[50%]">
          <h1 className="text-5xl m-auto">Model 3</h1>
          <p className="whitespace-nowrap pt-5 text-xl text-slate-500">
            Order Online for{" "}
            <span className="underline underline-offset-4 hover:decoration-2 cursor-pointer">
              Touchless Delivery
            </span>
          </p>
        </div>
        <div className="absolute bottom-[80px] left-[50%] translate-x-[-50%] flex-col md:flex-row md:space-x-4">
          {buttonDefs.map((b) => (
            <button
              key={b.text}
              className={`uppercase ${b.bgColor} ${b.textColor} w-96 h-10 md:w-60 rounded-full ${b.hover} md:w-60 ${b.additionalStyles}`}
            >
              {b.text}
            </button>
          ))}
        </div>
        <div className="absolute left-[50%] translate-x-[-50%] bottom-3">
          <Chevron></Chevron>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
