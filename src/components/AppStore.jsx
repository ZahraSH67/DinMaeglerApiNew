import styled from "styled-components";
import {FaGooglePlay} from "react-icons/fa";
import {AiOutlineApple} from "react-icons/ai";
import Img1 from "../assets/left.png"
import Img2 from "../assets/right.png"



const StyledSection = styled.section`
    width: 100%
    height: 512px;
    background-color: #162A41;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 60px;
`

const StyledLeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-conetnt: center;
    align-items:space-evenly ;
 
`
const StyledRightDiv = styled.div``

const StyledLittleDiv = styled.div`
    display: flex;
    gap: 10px;
    
`
const StyledButtonGoogle= styled.button`
    width: 189px;
    height: 62px;
    background-color: white;
    color: black;
    display: flex,
    align-items: center;
    justify-content: center;
`
const StyledButtonApple= styled.button`
    width: 189px;
    height: 62px;
    background-color: #162A41;
    color: white;
    display: flex,
    align-items: center;
    justify-content: center;

`

const StyledFaGooglePlay = styled(FaGooglePlay)`
    width: 24px;
    height: 24px;
`
const StyledAiOutlineApple = styled(AiOutlineApple)`
    width: 24px;
    height: 24px;
`


const StyledImg = styled.img`
    width: 270px;
    height: 425px;
`


const AppStore = () =>{
    return(
        <StyledSection>
            <StyledLeftDiv>
                <h3>Hold dig opdateret <br/> på salgsprocessen</h3>
                <p>Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den <br/>
                 ansvarlige mægler eller butik med vores app. Her kan du også se statistik
                  på <br/>interessen for din bolig i alle vores salgskanaler.</p>
                  <StyledLittleDiv>
                        <StyledButtonGoogle>
                        <StyledFaGooglePlay/> Google Play
                        </StyledButtonGoogle>
                        <StyledButtonApple>
                        <StyledAiOutlineApple/> Apple Store
                        </StyledButtonApple>
                  </StyledLittleDiv>
                </StyledLeftDiv>
                <StyledRightDiv>
                <StyledImg src={Img1}/>
                <StyledImg src={Img2}/>
            </StyledRightDiv>
        </StyledSection>
    )
}
export default AppStore;