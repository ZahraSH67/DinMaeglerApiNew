// import React, { useState, useEffect } from 'react';

// function BuildingList() {
//   const [buildings, setBuildings] = useState([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     async function fetchBuildings() {
//       try {
//         const response = await fetch(`https://dinmaegler.onrender.com/homes?page=${page}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setBuildings((prevBuildings) => [...prevBuildings, ...data]);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchBuildings();
//   }, [page]);

//   const handleSeeMore = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   return (
//     <div>
//       <h1>Building List</h1>
//       <ul>
//         {buildings.map((building) => (
//           <li key={building.id}>
//             <h2>{building.title}</h2>
//             <p>{building.description}</p>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleSeeMore}>See More Buildings</button>
//     </div>
//   );
// }

// export default BuildingList;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BuildingList = () => {
  const [buildings, setBuildings] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Define the API URL with the page parameter
    const apiUrl = `https://dinmaegler.onrender.com/homes?page=${page}`;

    // Fetch data from the API
    axios.get(apiUrl)
      .then((response) => {
        // Assuming the API response contains an array of buildings
        const newBuildings = response.data; // Adjust this based on your API response structure

        // Update the state with the fetched data
        setBuildings((prevBuildings) => [...prevBuildings, ...newBuildings]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [page]);

  const loadMoreBuildings = () => {
    // Increment the page number to fetch more data
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h1>Building List</h1>
      <ul>
        {buildings.map((building) => (
          <li key={building.id}>
            {building.name} - {building.address} {/* Adjust this based on your API response */}
          </li>
        ))}
      </ul>
      <button onClick={loadMoreBuildings}>Load More Buildings</button>
    </div>
  );
};

export default BuildingList;
