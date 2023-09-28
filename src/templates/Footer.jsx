import styled from "styled-components";
import Logo from "../assets/logo.png"
import Address from "../components/Address";
import { Link } from "react-router-dom";


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
    display: flex;
    flex-direction: column;
   
    

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
                    <h6 className="footerHeader"> Quick Links</h6>

                    <Link to="/buildingsforsale" className="footerLink">
                        {/* <a href="" className="footerLink"> */}
                            Boliger til salg
                            {/* </a> */}
                    </Link>

                    <Link to="/agentview" className="footerLink">
                        {/* <a href="" className="footerLink"> */}
                            Mæglere
                            {/* </a> */}
                    </Link>
                    <Link to="/contactus" className="footerLink">
                        {/* <a href="" className="footerLink"> */}
                            Kontakt os
                            {/* </a> */}
                    </Link>
                    
                    <Link to="/registrationpage" className="footerLink">
                        {/* <a href="" className="footerLink"> */}
                             Log ind / bliv bruger
                             {/* </a>    */}
                    </Link>
                    
                    {/* <ul>Quick Links
                        <li><a href="">Boliger til salg</a></li>
                        <li><a href="">Mæglere</a></li>
                        <li><a href="">Kontakt os</a></li>
                        <li>
                        <Link to="/registrationpage">
                            <a href="">Log ind / bliv bruger</a>
                            </Link>
                            
                        </li>
                    </ul> */}
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