import styled from "styled-components";
import Logo from "../assets/logo.png"
import Address from "../components/Address";


const StyledSection = styled.section`
    width: 100%
    height: 877px;

`
const StyledLogo = styled.div``
const StyledBigDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const StyledLeftDiv = styled.div``
const StyledRightDiv = styled.div`
    margin-right: 380px;
`

const StyledLittleDiv = styled.div`
    display: flex;
    justify-content: space-between;
`
const StyledP = styled.p`
    margin-right: 320px;   
    color: #7B7B7B; 
`
const StyledSpan = styled.span`
    font-weight: bold;
    font-size: 20px;
`
const Footer = () =>{
    return(
        <StyledSection>
            <StyledLogo><img src={Logo} alt="" /></StyledLogo>
            <p>There are many variations of passages of Lorem Ipsum available,
                 but the majority have <br/> suffered alteration in some form, 
                 by injected humour, or randomised words.
            </p>
            <StyledBigDiv>
                {/* <StyledLeftDiv>
                    
                </StyledLeftDiv> */}
                <Address />

                <StyledRightDiv>
                    <ul>Quick Links
                        <li />
                        <a href="">Boliger til salg</a>
                        <li />
                        <a href="">Mæglere</a>
                        <li />
                        <a href="">Kontakt os</a>
                        <li />
                        <a href="">Log ind / bliv bruger</a>
                    </ul>
                </StyledRightDiv>
            </StyledBigDiv>
            <StyledLittleDiv>
                <p>Din Mægler Roskilde, er din <br/> boligibutik i lokalområdet.</p>
                <StyledP>Medlem af <br/> 
                    <StyledSpan>DMS</StyledSpan>
                
                     <br/> Dansk Mægler Sammenslutning</StyledP>
              
            </StyledLittleDiv>

        </StyledSection>
    )
}

export default Footer;