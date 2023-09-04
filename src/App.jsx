import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import Home from "./pages/Home";
import BuildingForSale from "./pages/BuildingsForSale";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BuildingForSale />
    </>
  );
}

export default App;
