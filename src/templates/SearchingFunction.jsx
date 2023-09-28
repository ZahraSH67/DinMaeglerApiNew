// import React, { useState } from 'react';
// import SearchBox from '../components/SearchBox';

// function SearchingFunction() {
//   const initialBuildings = [
//     {
//       id: 1,
//       price: 100000,
//       city: 'New York',
//       area: 'Manhattan',
//     },
//     {
//       id: 2,
//       price: 80000,
//       city: 'Los Angeles',
//       area: 'Downtown',
//     },
//     // Add more building objects as needed
//   ];

//   const [buildings, setBuildings] = useState(initialBuildings);

//   const handleSearch = (searchParams) => {
//     const filteredBuildings = initialBuildings.filter((building) => {
//       return (
//         (searchParams.price === '' || building.price <= parseFloat(searchParams.price)) &&
//         (searchParams.city === '' || building.city.toLowerCase().includes(searchParams.city.toLowerCase())) &&
//         (searchParams.area === '' || building.area.toLowerCase().includes(searchParams.area.toLowerCase()))
//       );
//     });

//     setBuildings(filteredBuildings);
//   };

//   return (
//     <div>
//       <h1>Building Search App</h1>
//       <SearchBox onSearch={handleSearch} />
//       <ul>
//         {buildings.map((building) => (
//           <li key={building.id}>
//             {building.city}, {building.area} - Price: ${building.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SearchingFunction;





// 






// SearchingFunction.jsx
// import React, { useState } from 'react';
// import SearchBox from '../components/SearchBox';

// function SearchingFunction() {
//   const initialBuildings = [
//     {
//       id: 1,
//       price: 100000,
//       city: 'New York',
//       area: 'Manhattan',
//     },
//     {
//       id: 2,
//       price: 80000,
//       city: 'Los Angeles',
//       area: 'Downtown',
//     },
//     // Add more building objects as needed
//   ];

//   const [buildings, setBuildings] = useState(initialBuildings);

//   const handleSearch = (searchParams) => {
//     const filteredBuildings = initialBuildings.filter((building) => {
//       return (
//         (searchParams.price === '' || building.price <= parseFloat(searchParams.price)) &&
//         (searchParams.city === '' || building.city.toLowerCase().includes(searchParams.city.toLowerCase())) &&
//         (searchParams.area === '' || building.area.toLowerCase().includes(searchParams.area.toLowerCase()))
//       );
//     });

//     setBuildings(filteredBuildings); // Update the state with filtered buildings
//   };

//   return (
//     <div>
//       <h1>Building Search App</h1>
//       <SearchBox onSearch={handleSearch} /> {/* Pass onSearch here */}
//       <ul>
//         {buildings.map((building) => (
//           <li key={building.id}>
//             Price: {building.price}, City: {building.city}, Area: {building.area}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SearchingFunction;




// import React, { useState } from 'react';
// import SearchBox from '../components/SearchBox';
// import SearchResultsPage from './SearchResultsPage';

// function SearchingFunction() {
//   // ... (your existing code for initializing buildings and handleSearch)

//   const [searchResults, setSearchResults] = useState([]); // State to hold search results

//   return (
//     <div>
//       <h1>Building Search App</h1>
//       <SearchBox onSearch={handleSearch} />

//       {/* Render the search results using the SearchResultsPage component */}
//       {searchResults.length > 0 ? (
//         <SearchResultsPage results={searchResults} />
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
//   );
// }

// export default SearchingFunction;



// import React, { useState } from 'react';
// import SearchBox from '../components/SearchBox';
// import SearchResultsPage from '../pages/SearchResultsPage';

// function SearchingFunction() {
//   // Replace this with your actual building data
//   const initialBuildings = [
//     {
//       id: 1,
//       price:  4567890,
//       city: 'Roskilde',
//       type: 'villa',
//     },
//     {
//       id: 2,
//       price:  2456320,
//       city: 'Roskilde',
//       type: 'villa',
//     },
//     // Add more building objects as needed
//   ];

//   const [buildings, setBuildings] = useState(initialBuildings);
//   const [searchResults, setSearchResults] = useState([]);

//   // Define the onSearch function to handle the search
//   const handleSearch = (searchParams) => {
//     // Implement your search logic here based on searchParams
//     // Update the buildings state with filtered results
//     const filteredBuildings = buildings.filter((building) => {
//       // Apply your filtering criteria here, e.g., building.price, building.city, building.area
//       // Return true if the building matches the search criteria
//       return (
//         (searchParams.city === '' || building.city.toLowerCase().includes(searchParams.city.toLowerCase())) &&
//         (searchParams.price === '' || building.price <= parseFloat(searchParams.price)) &&
//         (searchParams.type === '' || building.type.toLowerCase().includes(searchParams.type.toLowerCase()))
//       );
//     });

//     // Update the state with filtered buildings
//     setSearchResults(filteredBuildings);
//   };

//   return (
//     <div>
//       <h1>Building Search App</h1>
//       <SearchBox onSearch={handleSearch} />
//       {searchResults.length > 0 ? (
//         <SearchResultsPage results={searchResults} />
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
//   );
// }

// export default SearchingFunction;



// SearchingFunction.jsx
// ... (previous code)






// SearchingFunction.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SearchingFunction() {
  const history = useHistory();
  const [searchParams, setSearchParams] = useState({
    price: '',
    city: '',
    type: '',
  });

  const handleSearch = () => {
    // Implement your search logic here based on searchParams
    // Update the URL to navigate to the search results page with the searchParams as query parameters
    history.push(`/search-results?price=${searchParams.price}&city=${searchParams.city}&type=${searchParams.type}`);
  };

  return (
    <div>
      {/* Create input fields for search parameters */}
      <input
        type="text"
        placeholder="Price"
        value={searchParams.price}
        onChange={(e) => setSearchParams({ ...searchParams, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={searchParams.city}
        onChange={(e) => setSearchParams({ ...searchParams, city: e.target.value })}
      />
      <input
        type="text"
        placeholder="Type"
        value={searchParams.type}
        onChange={(e) => setSearchParams({ ...searchParams, type: e.target.value })}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchingFunction;
