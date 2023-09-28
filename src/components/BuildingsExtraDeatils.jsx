

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ImFilePicture } from 'react-icons/im';
// import DisplayImage from './DisplayImage';
import Floorplan from './FloorPlan';
// import MapsLocation from './MapsLocation';
// import AddToFavorite from './AddToFavorite';
// import {LuFiles} from "react-icons/lu";
// import {CiLocationOn} from "react-icons/ci";
// import {AiOutlineHeart} from "react-icons/ai";

const StyledDiv = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const BuildingsExtraDetails = ({ buildingId, buildingData }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
//     const [floorplanUrl, setFloorplanUrl] = useState('');
//   const [locationURL, setlocationURL] = useState('')

  useEffect(() => {
    // Fetch the image URL from your API here based on the buildingId
    const fetchImage = async () => {
      try {
        const response = await fetch(`https://dinmaegler.onrender.com/homes/${buildingId}`);
        if (!response.ok) {
          throw new Error('Image not found');
        }
        const data = await response.json();
        setImageURL(data.images[0].url);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    }
    //   fetchImage()
    // }
  

    // Call the fetchImage function to retrieve the image URL
    fetchImage();
  }, [buildingId]);


  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  

  return (
    <StyledDiv>
      <StyledButton onClick={toggleModal}>
        <ImFilePicture />
        {/* <LuFiles />
        <CiLocationOn />
        <AiOutlineHeart /> */}
      </StyledButton>

      {/* {isPopupOpen && (
        <PopupContainer>
          <PopupContent>
            <CloseButton onClick={closePopup}>Close</CloseButton>
            <img src={imageURL} alt="Building" />
          </PopupContent>
        </PopupContainer>
      )} */}

    {isPopupOpen && (
    <PopupContainer>
        <PopupContent>
        <CloseButton onClick={closePopup}>Close</CloseButton>
        <img src={imageURL} alt="Building" />
        </PopupContent>
    </PopupContainer>
    )}
      {isModalVisible && (
        <div className="modal">
            <img src={imageURL} alt="Building" />
            <button onClick={toggleModal}>Close</button>
        </div>
)}
 {isModalVisible && <Floorplan buildingId={buildingId} isPopupOpen={isPopupOpen} />}
    </StyledDiv>
  );
};

export default BuildingsExtraDetails;



















// import React, { useState } from 'react';
// import ImagesComponent from './ImagesComponent';
// import FloorplanComponent from './FloorplanComponent';
// import MapsLocationComponent from './MapsLocationComponent';
// import AddToFavoritesComponent from './AddToFavoritesComponent';

// const BuildingsExtraDetails = ({ buildingId, buildingData }) => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [currentPopup, setCurrentPopup] = useState(null);
//   const [imageURL, setImageURL] = useState(''); // Initialize imageURL state
//   const [floorplanURL, setFloorplanURL] = useState(''); // Initialize floorplanURL state
//   const [locationURL, setlocationURL] = useState('')

//   useEffect(() => {
   
//     if (buildingData) {
//       // Assuming you have URLs for floorplan and location images in buildingData
//       const { images, floorplan, location } = buildingData;

//     //   if (images && images.length > 0) {
//     //     // Assuming the first image is the one you want to display
//     //     const firstImageURL = data.images[0].url;
//     //     setImageURL(firstImageURL);
//     //   }
//     const fetchImage = async () => {
//               try {
//                 const response = await fetch(`https://dinmaegler.onrender.com/homes/${buildingId}`);
//                 if (!response.ok) {
//                   throw new Error('Image not found');
//                 }
//                 const data = await response.json();
//                 setImageURL(data.images[0].url);
//               } catch (error) {
//                 console.error('Error fetching image:', error);
//               }
//             };
        
//             fetchImage();
//           }


          
//     if (floorplan) {
//         // Fetch the floorplan image URL
//         const fetchFloorplanImage = async () => {
//           try {
//             const floorplanResponse = await fetch(floorplan.url);
//             if (!floorplanResponse.ok) {
//               throw new Error('Floorplan image not found');
//             }
//             const floorplanData = await floorplanResponse.blob();
//             const floorplanObjectURL = URL.createObjectURL(floorplanData);
//             setFloorplanURL(floorplanObjectURL);
//           } catch (error) {
//             console.error('Error fetching floorplan image:', error);
//           }
//         };
  
//         // Call the fetchFloorplanImage function to retrieve the floorplan image URL
//         fetchFloorplanImage();
//       }

// //       if (floorplan) {
// //         const floorplanImageURL = floorplan.url;
// //         setFloorplanURL(floorplanImageURL);
// //       }

// //       if (location) {
// //         const locationImageURL = location.url;
// //         setLocationURL(locationImageURL);
// //       }
// //     }
// //   }, [buildingData]);
// if (location) {
//     // Fetch the location image URL
//     const fetchLocationImage = async () => {
//       try {
//         const locationResponse = await fetch(location.url);
//         if (!locationResponse.ok) {
//           throw new Error('Location image not found');
//         }
//         const locationData = await locationResponse.blob();
//         const locationObjectURL = URL.createObjectURL(locationData);
//         setLocationURL(locationObjectURL);
//       } catch (error) {
//         console.error('Error fetching location image:', error);
//       }
//     };

//     // Call the fetchLocationImage function to retrieve the location image URL
//     fetchLocationImage();
//   }
// }
// , [buildingData]);

//   const openPopup = (popupComponent) => {
//     setCurrentPopup(popupComponent);
//     setIsPopupOpen(true);
//   };

//   const closePopup = () => {
//     setCurrentPopup(null);
//     setIsPopupOpen(false);
//   };

//   const addToFavorites = () => {
//     const [favoriteBuildings, setFavoriteBuildings] = useState([]);

//     // Check if the building is already in the favorites list
//     const isBuildingInFavorites = favoriteBuildings.some((favorite) => favorite.id === buildingId);
  
//     if (!isBuildingInFavorites) {
//       // If the building is not in favorites, add it
//       const updatedFavorites = [...favoriteBuildings, { id: buildingId, name: buildingData.adress1 }];
//       setFavoriteBuildings(updatedFavorites);
//     }
//   };

//   return (
//     <StyledDiv>
//       <StyledButton onClick={() => openPopup(<DisplayImage imageURL={imageURL} onClose={closePopup} />)}>
//         Display Images
//       </StyledButton>

//       <StyledButton onClick={() => openPopup(<Floorplan floorplanURL={floorplanURL} onClose={closePopup} />)}>
//         Display Floorplan
//       </StyledButton>

//       <StyledButton onClick={() => openPopup(<MapsLocation locationURL={locationURL} onClose={closePopup} />)}>
//         Display Maps and Location
//       </StyledButton>

//       <StyledButton onClick={() => openPopup(<AddToFavorite onAddToFavorites={addToFavorites} onClose={closePopup} />)}>
//         Add to Favorites
//       </StyledButton>

//       {isPopupOpen && (
//         <PopupContainer>
//           <PopupContent>
//             {currentPopup}
//             <CloseButton onClick={closePopup}>Close</CloseButton>
//           </PopupContent>
//         </PopupContainer>
//       )}
//     </StyledDiv>
//   );
// };

// export default BuildingsExtraDetails;


