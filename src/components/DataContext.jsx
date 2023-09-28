// DataContext.js
import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [dataFromAPI, setDataFromAPI] = useState(null);

  // Fetch data from the API and set it in dataFromAPI

  return (
    <DataContext.Provider value={{ dataFromAPI, setDataFromAPI }}>
      {children}
    </DataContext.Provider>
  );
};
