
// SearchResults.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchResultsPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [filteredBuildings, setFilteredBuildings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get search parameters from the URL
    const price = searchParams.get('price');
    const city = searchParams.get('city');
    const type = searchParams.get('type');

    // Implement your search logic here based on the parameters
    // Filter the data and set it to filteredBuildings

    // Example filtering:

    fetch('"https://dinmaegler.onrender.com/buildings')
      .then((response) => response.json())
      .then((data) => {
        // Filter the data based on search parameters
        const filteredData = data.filter((building) => {
   
      return (
        (!price || parseFloat(building.price) <= parseFloat(price)) &&
        (!city || building.city.toLowerCase().includes(city.toLowerCase())) &&
        (!type || building.type.toLowerCase().includes(type.toLowerCase()))
      );
    });

    setFilteredBuildings(filteredData);
    setLoading(false);
  })
  .catch((error) => {
    // console.error('Error fetching data:', error);
    // console.error('Error fetching data:', error);
    setLoading(false);
  });
}, [location.search]);


  return (
    <div>
      {filteredBuildings.length > 0 ? (
        // Render the filtered buildings here
        filteredBuildings.map((building) => (
          <div key={building.id}>
            <p>Price: {building.price}</p>
            <p>City: {building.city}</p>
            <p>Type: {building.type}</p>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default SearchResultsPage;
