import React, { useEffect, useState } from "react";

export const currencyInfo = (country) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${country}.json`)
    .then((res)=> res.json())
    .then((data) => setData(data[country]))
  }, [country]);
  console.log(data);
  return data
};
