import styled from "styled-components";
import {BsHouseDoorFill} from "react-icons/bs";
import {MdOtherHouses} from "react-icons/md";

const StyledSection = styled.section`
    // border: 1px solid red;

`

const StyledBigDiv = styled.div`
    display: flex;
    flex-direction: row;
    // border: 2px solid red;
    justify-content: center;
    align-items: center;
    width: 490px;
    height: 70px;
`

const StyledMiddleDiv = styled.div`
    display: flex;
    flex-direction: row;
    // border: 2px solid red;
    justify-content: space-between;
    align-items: center;
 
    width: 190px;
    height: 70px;
    padding: 0 40px;


`
const StyledLittleDiv = styled.div`
    display: flex;
    flex-direction: column;
    // border: 2px solid blue;
    width: 100px;
    height: 70px;
    // padding: -30px 0;
    box-sizing: border-box;
    line-height: 1%;


`

const StyledMdOtherHouses = styled(MdOtherHouses)`
    width: 42px;
    height: 42px;
`
const StyledBsHouseDoorFill = styled(BsHouseDoorFill)`
    width: 42px;
    height: 42px;
`

const IntroductionFirstPart = () => {
    return(
        <StyledSection className="introduction_first_part">
            <h3 className="intro_thirdtitle">Vi har fulgt danskerne hjem i snart 4 årtier</h3>
            <h6 className="intro_sixthtitle">Det synes vi siger noget om os!</h6>
            <p>It is a long established fact that a reader will be distracted by
                 the readable content of a page when looking at its layout. 
                 The point of using Lorem Ipsum is that it has normal distribution.
            </p>
            <p>It is a long established fact that a reader will be distracted 
                by the readable content of a page when looking at its layout.
            </p>

            <StyledBigDiv>

                <StyledMiddleDiv>
                    <StyledMdOtherHouses />
                    <StyledLittleDiv>
                        <p>4829</p>
                        <p>boliger solgt</p>
                    </StyledLittleDiv>
                </StyledMiddleDiv>


                <StyledMiddleDiv>
                    <StyledBsHouseDoorFill />
                    <StyledLittleDiv>
                        <p>158</p>
                        <p>boliger til salg</p>
                    </StyledLittleDiv>
                </StyledMiddleDiv>

            </StyledBigDiv>

        </StyledSection>
    )
   
}

export default IntroductionFirstPart;








// import styled from "styled-components";
// import { BsHouseDoorFill } from "react-icons/bs";
// import { MdOtherHouses } from "react-icons/md";

// const StyledSection = styled.section`
//   display: flex;
// `;

// const StyledColumn = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 30px;
// `;

// const StyledIcon = styled.div`
//   width: 42px;
//   height: 42px;
// `;

// const StyledNumber = styled.p`
//   font-size: 24px;
//   font-weight: bold;
//   margin-top: 10px;
// `;

// const StyledText = styled.p`
//   font-size: 16px;
//   text-align: center;
// `;

// const IntroductionFirstPart = () => {
//   return (
//     <StyledSection className="introduction_first_part">
//       <StyledColumn>
//         <StyledIcon>
//           <MdOtherHouses />
//         </StyledIcon>
//         <StyledNumber>4829</StyledNumber>
//         <StyledText>boliger solgt</StyledText>
//       </StyledColumn>
//       <StyledColumn>
//         <StyledIcon>
//           <BsHouseDoorFill />
//         </StyledIcon>
//         <StyledNumber>158</StyledNumber>
//         <StyledText>boliger til salg</StyledText>
//       </StyledColumn>
//     </StyledSection>
//   );
// }

// export default IntroductionFirstPart;



