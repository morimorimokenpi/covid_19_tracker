import React, { useEffect, useState } from "react";
import "./App.scss";
import { Cards } from "./components/Cards/Cards";
import { Chart } from "./components/Chart/Chart";
import { CountryPicker } from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api";
import { data } from "./api/types";

export const App = () => {
  const [data, setData] = useState<data>({} as data);
  useEffect(() => {
    let unmounted = false;

    (async () => {
      if (!unmounted) {
        const fetchData = (await fetchData()) as data;
        setData(fetchData);
      }
    })();

    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <div className="container">
      <Cards data={data} />
      <Chart />
      <CountryPicker />
    </div>
  );
};

export default App;
