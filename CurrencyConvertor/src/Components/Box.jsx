import React, { useId } from "react";

export const Box = (props) => {
  const amntId = useId();

  let label = props.label,
    amount = props.amount,
    currencyOptions = props.currencyOptions || [],
    selectedCountry = props.selectedCountry,
    onAmountChange = props.onAmountChange,
    onCurrencyChange = props.onCurrencyChange;
  return (
    <div className="flex bg-white rounded text-sm p-4">
      <div className="w-1/2 ">
        <label htmlFor={amntId} className="text-black mb-2 inline-block">
          {label}
        </label>
        <input
          type="number"
          id={amntId}
          value={amount}
          className="outline-none w-full bg-transparent"
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCountry}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
