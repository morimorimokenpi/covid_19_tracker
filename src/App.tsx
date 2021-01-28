import React, { useEffect, useState, useCallback } from "react";
import styles from "./App.module.scss";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import { Data } from "./api/types";
import image from "./images/image.png";

export const App: React.FC = () => {
  const [data, setData] = useState<Data>({} as Data);
  useEffect(() => {
    let unmounted = false;

    (async () => {
      if (!unmounted) {
        const fetchedData = (await fetchData()) as Data;
        setData(fetchedData);
      }
    })();

    return () => {
      unmounted = true;
    };
  }, []);

  const onHandleCountryChange = useCallback(async (selectedCountry: string) => {
    const response = await fetchData(selectedCountry);
    setData({ ...response, country: selectedCountry });
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19 Tracker" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={onHandleCountryChange} />
      <Chart data={data} />
    </div>
  );
};

export default App;
