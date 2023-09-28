
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BuildingsExtraDetails from './BuildingsExtraDeatils';
import Floorplan from './FloorPlan';
import styled from 'styled-components';
const StyledInfromationSecondBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
//   // gap: 160px;
//   // border: 1px solid red;
// `
const StyledUnderSecondBox = styled.div``
const StyledInfromationThirdBox = styled.div``



// Define your styled components as before
function BuildingDetails(props) {
  const { buildingId } = useParams(); // Use the "buildingId" parameter from the URL
  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);
  const imageURL = props.imageURL;


  useEffect(() => {
    const fetchBuildingData = async () => {
      try {
        const response = await fetch(`https://dinmaegler.onrender.com/homes/${buildingId}`);
        if (!response.ok) {
          throw new Error('Building not found');
        }
        const data = await response.json();
        setHome(data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching building data:', error);
        setLoading(false); // Set loading to false on error as well
      }
    };

    fetchBuildingData();
  }, [buildingId]); // Make sure to use "buildingId" as the dependency

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!home) {
    return <div>Building not found</div>;
  }

  return (
    <div>
    {/* <img src='' />
    //       <p>Name: {homes.name}</p>
    //       <p>Address: {homes.address}</p> */}
           {/* Display other building details here */}
    <img src={home.images[0].url} alt="building" className='detailsImg'/>
    <div className='informationFirstBox'>
    <p className='detailsAddress'>{home.adress1}. {home.adress2}</p>
    <BuildingsExtraDetails buildingId={buildingId} />
    <Floorplan buildingId={buildingId} />
    <p className='detailsPrice'>kr. {home.price}</p>
              
    </div>
  <StyledInfromationSecondBox>
  <StyledUnderSecondBox>
    <p>Sagsnummer: {home.id}</p>
    <p>Boligareal: {home.livingspace} m^2</p>
    <p>Grundareal: </p>
    <p>Rum/Værelser: {home.rooms}</p>
    <p>Antal plan: </p>
  </StyledUnderSecondBox>
    <StyledUnderSecondBox>
    <p>kælder: {home.basementsize}</p>
    <p>Byggeår: {home.built}</p>
    <p>Ombygget: {home.remodel}</p>
    <p>Energimærke: {home.energylabel}</p>
    </StyledUnderSecondBox>
    <StyledUnderSecondBox>
    <p>Udbetaing: kr.</p>
  <p>Brutto ex ejerudgift: kr.</p>
  <p>Netto ex ejerudgift: kr.{home.netto}</p>
  <p>Ejerudgifter : kr.{home.payment}</p>
  </StyledUnderSecondBox>
  </StyledInfromationSecondBox>
    
  <StyledInfromationThirdBox>
  <h2>Beskrivelse</h2>
  <p>{home.description}</p>
  </StyledInfromationThirdBox>
    </div>
  );
}

export default BuildingDetails;



