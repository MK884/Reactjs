import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(28);

  const elements = [];
  for (let index = 1; index <= count; index++) {
    elements.push(index);
  }

  useEffect(() => {
    const loadData = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 10
      ) {
        setCount((prev) => prev + 28);
      }
    };

    document.addEventListener("scroll", loadData);

    return () => document.addEventListener("scroll", loadData);
  }, [count]);

  return (
    <>
      <div
        style={{
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {elements.map((e, id) => (
          <div
            key={id}
            style={{
              backgroundColor: "#131313",
              height: "300px",
              width: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>{e}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
