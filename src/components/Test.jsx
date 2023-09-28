import React, { useState, useEffect } from 'react';
import BuildingDetails from './BuildingDetails';
function Test() {
  // Example: Get the buildingId from state
  const [buildingId, setBuildingId] = useState(
    "61572ad4251a8a42ec8cb544"); // Replace with your actual buildingId
    console.log("buildingId in ParentComponent:", buildingId);

  // Other code and logic

  return (
    <div>
      {/* Pass the buildingId as a prop to BuildingDetails */}
      <BuildingDetails buildingId={buildingId} />
    </div>
  );
}

export default Test;
