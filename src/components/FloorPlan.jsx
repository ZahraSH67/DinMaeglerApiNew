// // Create a new component named Floorplan.jsx

// import React, { useState, useEffect } from 'react';
// import {LuFiles} from "react-icons/lu";
// import styled from 'styled-components';


// const StyledDiv = styled.div`
//   display: flex;
//   gap: 20px;
// `;

// const StyledButton = styled.button`
//   border: none;
//   background-color: white;
//   cursor: pointer;
// `;

// const PopupContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const PopupContent = styled.div`
//   background: white;
//   padding: 20px;
//   border-radius: 4px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   position: relative;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: none;
//   border: none;
//   cursor: pointer;
// `;


// const Floorplan = ({ buildingId,  isPopupOpen  }) => {
    
//   const [floorplanImageUrl, setFloorplanImage] = useState('');


//   useEffect(() => {
//     const fetchFloorplan = async () => {
//       try {
//         const response = await fetch(`https://dinmaegler.onrender.com/homes/${buildingId}/floorplan`);
//         if (!isPopupOpen) {
//           throw new Error('Floorplan not found');
//         }
//         const data = await response.json();
//         setFloorplanImage(data.floorplanImageUrl);
//       } catch (error) {
//         console.error('Error fetching floorplan:', error);
//       }
//     };

//     fetchFloorplan();
//   }, [buildingId,  isPopupOpen ]);

//   const openPopup = () => {
//     setIsPopupOpen(true);
//   };

//   const closePopup = () => {
//     setIsPopupOpen(false);
//   };
//   const toggleModal = () => {
//     setIsModalVisible(!isModalVisible);
//   };

//   return (
//     <StyledDiv>
//       <StyledButton onClick={toggleModal}>
//         <LuFiles />
//         {/* <LuFiles />
//         <CiLocationOn />
//         <AiOutlineHeart /> */}
//       </StyledButton>

//       {isPopupOpen && (
//         <PopupContainer>
//           <PopupContent>
//             <CloseButton onClick={closePopup}>Close</CloseButton>
//             <img src={floorplanImage} alt="Floorplan" />
//           </PopupContent>
//         </PopupContainer>
//       )}
//       {isModalVisible && (
//         <div className="modal">
//             <img src={floorplanImage} alt="Floorplan"/>
//             <button onClick={toggleModal}>Close</button>
//         </div>
// )}
//     {/* {isModalVisible && (
//   <Floorplan buildingId={buildingId} isPopupOpen={isPopupOpen} />
//     )} */}
//     </StyledDiv>
//     // <div>
//     //   <img src={floorplanImage} alt="Floorplan" />
//     // </div>
//   );

// return (
//     <div>
//      <img src={floorplanImageUrl} alt="Floorplan" />

//     </div>
//   );
// };


// export default Floorplan;






// FloorplanComponent.js
import React from 'react';

const Floorplan = ({ floorplanURL, onClose }) => {
  return (
    <div className="popup">
      <button onClick={onClose}>Close</button>
      <img src={floorplanURL} alt="Floorplan" />
    </div>
  );
};

export default Floorplan;
