// import { useState } from "react";
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import "./App.css";
// // import Home from "./pages/Home";
// import BuildingForSale from "./pages/BuildingsForSale";


// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <BuildingForSale />
//     </>
//   );
// }

// export default App;



import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";



function App() {
const [context, setContext] = useState({})

  return (
    <div className="App">
        <Outlet context={[context, setContext]}/>
    </div>
  );
}

export default App;
