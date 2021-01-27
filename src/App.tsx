import React, { useEffect } from "react";
import "./App.scss";
import { Cards } from "./components/Cards/Cards";
import { Chart } from "./components/Chart/Chart";
import { CountryPicker } from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api";

export const App = () => {
  useEffect(() => {
    let unmounted = false;

    (async () => {
      if (!unmounted) {
        const data = fetchData();
      }
    })();

    return () => {
      unmounted = true;
    };
  });

  return (
    <div className="container">
      <Cards />
      <Chart />
      <CountryPicker />
    </div>
  );
};

export default App;
