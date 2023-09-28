import React from 'react';

function SearchResults({ results }) {
  return (
    <div>
      <h1>Search Results</h1>
      <div className="results-list">
        {results.map((building) => (
          <div key={building.id} className="building-card">
            <h2>{building.city}</h2>
            <p>Price: ${building.price}</p>
            <p>Area: {building.area}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
