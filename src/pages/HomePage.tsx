import Logo from "../components/Logo";
import Chevron from "../components/Chevron";
import List from "../components/List";
import Button from "../components/Button";

const products = ["Model S", "Model 3", "Model X", "Model Y", "Cybertruck"];
const navItems = ["Shop", "Account", "Menu"];

function HomePage() {
  return (
    <div className="relative h-screen bg-center bg-cover bg-[url('https://digitalassets-secure.tesla.com/image/upload/f_auto,q_auto/xufyfcvqhmq36szytod7.jpg')]">
      <div className="pt-5 flex justify-between items-center font-semibold text-sm">
        <div className="ml-5">
          <Logo></Logo>
        </div>
        <div className="hidden lg:inline">
          <List items={products} additionalListStyles="flex space-x-2"></List>
        </div>
        <div>
          <List items={navItems} additionalListStyles="flex space-x-4 mr-2"></List>
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
          <Button
            text="Custom Order"
            textColor="text-black"
            bgColor="bg-white"
            additionalStyles="hover:bg-slate-100"
          ></Button>
          <Button
            text="Browse Inventory"
            textColor="text-white"
            bgColor="bg-black"
            additionalStyles="hover:bg-slate-800 mt-4 md:mt:0"
          ></Button>
        </div>
        <div className="absolute left-[50%] translate-x-[-50%] bottom-3">
          <Chevron></Chevron>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
