import { useEffect, useState } from "react";
import "./App.css";
import { Box } from "./Components/Box";
import { currencyInfo } from "./hooks/currencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const result = currencyInfo(from);

  const options = Object.keys(result);

  const convert = () => {
    setConvertedAmount(amount * result[to]);
  };

  useEffect(() => {
    convert();
  }, [from, to]);

  
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-black">
      <div className="w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1">
            <Box
              label="From"
              amount={amount}
              currencyOptions={options}
              selectedCountry={from}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              swap
            </button>
            <div className="w-full mb-1">
              <Box
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                selectedCountry={to}
                onCurrencyChange={(currency) => setTo(currency)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
