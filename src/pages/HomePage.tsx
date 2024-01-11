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
          <svg
            className="w-32 cursor-pointer"
            viewBox="0 0 342 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="hidden lg:inline">
          <ul className="flex space-x-2">
            {products.map((p) => (
              <li
                key={p}
                className="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex space-x-4 mr-2">
            {navItems.map((m) => (
              <li
                key={m}
                className="cursor-pointer hover:rounded-full hover:bg-slate-300 py-1 px-3"
              >
                {m}
              </li>
            ))}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 animate-bounce"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
